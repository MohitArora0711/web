import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle, Award, Zap, Star } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const StallBookingForm = () => {
    const [open, setOpen] = useState(false);
    type PackageColors = {
        starter: string;
        standard: string;
        premium: string;
    };

    const [selectedPackage, setSelectedPackage] = useState<'starter' | 'standard' | 'premium' | null>(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [showPackageSelection, setShowPackageSelection] = useState(true);

    const initialFormData = {
        packageType: '',
        startup: {
            startupName: '',
            founderName: '',
            email: '',
            phone: '',
            location: '',
            socialMedia: '',
            established: '',
            description: '',
            category: '',
            categoryOther: '',
            discountApply: '',
            availableInDelhi: '',
            termsAgreed: false
        }
    };

    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        const savedFormData = Cookies.get('stallBookingFormData');
        if (savedFormData) {
            try {
                const parsedData = JSON.parse(savedFormData);
                setFormData(parsedData);

                if (parsedData.packageType) {
                    setSelectedPackage(parsedData.packageType);
                    setShowPackageSelection(false);
                }
            } catch (error) {
                console.error('Error parsing saved form data:', error);
            }
        }
    }, []);

    useEffect(() => {
        Cookies.set('stallBookingFormData', JSON.stringify(formData), { expires: 7 });
    }, [formData]);

    interface StartupData {
        startupName: string;
        founderName: string;
        email: string;
        phone: string;
        location: string;
        socialMedia: string;
        established: string;
        description: string;
        category: string;
        categoryOther: string;
        discountApply: string;
        availableInDelhi: string;
        termsAgreed: boolean;
    }

    interface FormData {
        packageType: string;
        startup: StartupData;
    }

    const handleInputChange = (section: keyof FormData, field: keyof StartupData, value: string | boolean) => {
        setFormData(prevData => ({
            ...prevData,
            [section]: {
                ...(typeof prevData[section] === 'object' && prevData[section] !== null ? prevData[section] : {}),
                [field]: value
            }
        }));
    };


    const handlePackageSelect = (packageType: keyof PackageColors): void => {
        setSelectedPackage(packageType);
        setFormData((prevData: FormData) => ({
            ...prevData,
            packageType
        }));
        setShowPackageSelection(false);
    };

    const resetForm = () => {
        Cookies.remove('stallBookingFormData');
        setFormData(initialFormData);
        setSelectedPackage(null);
        setShowPackageSelection(true);
        setCurrentStep(0);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const currentFormData = formData;

        console.log('Form submitted:', currentFormData);
        console.log("form type: ");

        try {
            const response = await axios.post('/api/stallbooking', {
                data: currentFormData,
                message: 'New form submission',
            });

            if (response.status === 200) {
                toast.success('Form submitted successfully!');
                resetForm();
                setOpen(false);

            }
        } catch (error: unknown) {
            console.error('Submission error:', error);
            if (axios.isAxiosError(error) && error.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Failed to submit the form!');
            }
        }
    };


    const PackageCard = ({ title, price, features, color, onClick, icon }: { title: string; price: string; features: string[]; color: string; onClick: () => void; icon: React.ReactNode }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            className="w-full"
        >
            <Card className="h-full border-2 overflow-hidden flex flex-col">
                <CardHeader className={`${color} text-white`}>
                    <div className="flex justify-between items-center">
                        <CardTitle className="text-xl font-bold">{title}</CardTitle>
                        {icon}
                    </div>
                    <CardDescription className="text-white/80 mt-1 text-sm">
                        Stall Package
                    </CardDescription>
                    <div className="text-2xl font-bold mt-2">₹{price}</div>
                </CardHeader>
                <CardContent className="flex-grow py-4">
                    <ul className="space-y-2">
                        {features.map((feature: string, index: number) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter className="pt-0 pb-4">
                    <Button
                        className="w-full"
                        style={{ backgroundColor: color.replace('bg-', '') }}
                        onClick={onClick}
                    >
                        Buy Now
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );

    const PackageSelection = () => (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 py-4"
        >
            <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center">Select Your Stall Package</DialogTitle>
                <DialogDescription className="text-center">
                    Choose the package that best suits your startup&apos;s needs and budget for the Delhi Startup Summit 2025.
                </DialogDescription>
            </DialogHeader>

            <div className="grid md:grid-cols-3 gap-4 max-md:space-y-4">
                <PackageCard
                    title="Starter Stall"
                    price="3,000"
                    color="bg-[#06c9c7]"
                    icon={<Zap className="h-6 w-6" />}
                    features={[
                        "Basic booth setup (6x6 ft space)",
                        "1 table and 2 chairs",
                        "Entry for 2 team members",
                        "Listing in event directory",
                        "Basic Wi-Fi access"
                    ]}
                    onClick={() => handlePackageSelect('starter')}
                />

                <PackageCard
                    title="Standard Stall"
                    price="10,000"
                    color="bg-[#015599]"
                    icon={<Star className="h-6 w-6" />}
                    features={[
                        "Enhanced booth setup (8x8 ft space)",
                        "1 table and 3 chairs",
                        "Entry for 3 team members",
                        "Premium listing in event directory",
                        "Social media promotion (2 posts)",
                        "High-speed Wi-Fi access",
                        "Access to networking lounge"
                    ]}
                    onClick={() => handlePackageSelect('standard')}
                />

                <PackageCard
                    title="Premium Stall"
                    price="25,000"
                    color="bg-[#8800aa]"
                    icon={<Award className="h-6 w-6" />}
                    features={[
                        "Prime location booth (10x10 ft space)",
                        "Custom booth branding options",
                        "2 tables and 4 chairs",
                        "Entry for 4 team members",
                        "Featured listing in event directory",
                        "Dedicated social media campaign (5 posts)",
                        "3-minute pitch opportunity on main stage",
                        "Media interview opportunity",
                        "VIP access to all event areas",
                        "Priority technical support"
                    ]}
                    onClick={() => handlePackageSelect('premium')}
                />
            </div>
        </motion.div>
    );

    const startupSteps = [
        <>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="startupName">Startup/MSME Name *</Label>
                    <Input
                        id="startupName"
                        value={formData.startup.startupName}
                        onChange={(e) => handleInputChange('startup', 'startupName', e.target.value)}
                        required
                        className="border-gray-300 focus:border-[#8800aa] focus:ring-[#8800aa]"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="founderName">Founder Full Name *</Label>
                    <Input
                        id="founderName"
                        value={formData.startup.founderName}
                        onChange={(e) => handleInputChange('startup', 'founderName', e.target.value)}
                        required
                        className="border-gray-300 focus:border-[#8800aa] focus:ring-[#8800aa]"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="startupEmail">Email Address *</Label>
                    <Input
                        id="startupEmail"
                        type="email"
                        value={formData.startup.email}
                        onChange={(e) => handleInputChange('startup', 'email', e.target.value)}
                        required
                        className="border-gray-300 focus:border-[#8800aa] focus:ring-[#8800aa]"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="startupPhone">Phone Number (Preferably WhatsApp) *</Label>
                    <Input
                        id="startupPhone"
                        value={formData.startup.phone}
                        onChange={(e) => handleInputChange('startup', 'phone', e.target.value)}
                        required
                        className="border-gray-300 focus:border-[#8800aa] focus:ring-[#8800aa]"
                    />
                </div>
            </div>
        </>,
        <>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="location">Office Location (City, State) *</Label>
                    <Input
                        id="location"
                        value={formData.startup.location}
                        onChange={(e) => handleInputChange('startup', 'location', e.target.value)}
                        required
                        className="border-gray-300 focus:border-[#8800aa] focus:ring-[#8800aa]"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="startupSocialMedia">Website / Social Media Handles</Label>
                    <Input
                        id="startupSocialMedia"
                        value={formData.startup.socialMedia}
                        onChange={(e) => handleInputChange('startup', 'socialMedia', e.target.value)}
                        className="border-gray-300 focus:border-[#8800aa] focus:ring-[#8800aa]"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="established">Year of Establishment</Label>
                    <Input
                        id="established"
                        value={formData.startup.established}
                        onChange={(e) => handleInputChange('startup', 'established', e.target.value)}
                        className="border-gray-300 focus:border-[#8800aa] focus:ring-[#8800aa]"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="description">Brief Description of Product/Service (Max 100 words) *</Label>
                    <Textarea
                        id="description"
                        value={formData.startup.description}
                        onChange={(e) => handleInputChange('startup', 'description', e.target.value)}
                        className="min-h-24 border-gray-300 focus:border-[#8800aa] focus:ring-[#8800aa]"
                        required
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
                        <SelectTrigger id="category" className="border-gray-300 focus:border-[#8800aa] focus:ring-[#8800aa]">
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
                </div>

                {formData.startup.category === 'Other' && (
                    <div className="space-y-2">
                        <Label htmlFor="categoryOther">Please specify category *</Label>
                        <Input
                            id="categoryOther"
                            value={formData.startup.categoryOther}
                            onChange={(e) => handleInputChange('startup', 'categoryOther', e.target.value)}
                            required
                            className="border-gray-300 focus:border-[#8800aa] focus:ring-[#8800aa]"
                        />
                    </div>
                )}

                <div className="space-y-2">
                    <Label>Would you like to apply for a discount (only for student/women-led startups)?</Label>
                    <RadioGroup
                        value={formData.startup.discountApply}
                        onValueChange={(value) => handleInputChange('startup', 'discountApply', value)}
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
            </div>
        </>,
        <>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label>Are you available in Delhi between April 25–28, 2025 for setup and event participation? *</Label>
                    <RadioGroup
                        value={formData.startup.availableInDelhi}
                        onValueChange={(value) => handleInputChange('startup', 'availableInDelhi', value)}
                        className="flex flex-col space-y-2"
                        required
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Yes" id="availableYes" />
                            <Label htmlFor="availableYes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="No" id="availableNo" />
                            <Label htmlFor="availableNo">No</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Maybe" id="availableMaybe" />
                            <Label htmlFor="availableMaybe">Maybe</Label>
                        </div>
                    </RadioGroup>
                </div>

                <div className="flex items-start space-x-2 pt-4">
                    <Checkbox
                        id="terms"
                        checked={formData.startup.termsAgreed}
                        onCheckedChange={(checked) =>
                            handleInputChange('startup', 'termsAgreed', checked === true)
                        }
                        required
                    />
                    <Label htmlFor="terms" className="text-sm">
                        I understand that submission of this form does not confirm final allotment, and the organizing team will contact me regarding next steps. *
                    </Label>
                </div>
            </div>
        </>
    ];

    const SelectedPackageDisplay = () => {
        const packageColors = {
            starter: 'bg-gradient-to-r from-[#06c9c7] to-[#06c9c7]/80',
            standard: 'bg-gradient-to-r from-[#015599] to-[#015599]/80',
            premium: 'bg-gradient-to-r from-[#8800aa] to-[#8800aa]/80'
        };

        const packageIcons = {
            starter: <Zap className="h-5 w-5" />,
            standard: <Star className="h-5 w-5" />,
            premium: <Award className="h-5 w-5" />
        };

        const packageTitles = {
            starter: 'Starter Stall (₹3,000)',
            standard: 'Standard Stall (₹10,000)',
            premium: 'Premium Stall (₹25,000)'
        };

        return (
            <div className={`${selectedPackage && packageColors[selectedPackage as keyof typeof packageColors]} p-2 rounded-lg text-white flex items-center justify-between mb-4`}>
                <div className="flex items-center">
                    {selectedPackage && packageIcons[selectedPackage]}
                    <span className="ml-2 font-medium">{selectedPackage ? packageTitles[selectedPackage] : ''}</span>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    className="text-black border-white hover:bg-white/80"
                    onClick={() => setShowPackageSelection(true)}
                >
                    Change
                </Button>
            </div>
        );
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
            >
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8800aa] via-[#015599] to-[#06c9c7] bg-clip-text text-transparent">
                    Delhi Startup Summit 2025
                </h1>
                <p className="mt-2 text-gray-600">Showcase your startup at India's premier innovation event</p>
            </motion.div> */}

            {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid md:grid-cols-3 gap-4 mb-8"
            >
                <Card className="border-[#06c9c7]/30">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-[#06c9c7] flex items-center text-lg">
                            <Calendar className="h-5 w-5 mr-2" /> Event Dates
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>April 25-28, 2025</p>
                        <p className="text-sm text-gray-500">Including setup day</p>
                    </CardContent>
                </Card>

                <Card className="border-[#015599]/30">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-[#015599] flex items-center text-lg">
                            <MapPin className="h-5 w-5 mr-2" /> Location
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Pragati Maidan, New Delhi</p>
                        <p className="text-sm text-gray-500">Exhibition Halls 7-9</p>
                    </CardContent>
                </Card>

                <Card className="border-[#8800aa]/30">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-[#8800aa] flex items-center text-lg">
                            <Users className="h-5 w-5 mr-2" /> Expected Attendance
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>5,000+ Visitors</p>
                        <p className="text-sm text-gray-500">Investors, Media, Partners</p>
                    </CardContent>
                </Card>
            </motion.div> */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center "
            >
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        
                        <Button className="px-7 py-2 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-md transition-all duration-300 ease-in-out hover:from-purple-600 hover:to-blue-700 hover:shadow-[1px] hover:scale-10">
                            Book your stall
                        </Button>

                    </DialogTrigger>
                    <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
                        <AnimatePresence mode="wait">
                            {showPackageSelection ? (
                                <PackageSelection />
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    <DialogHeader>
                                        <DialogTitle className="text-2xl font-bold text-center">Stall Booking Form</DialogTitle>
                                        <DialogDescription className="text-center">
                                            Welcome to the Delhi Startup Summit 2025! Please complete this form to confirm your stall booking.
                                            <br />Limited stalls available – first-come, first-served with shortlisting where applicable.
                                        </DialogDescription>
                                    </DialogHeader>

                                    <SelectedPackageDisplay />

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
                                                    className="bg-gradient-to-r from-[#8800aa] to-[#015599] h-2 rounded-full transition-all duration-300"
                                                    style={{ width: `${((currentStep + 1) / startupSteps.length) * 100}%` }}
                                                ></div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <form>
                                                {startupSteps[currentStep]}
                                            </form>
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                            <div>
                                                {currentStep > 0 && (
                                                    <Button
                                                        variant="outline"
                                                        onClick={() => setCurrentStep(currentStep - 1)}
                                                        className="flex items-center"
                                                    >
                                                        <ChevronLeft className="w-4 h-4 mr-1" /> Back
                                                    </Button>
                                                )}
                                            </div>
                                            <div className="flex space-x-2">
                                                <Button variant="ghost" onClick={resetForm}>
                                                    Reset
                                                </Button>
                                                {currentStep < startupSteps.length - 1 ? (
                                                    <Button
                                                        onClick={() => setCurrentStep(currentStep + 1)}
                                                        className="bg-[#015599] hover:bg-[#015599]/90 flex items-center"
                                                    >
                                                        Next <ChevronRight className="w-4 h-4 ml-1" />
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        onClick={handleSubmit}
                                                        className="bg-[#8800aa] hover:bg-[#8800aa]/90"
                                                    >
                                                        Submit
                                                    </Button>
                                                )}
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </DialogContent>
                </Dialog>
            </motion.div>

            {/* Event Features
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid md:grid-cols-2 gap-6"
            >
                <Card className="border-[#015599]/20 hover:border-[#015599]/50 transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <MessageSquare className="h-5 w-5 mr-2 text-[#015599]" /> Networking Opportunities
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Connect with investors, potential customers, and corporate partners. Our event attracts decision-makers from across industries looking for innovative solutions.</p>
                    </CardContent>
                </Card>

                <Card className="border-[#06c9c7]/20 hover:border-[#06c9c7]/50 transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Camera className="h-5 w-5 mr-2 text-[#06c9c7]" /> Media Exposure
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Gain visibility with our media partners including top tech publications, TV channels, and digital platforms covering the entire event.</p>
                    </CardContent>
                </Card>
            </motion.div> */}
        </div>
    );
};

export default StallBookingForm;