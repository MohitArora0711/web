// RegistrationForm.tsx
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Cookies from 'js-cookie';
import { AlertCircle,  CheckCircle, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

type FormType = 'volunteer';

interface FormData {
    volunteer: {
        fullName: string;
        email: string;
        phone: string;
        city: string;
        institution: string;
        courseYear: string;
        socialMedia: string;
        availableInPerson: string;
        volunteerArea: string;
        priorExperience: string;
        motivation: string;
        specialSkills: string;
        hearAboutUs: string;
    };
}

interface FormErrors {
    [key: string]: string;
}

export const VolunteerForm = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <button onClick={() => setIsOpen(true)}
                    className='font-bold underline'
                >
                    Join as Volunteer
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <VisuallyHidden>
                        <DialogTitle className="text-2xl font-bold text-center">Registration Form</DialogTitle>
                        <DialogDescription className="text-center">
                            Join us on April 26-27, 2025 at North Campus, University of Delhi
                        </DialogDescription>
                    </VisuallyHidden>
                </DialogHeader>

                <RegistrationForm onClose={() => setIsOpen(false)} />
            </DialogContent>
        </Dialog >
    );
};

const RegistrationForm = ({ onClose }: { onClose?: () => void }) => {
    const [formType, setFormType] = useState<FormType | null>("volunteer");
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<FormData>({
        volunteer: {
            fullName: '',
            email: '',
            phone: '',
            city: '',
            institution: '',
            courseYear: '',
            socialMedia: '',
            availableInPerson: '',
            volunteerArea: '',
            priorExperience: '',
            motivation: '',
            specialSkills: '',
            hearAboutUs: '',
        },
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState({ type: '', message: '' });
    // Removed unused formError state

    useEffect(() => {
        const savedForm = Cookies.get('registrationFormData');
        const savedType = Cookies.get('registrationFormType');
        const savedStep = Cookies.get('registrationFormStep');

        if (savedForm) {
            try {
                setFormData(JSON.parse(savedForm));
            } catch {
                console.error('Error parsing saved form data');
            }
        }

        if (savedType) {
            setFormType(savedType as FormType);
        }

        if (savedStep) {
            setCurrentStep(parseInt(savedStep));
        }
    }, []);

    useEffect(() => {
        if (formType) {
            Cookies.set('registrationFormData', JSON.stringify(formData), { expires: 7 });
            Cookies.set('registrationFormType', formType, { expires: 7 });
            Cookies.set('registrationFormStep', currentStep.toString(), { expires: 7 });
        }
    }, [formData, formType, currentStep]);

    const handleInputChange = (type: FormType, field: string, value: string | boolean) => {
        if (!type || !(type in formData)) return;

        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }

        setFormData(prev => ({
            ...prev,
            [type]: {
                ...prev[type as keyof FormData],
                [field]: value
            }
        }));
    };

    const clearAllCookies = () => {
        Cookies.remove('registrationFormData');
        Cookies.remove('registrationFormType');
        Cookies.remove('registrationFormStep');
    };

    const validateForm = (step: number): boolean => {
        const newErrors: FormErrors = {};
        let isValid = true;

        if (step === 0) {
            if (!formData.volunteer.fullName.trim()) {
                newErrors.fullName = 'Full name is required';
                isValid = false;
            }
            
            if (!formData.volunteer.email.trim()) {
                newErrors.email = 'Email is required';
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(formData.volunteer.email)) {
                newErrors.email = 'Email is invalid';
                isValid = false;
            }
            
            if (!formData.volunteer.phone.trim()) {
                newErrors.phone = 'Phone number is required';
                isValid = false;
            }
            
            if (!formData.volunteer.city.trim()) {
                newErrors.city = 'City is required';
                isValid = false;
            }
        } else if (step === 1) {
            if (!formData.volunteer.institution.trim()) {
                newErrors.institution = 'Institution name is required';
                isValid = false;
            }
            
            if (!formData.volunteer.courseYear.trim()) {
                newErrors.courseYear = 'Course and year is required';
                isValid = false;
            }
        } else if (step === 2) {
            if (!formData.volunteer.availableInPerson) {
                newErrors.availableInPerson = 'Please select an option';
                isValid = false;
            }
            
            if (!formData.volunteer.volunteerArea) {
                newErrors.volunteerArea = 'Please select a volunteering area';
                isValid = false;
            }
        } else if (step === 3) {
            if (!formData.volunteer.motivation.trim()) {
                newErrors.motivation = 'Motivation is required';
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleNextStep = () => {
        if (validateForm(currentStep)) {
            setCurrentStep(currentStep + 1);
            setSubmissionMessage({ type: '', message: '' });
        } else {
            setSubmissionMessage({ type: 'error', message: 'Please fill in all required fields correctly.' });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm(currentStep)) {
            setSubmissionMessage({ type: 'error', message: 'Please fill in all required fields correctly.' });
            return;
        }

        setIsLoading(true);
        const currentFormData = formData.volunteer;

        try {
            //url apne hisab se change kr dena  waise ye api/test wale me check kr lia he maine
            const response = await axios.post('/api/test', {
                formType,
                data: currentFormData,
            });

            if (response.status === 200) {
                setSubmissionMessage({
                    type: 'success',
                    message: 'Your volunteer application has been submitted successfully! We will contact you soon.'
                });
                setIsSubmitted(true);
                toast.success('Form submitted successfully!');
                clearAllCookies();
            } else {
                setSubmissionMessage({
                    type: 'error',
                    message: 'Something went wrong. Please try again.'
                });
                toast.error('Something went wrong. Please try again.');
            }
        } catch (error: unknown) {
            console.error('Submission error:', error);
            if (axios.isAxiosError(error) && error.response?.data?.message) {
                setSubmissionMessage({
                    type: 'error',
                    message: error.response.data.message
                });
                toast.error(error.response.data.message);
            } else {
                setSubmissionMessage({
                    type: 'error',
                    message: 'Failed to submit the form. Please try again later.'
                });
                toast.error('Failed to submit the form!');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        clearAllCookies();
        setCurrentStep(0);
        setIsSubmitted(false);
        setSubmissionMessage({ type: '', message: '' });
        setErrors({});
        setFormData({
            volunteer: {
                fullName: '',
                email: '',
                phone: '',
                city: '',
                institution: '',
                courseYear: '',
                socialMedia: '',
                availableInPerson: '',
                volunteerArea: '',
                priorExperience: '',
                motivation: '',
                specialSkills: '',
                hearAboutUs: '',
            }
        });
    };

    const SuccessCard = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="border-green-500">
                <CardContent className="pt-6 pb-6">
                    <div className="flex flex-col items-center text-center">
                        <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Registration Successful!</h3>
                        <p className="text-gray-600 mb-4">
                            Thank you for registering for Delhi Startup Summit 2025. We have received your information and will be in touch soon.
                        </p>
                        <Button onClick={onClose} className="mt-2">
                            Close
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );

    const ErrorCard = () => (
        <Card className="border-red-500 mt-4">
            <CardContent className="pt-4 pb-4">
                <div className="flex items-center">
                    <AlertCircle className="w-6 h-6 text-red-500 mr-2" />
                    <p className="text-red-500 font-medium">{submissionMessage.message}</p>
                </div>
            </CardContent>
        </Card>
    );

    if (isSubmitted && submissionMessage.type === 'success') {
        return <SuccessCard />;
    }

    if (isSubmitted && submissionMessage.type === 'error') {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
            >
                <Card className="overflow-hidden">
                    <CardHeader className="bg-red-50 p-6">
                        <div className="flex items-center justify-center mb-4">
                            <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                                <AlertCircle className="h-6 w-6 text-red-600" />
                            </div>
                        </div>
                        <CardTitle className="text-2xl font-bold text-center">
                            Submission Error
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <p className="text-center text-gray-700 mb-6">
                            {submissionMessage.message}
                        </p>
                        <div className="flex justify-center">
                            <div className="flex space-x-4">
                                <Button 
                                    variant="outline" 
                                    onClick={resetForm}
                                >
                                    Try Again
                                </Button>
                                <Button 
                                    onClick={onClose}
                                    className="bg-gray-600 hover:bg-gray-700"
                                >
                                    Close
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        );
    }

    if (formType === 'volunteer') {
        const volunteerSteps = [
            <>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                            id="fullName"
                            value={formData.volunteer.fullName}
                            onChange={(e) => handleInputChange('volunteer', 'fullName', e.target.value)}
                            required
                            className={errors.fullName ? "border-red-500" : ""}
                        />
                        {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                            id="email"
                            type="email"
                            value={formData.volunteer.email}
                            onChange={(e) => handleInputChange('volunteer', 'email', e.target.value)}
                            required
                            className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                            id="phone"
                            value={formData.volunteer.phone}
                            onChange={(e) => handleInputChange('volunteer', 'phone', e.target.value)}
                            required
                            className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="city">In which city are you currently based? *</Label>
                        <Input
                            id="city"
                            value={formData.volunteer.city}
                            onChange={(e) => handleInputChange('volunteer', 'city', e.target.value)}
                            required
                            className={errors.city ? "border-red-500" : ""}
                        />
                        {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
                    </div>
                </div>
            </>,
            <>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="institution">Name of College/Institution/University *</Label>
                        <Input
                            id="institution"
                            value={formData.volunteer.institution}
                            onChange={(e) => handleInputChange('volunteer', 'institution', e.target.value)}
                            required
                            className={errors.institution ? "border-red-500" : ""}
                        />
                        {errors.institution && <p className="text-sm text-red-500">{errors.institution}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="courseYear">Course and Year *</Label>
                        <Input
                            id="courseYear"
                            value={formData.volunteer.courseYear}
                            onChange={(e) => handleInputChange('volunteer', 'courseYear', e.target.value)}
                            required
                            className={errors.courseYear ? "border-red-500" : ""}
                        />
                        {errors.courseYear && <p className="text-sm text-red-500">{errors.courseYear}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="socialMedia">Social Media Profile (Preferably LinkedIn)</Label>
                        <Input
                            id="socialMedia"
                            value={formData.volunteer.socialMedia}
                            onChange={(e) => handleInputChange('volunteer', 'socialMedia', e.target.value)}
                        />
                    </div>
                </div>
            </>,
            <>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label>Are you available to volunteer in person in Delhi between April 10th and April 28th, 2025? *</Label>
                        <RadioGroup
                            value={formData.volunteer.availableInPerson}
                            onValueChange={(value: string) => handleInputChange('volunteer', 'availableInPerson', value)}
                            className="flex flex-col space-y-2"
                            required
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Yes" id="yes" />
                                <Label htmlFor="yes">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="No" id="no" />
                                <Label htmlFor="no">No</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Not Sure Yet" id="notSure" />
                                <Label htmlFor="notSure">Not Sure Yet</Label>
                            </div>
                        </RadioGroup>
                        {errors.availableInPerson && <p className="text-sm text-red-500">{errors.availableInPerson}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="volunteerArea">Which volunteering area interests you the most? *</Label>
                        <Select
                            value={formData.volunteer.volunteerArea}
                            onValueChange={(value) => handleInputChange('volunteer', 'volunteerArea', value)}
                            required
                        >
                            <SelectTrigger id="volunteerArea" className={errors.volunteerArea ? "border-red-500" : ""}>
                                <SelectValue placeholder="Select an area" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Public Relations">Public Relations</SelectItem>
                                <SelectItem value="Social Media & Content Creation">Social Media & Content Creation</SelectItem>
                                <SelectItem value="Event Operations">Event Operations (logistics, stage, registration)</SelectItem>
                                <SelectItem value="Startup & Speaker Coordination">Startup & Speaker Coordination</SelectItem>
                                <SelectItem value="Photography/Videography">Photography/Videography</SelectItem>
                                <SelectItem value="Design & Creatives">Design & Creatives</SelectItem>
                                <SelectItem value="Sponsorship & Outreach Support">Sponsorship & Outreach Support</SelectItem>
                                <SelectItem value="Help Desk & Attendee Engagement">Help Desk & Attendee Engagement</SelectItem>
                                <SelectItem value="Marketing">Marketing</SelectItem>
                                <SelectItem value="Stall & Exhibition Management">Stall & Exhibition Management</SelectItem>
                                <SelectItem value="Any area">Any area – I just want to volunteer!</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.volunteerArea && <p className="text-sm text-red-500">{errors.volunteerArea}</p>}
                    </div>
                </div>
            </>,
            <>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="priorExperience">Have you volunteered in similar events before? If yes, briefly describe.</Label>
                        <Textarea
                            id="priorExperience"
                            value={formData.volunteer.priorExperience}
                            onChange={(e) => handleInputChange('volunteer', 'priorExperience', e.target.value)}
                            className="min-h-24"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="motivation">Why do you want to volunteer for Delhi Startup Summit? *</Label>
                        <Textarea
                            id="motivation"
                            value={formData.volunteer.motivation}
                            onChange={(e) => handleInputChange('volunteer', 'motivation', e.target.value)}
                            className={`min-h-24 ${errors.motivation ? "border-red-500" : ""}`}
                            required
                        />
                        {errors.motivation && <p className="text-sm text-red-500">{errors.motivation}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="specialSkills">Do you have any special skills we should know about? (e.g. public speaking, design, tech, photography, etc.)</Label>
                        <Textarea
                            id="specialSkills"
                            value={formData.volunteer.specialSkills}
                            onChange={(e) => handleInputChange('volunteer', 'specialSkills', e.target.value)}
                            className="min-h-24"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                        <Input
                            id="hearAboutUs"
                            value={formData.volunteer.hearAboutUs}
                            onChange={(e) => handleInputChange('volunteer', 'hearAboutUs', e.target.value)}
                        />
                    </div>
                </div>
            </>
        ];

        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 overflow-hidden"
            >
                <Dialog>
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center">Volunteer Registration Form</DialogTitle>
                        <DialogDescription className="text-center">
                            Thank you for your interest in volunteering at the Delhi Startup Summit 2025!
                            <br />Join us in shaping a dynamic platform for startups, investors, policymakers, and innovators.
                        </DialogDescription>
                    </DialogHeader>
                </Dialog>
                
                {/* {formError && <ErrorCard />} */}
                
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-medium flex items-center">
                            Step {currentStep + 1} of {volunteerSteps.length}
                            <div className="ml-auto text-sm font-normal text-gray-500">
                                {currentStep === 0 ? "Basic Information" :
                                    currentStep === 1 ? "Educational Background" :
                                        currentStep === 2 ? "Availability & Preferences" : "Experience & Skills"}
                            </div>
                        </CardTitle>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${((currentStep + 1) / volunteerSteps.length) * 100}%` }}
                            ></div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <form>
                            {volunteerSteps[currentStep]}
                        </form>
                        {submissionMessage.type==="error" && <ErrorCard />}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <div>
                            {currentStep > 0 && (
                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentStep(currentStep - 1)}
                                    className="flex items-center"
                                    disabled={isLoading}
                                >
                                    <ChevronLeft className="w-4 h-4 mr-1" /> Back
                                </Button>
                            )}
                        </div>
                        <div className="flex space-x-2">
                            <Button 
                                variant="ghost" 
                                onClick={resetForm}
                                disabled={isLoading}
                            >
                                Reset
                            </Button>
                            {currentStep < volunteerSteps.length - 1 ? (
                                <Button
                                    onClick={handleNextStep}
                                    className="bg-purple-600 hover:bg-purple-700 flex items-center"
                                    disabled={isLoading}
                                >
                                    Next <ChevronRight className="w-4 h-4 ml-1" />
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleSubmit}
                                    className="bg-green-600 hover:bg-green-700"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        'Submit'
                                    )}
                                </Button>
                            )}
                        </div>
                    </CardFooter>
                </Card>
            </motion.div>
        );
    }

    return null;
};

export default RegistrationForm;