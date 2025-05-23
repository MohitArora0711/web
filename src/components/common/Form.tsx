import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Cookies from 'js-cookie';
import { ChevronLeft, ChevronRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Image from 'next/image';

type FormType = 'participant' | 'startup';



interface ParticipantFormType {
    name: string;
    email: string;
    phone: string;
    age: string;
    gender: string;
    profession: string;
    referral: string;
    festivalDate: string;
}

interface StartupFormType {
    username: string;
    email: string;
    phone: string;
    message: string;
    category: string;
    categoryOther: string;
    discountApply: string;
    termsAgreed: boolean;
}

interface FormData {
    participant: {
        festivalDate: string;
        name: string;
        email: string;
        phone: string;
        age: string;
        gender: string;
        profession: string;
        referral: string;
    };
    startup: {
        username: string;
        email: string;
        phone: string;
        message: string;
        category: string;
        categoryOther: string;
        discountApply: string;
        termsAgreed: boolean;
    };
}

interface FormErrors {
    participant: {
        [key: string]: string;
    };
    startup: {
        [key: string]: string;
    };
}

export const FormButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    className="bg-gradient-to-r syne from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-full md:px-8 text-[16px] md:py-6 shadow-lg transition duration-300 ease-in-out"
                    onClick={() => setIsOpen(true)}
                >
                    Register now <Image className='' width={10} height={10} src="/arrow.png" alt=">" />
                </Button>
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
    Cookies.remove('registrationFormData');
    Cookies.remove('registrationFormType');
    Cookies.remove('registrationFormStep');
    const [formType, setFormType] = useState<FormType | null>(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);
    const [formErrors, setFormErrors] = useState<FormErrors>({
        participant: {},
        startup: {}
    });

    const [formData, setFormData] = useState<FormData>({
        participant: {
            festivalDate: '',
            name: '',
            email: '',
            phone: '',
            age: '',
            gender: '',
            profession: '',
            referral: '',
        },
        startup: {
            username: '',
            email: '',
            phone: '',
            message: '',
            category: '',
            categoryOther: '',
            discountApply: '',
            termsAgreed: false,
        }
    });

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
        if (!type) return;

        setFormErrors(prev => ({
            ...prev,
            [type]: {
                ...prev[type],
                [field]: ''
            }
        }));

        setFormData(prev => ({
            ...prev,
            [type]: {
                ...prev[type],
                [field]: value
            }
        }));
    };

    const clearAllCookies = () => {
        Cookies.remove('registrationFormData');
        Cookies.remove('registrationFormType');
        Cookies.remove('registrationFormStep');
    };

    const validateForm = (): boolean => {
        const currentFormData = formType ? formData[formType] : null;
        if (!currentFormData) return false;

        const newErrors: { [key: string]: string } = {};
        let isValid = true;

        // Type guards
        const isParticipant = formType === 'participant';
        const isStartup = formType === 'startup';

        if (isParticipant) {
            const data = currentFormData as ParticipantFormType;

            if (currentStep === 0) {
                if (!data.name.trim()) {
                    newErrors.name = 'Name is required';
                    isValid = false;
                }
                if (!data.email.trim()) {
                    newErrors.email = 'Email is required';
                    isValid = false;
                } else if (!/\S+@\S+\.\S+/.test(data.email)) {
                    newErrors.email = 'Valid email is required';
                    isValid = false;
                }
                if (!data.phone.trim()) {
                    newErrors.phone = 'Phone number is required';
                    isValid = false;
                }
                if (!data.age.trim()) {
                    newErrors.age = 'Age is required';
                    isValid = false;
                }
            } else if (currentStep === 1) {
                if (!data.gender) {
                    newErrors.gender = 'Please select your gender';
                    isValid = false;
                }
                if (!data.profession.trim()) {
                    newErrors.profession = 'Profession is required';
                    isValid = false;
                }
                if (!data.festivalDate) {
                    newErrors.festivalDate = 'Please select which day(s) you will attend';
                    isValid = false;
                }
            }
        } else if (isStartup) {
            const data = currentFormData as StartupFormType;

            if (currentStep === 0) {
                if (!data.username.trim()) {
                    newErrors.username = 'Username/Code is required';
                    isValid = false;
                }
                if (!data.email.trim()) {
                    newErrors.email = 'Email is required';
                    isValid = false;
                } else if (!/\S+@\S+\.\S+/.test(data.email)) {
                    newErrors.email = 'Valid email is required';
                    isValid = false;
                }
                if (!data.phone.trim()) {
                    newErrors.phone = 'Phone number is required';
                    isValid = false;
                }
            } else if (currentStep === 1) {
                if (!data.category) {
                    newErrors.category = 'Please select a category';
                    isValid = false;
                }
                if (data.category === 'Other' && !data.categoryOther.trim()) {
                    newErrors.categoryOther = 'Please specify the category';
                    isValid = false;
                }
            } else if (currentStep === 2) {
                if (!data.termsAgreed) {
                    newErrors.termsAgreed = 'You must agree to the terms';
                    isValid = false;
                }
            }
        }

        setFormErrors(prev => ({
            ...prev,
            [formType as FormType]: newErrors
        }));

        return isValid;
    };


    const handleNextStep = () => {
        if (validateForm()) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error('Please fill all required fields correctly');
            return;
        }

        const currentFormData = formData[formType as FormType];
        setIsSubmitting(true);
        setFormError(null);

        try {
            const response = await axios.post('/api/test', {
                formType,
                data: currentFormData,
            });

            if (response.status === 200) {
                toast.success('Form submitted successfully!');
                setFormSuccess(true);
                clearAllCookies();

                setTimeout(() => {
                    if (onClose) {
                        onClose();
                    }
                }, 3000);
            } else {
                setFormError('Something went wrong. Please try again.');
                toast.error('Something went wrong. Please try again.');
            }
        } catch (error: unknown) {
            console.error('Submission error:', error);
            if (axios.isAxiosError(error) && error.response?.data?.message) {
                setFormError(error.response.data.message);
                toast.error(error.response.data.message);
            } else {
                setFormError('Failed to submit the form!');
                toast.error('Failed to submit the form!');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        clearAllCookies();

        setFormType(null);
        setCurrentStep(0);
        setFormSuccess(false);
        setFormError(null);

        setFormData({
            participant: {
                festivalDate: '',
                name: '',
                email: '',
                phone: '',
                age: '',
                gender: '',
                profession: '',
                referral: '',
            },
            startup: {
                username: '',
                email: '',
                phone: '',
                message: '',
                category: '',
                categoryOther: '',
                discountApply: '',
                termsAgreed: false,
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
                        <Button onClick={resetForm} className="mt-2">
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
                    <p className="text-red-500 font-medium">{formError}</p>
                </div>
            </CardContent>
        </Card>
    );

    if (formSuccess) {
        return <SuccessCard />;
    }

    if (!formType) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
            >
                <Dialog>
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center">Delhi Startup Summit 2025</DialogTitle>
                        <DialogDescription className="text-center text-lg">
                            Join us on April 26-27, 2025 at North Campus, University of Delhi
                        </DialogDescription>
                    </DialogHeader>
                </Dialog>
                <div className="grid gap-6">
                    <Button
                        onClick={() => setFormType('participant')}
                        size="lg"
                        variant="outline"
                        className="h-24 text-lg border-2 hover:bg-purple-50 hover:border-purple-500 transition-all duration-300"
                    >
                        Register as Participant
                    </Button>

                    <Button
                        onClick={() => setFormType('startup')}
                        size="lg"
                        variant="outline"
                        className="h-24 text-lg border-2 hover:bg-blue-50 hover:border-blue-500 transition-all duration-300"
                    >
                        Register as Startup/MSME
                    </Button>
                </div>
            </motion.div>
        );
    }

    if (formType === 'participant') {
        const errors = formErrors.participant;
        const participantSteps = [
            <>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                            id="name"
                            value={formData.participant.name}
                            onChange={(e) => handleInputChange('participant', 'name', e.target.value)}
                            required
                            className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                            id="email"
                            type="email"
                            value={formData.participant.email}
                            onChange={(e) => handleInputChange('participant', 'email', e.target.value)}
                            required
                            className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                            id="phone"
                            value={formData.participant.phone}
                            onChange={(e) => handleInputChange('participant', 'phone', e.target.value)}
                            required
                            className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="age">Age *</Label>
                        <Input
                            id="age"
                            value={formData.participant.age}
                            onChange={(e) => handleInputChange('participant', 'age', e.target.value)}
                            required
                            className={errors.age ? "border-red-500" : ""}
                        />
                        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
                    </div>
                </div>
            </>,
            <>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="gender">Gender *</Label>
                        <RadioGroup
                            value={formData.participant.gender}
                            onValueChange={(value: string) => handleInputChange('participant', 'gender', value)}
                            className="flex flex-col space-y-2"
                            required
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Male" id="male" />
                                <Label htmlFor="male">Male</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Female" id="female" />
                                <Label htmlFor="female">Female</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Other" id="other" />
                                <Label htmlFor="other">Other</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Prefer not to say" id="preferNotToSay" />
                                <Label htmlFor="preferNotToSay">Prefer not to say</Label>
                            </div>
                        </RadioGroup>
                        {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="profession">Profession *</Label>
                        <Input
                            id="profession"
                            value={formData.participant.profession}
                            onChange={(e) => handleInputChange('participant', 'profession', e.target.value)}
                            required
                            className={errors.profession ? "border-red-500" : ""}
                        />
                        {errors.profession && <p className="text-red-500 text-sm">{errors.profession}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="festivalDate">Which day(s) will you attend? *</Label>
                        <Select
                            value={formData.participant.festivalDate}
                            onValueChange={(value) => handleInputChange('participant', 'festivalDate', value)}
                            required
                        >
                            <SelectTrigger id="festivalDate" className={errors.festivalDate ? "border-red-500" : ""}>
                                <SelectValue placeholder="Select day(s)" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="day1">April 26, 2025 (Day 1)</SelectItem>
                                <SelectItem value="day2">April 27, 2025 (Day 2)</SelectItem>
                                <SelectItem value="bothDays">Both Days</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.festivalDate && <p className="text-red-500 text-sm">{errors.festivalDate}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="referral">How did you hear about us?</Label>
                        <Select
                            value={formData.participant.referral}
                            onValueChange={(value) => handleInputChange('participant', 'referral', value)}
                        >
                            <SelectTrigger id="referral">
                                <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="social">Social Media</SelectItem>
                                <SelectItem value="friend">Friend/Colleague</SelectItem>
                                <SelectItem value="university">University/College</SelectItem>
                                <SelectItem value="email">Email Newsletter</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
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
                        <DialogTitle className="text-2xl font-bold text-center">Participant Registration Form</DialogTitle>
                        <DialogDescription className="text-center">
                            Thank you for your interest in attending the Delhi Startup Summit 2025!
                            <br />Join us for an exciting gathering of startups, investors, policymakers, and innovators.
                        </DialogDescription>
                    </DialogHeader>
                </Dialog>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-medium flex items-center">
                            Step {currentStep + 1} of {participantSteps.length}
                            <div className="ml-auto text-sm font-normal text-gray-500">
                                {currentStep === 0 ? "Basic Information" : "Additional Details"}
                            </div>
                        </CardTitle>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${((currentStep + 1) / participantSteps.length) * 100}%` }}
                            ></div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <form>
                            {participantSteps[currentStep]}
                        </form>
                        {formError && <ErrorCard />}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <div>
                            {currentStep > 0 && (
                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentStep(currentStep - 1)}
                                    className="flex items-center"
                                    disabled={isSubmitting}
                                >
                                    <ChevronLeft className="w-4 h-4 mr-1" /> Back
                                </Button>
                            )}
                        </div>
                        <div className="flex space-x-2">
                            <Button
                                variant="ghost"
                                onClick={resetForm}
                                disabled={isSubmitting}
                            >
                                Reset
                            </Button>
                            {currentStep < participantSteps.length - 1 ? (
                                <Button
                                    onClick={handleNextStep}
                                    className="bg-purple-600 hover:bg-purple-700 flex items-center"
                                    disabled={isSubmitting}
                                >
                                    Next <ChevronRight className="w-4 h-4 ml-1" />
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleSubmit}
                                    className="bg-green-600 hover:bg-green-700 flex items-center"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...
                                        </>
                                    ) : (
                                        "Submit"
                                    )}
                                </Button>
                            )}
                        </div>
                    </CardFooter>
                </Card>
            </motion.div>
        );
    }

    if (formType === 'startup') {
        const errors = formErrors.startup;
        const startupSteps = [
            <>
                <div className="space-y-4">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-md mb-4">
                        <p className="text-blue-700 font-medium">Important Notice</p>
                        <p className="text-blue-600">Please register your startup at <a href="https://neecop.com" target="_blank" rel="noopener noreferrer" className="underline font-medium">neecop.com</a> first. You will receive a code or username on your Register Email address of Neecop which is required to complete this registration.</p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="username">Username/Code from NEECOP *</Label>
                        <Input
                            id="username"
                            value={formData.startup.username}
                            onChange={(e) => handleInputChange('startup', 'username', e.target.value)}
                            required
                            className={errors.username ? "border-red-500" : ""}
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="startupEmail">Email Address *</Label>
                        <Input
                            id="startupEmail"
                            type="email"
                            value={formData.startup.email}
                            onChange={(e) => handleInputChange('startup', 'email', e.target.value)}
                            required
                            className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="startupPhone">Phone Number (Preferably WhatsApp) *</Label>
                        <Input
                            id="startupPhone"
                            value={formData.startup.phone}
                            onChange={(e) => handleInputChange('startup', 'phone', e.target.value)}
                            required
                            className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message to us (Optional)</Label>
                        <Textarea
                            id="message"
                            value={formData.startup.message}
                            onChange={(e) => handleInputChange('startup', 'message', e.target.value)}
                            className="min-h-24"
                        />
                    </div>
                </div>
            </>,
            <>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="category">Which category best fits your startup/MSME? *</Label>
                        <Select
                            value={formData.startup.category}
                            onValueChange={(value) => handleInputChange('startup', 'category', value)}
                            required
                        >
                            <SelectTrigger id="category" className={errors.category ? "border-red-500" : ""}>
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Tech & Innovation">Tech & Innovation</SelectItem>
                                <SelectItem value="Agri & Rural">Agri & Rural</SelectItem>
                                <SelectItem value="Fintech">Fintech</SelectItem>
                                <SelectItem value="Health & Wellness">Health & Wellness</SelectItem>
                                <SelectItem value="Green/Climate Startups">Green/Climate Startups</SelectItem>
                                <SelectItem value="Manufacturing MSME">Manufacturing MSME</SelectItem>
                                <SelectItem value="Women-led Enterprise">Women-led Enterprise</SelectItem>
                                <SelectItem value="Social Enterprise">Social Enterprise</SelectItem>
                                <SelectItem value="Other">Other (Please specify)</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
                    </div>

                    {formData.startup.category === 'Other' && (
                        <div className="space-y-2">
                            <Label htmlFor="categoryOther">Please specify category *</Label>
                            <Input
                                id="categoryOther"
                                value={formData.startup.categoryOther}
                                onChange={(e) => handleInputChange('startup', 'categoryOther', e.target.value)}
                                required
                                className={errors.categoryOther ? "border-red-500" : ""}
                            />
                            {errors.categoryOther && <p className="text-red-500 text-sm">{errors.categoryOther}</p>}
                        </div>
                    )}

                    <div className="space-y-2">
                        <Label>Would you like to apply for a discount (only for student/women-led startups)?</Label>
                        <RadioGroup
                            value={formData.startup.discountApply}
                            onValueChange={(value: string) => handleInputChange('startup', 'discountApply', value)}
                            className="flex flex-col space-y-2"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Yes" id="discountYes" />
                                <Label htmlFor="discountYes">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="No" id="discountNo" />
                                <Label htmlFor="discountNo">No</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Maybe" id="discountMaybe" />
                                <Label htmlFor="discountMaybe">Maybe</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="flex items-start space-x-2 pt-4">
                        <Checkbox
                            id="terms"
                            checked={formData.startup.termsAgreed as boolean}
                            onCheckedChange={(checked: boolean) =>
                                handleInputChange('startup', 'termsAgreed', checked === true)
                            }
                            required
                            className={errors.termsAgreed ? "border-red-500" : ""}
                        />
                        <Label htmlFor="terms" className="text-sm">
                            I understand that submission of this form does not confirm final allotment, and the organizing team will contact me regarding next steps. *
                        </Label>
                    </div>
                    {errors.termsAgreed && <p className="text-red-500 text-sm ml-6">{errors.termsAgreed}</p>}
                </div>
            </>,
        ];

        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
            >
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">Stall Booking Form</DialogTitle>
                    <DialogDescription className="text-center">
                        Welcome to the Delhi Startup Summit 2025! This is the official stall booking form for startups and MSMEs.
                        <br />Limited stalls available – first-come, first-served with shortlisting where applicable.
                    </DialogDescription>
                </DialogHeader>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-medium flex items-center">
                            Step {currentStep + 1} of {startupSteps.length}
                            <div className="ml-auto text-sm font-normal text-gray-500">
                                {currentStep === 0 ? "Basic Information" :
                                    currentStep === 1 ? "Company Details" :
                                        currentStep === 2 ? "Category Information" : "Additional Information"}
                            </div>
                        </CardTitle>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${((currentStep + 1) / startupSteps.length) * 100}%` }}
                            ></div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <form>
                            {startupSteps[currentStep]}
                        </form>
                        {formError && <ErrorCard />}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <div>
                            {currentStep > 0 && (
                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentStep(currentStep - 1)}
                                    className="flex items-center"
                                    disabled={isSubmitting}
                                >
                                    <ChevronLeft className="w-4 h-4 mr-1" /> Back
                                </Button>
                            )}
                        </div>
                        <div className="flex space-x-2">
                            <Button
                                variant="ghost"
                                onClick={resetForm}
                                disabled={isSubmitting}
                            >
                                Cancel
                            </Button>
                            {currentStep < startupSteps.length - 1 ? (
                                <Button
                                    onClick={handleNextStep}
                                    className="bg-blue-600 hover:bg-blue-700 flex items-center"
                                    disabled={isSubmitting}
                                >
                                    Next <ChevronRight className="w-4 h-4 ml-1" />
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleSubmit}
                                    className="bg-green-600 hover:bg-green-700 flex items-center"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...
                                        </>
                                    ) : (
                                        "Submit"
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
