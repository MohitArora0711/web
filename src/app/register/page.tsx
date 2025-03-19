"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

 function Page() {
    const [formData, setFormData] = useState({
        festivalDate: "",
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        profession: "",
        referral: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log("Registration successful");
            } else {
                console.error("Registration failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="max-w-6xl mx-auto mt-40 mb-30 p-6 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-center">#DSGroup DU Literature Festival 2025</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {[
                            { label: "Select Festival Date *", name: "festivalDate", type: "select", options: ["Day 1", "Day 2", "Both Days"] },
                            { label: "Name *", name: "name", type: "text", placeholder: "e.g. John Doe" },
                            { label: "Email *", name: "email", type: "email", placeholder: "e.g. john@xmail.com" },
                            { label: "Phone Number *", name: "phone", type: "tel", placeholder: "e.g. 0123456789" },
                            { label: "Age *", name: "age", type: "number", placeholder: "e.g. 18" },
                            { label: "Gender *", name: "gender", type: "select", options: ["Male", "Female", "Other", "Prefer not to say"] },
                            { label: "College/Profession *", name: "profession", type: "text", placeholder: "e.g. Delhi University" },
                            { label: "Referral Code (Optional)", name: "referral", type: "text", placeholder: "Enter Referral Code" }
                        ].map((field, index) => (
                            <motion.div key={field.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                                <Label>{field.label}</Label>
                                {field.type === "select" ? (
                                    <Select onValueChange={(value) => handleSelectChange(field.name, value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Choose One..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {field.options?.map((option) => (
                                                <SelectItem key={option} value={option}>{option}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                ) : (
                                    <Input type={field.type} name={field.name} placeholder={field.placeholder} required={field.label.includes("*")} onChange={handleChange} />
                                )}
                            </motion.div>
                        ))}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
                            <Button type="submit" className="w-full">Submit</Button>
                        </motion.div>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    );
}
