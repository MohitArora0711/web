import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="p-4 md:p-28 flex">
            <div className="bg-black px-8 md:px-16 md:py-24 text-white rounded-[40px] flex flex-col md:flex-row md:justify-between md:items-center w-full ">
                <div className="w-full md:w-1/3 mt-16">
                    <h2 className="text-5xl font-bold mb-4">We’re Here To Connect And Assist You</h2>
                    <p className="text-gray-400 text-xl mb-6">
                        Have questions about the summit? Need help with registration or travel? Our team is ready to assist you.                    </p>
                    <div className="flex flex-row flex-wrap gap-8 mb-6">
                        <div className="flex flex-col gap-8">
                            <h3 className="font-bold">CONTACT US</h3>
                            <p className="text-gray-400">+91 918595870292</p>
                        </div>
                        <div className="flex flex-col gap-8">
                            <h3 className="font-bold">EVENT LOCATION</h3>
                            <p className="text-gray-400">Kirori Mal College, University of Delhi</p>
                        </div>
                        <div className="flex flex-col gap-8">
                            <h3 className="font-bold">EMAIL</h3>
                            <p className="text-gray-400">queries@neecop.com</p>
                        </div>
                        <div className="flex flex-col gap-8">
                            <h3 className="font-bold">FOLLOW US</h3>
                            <div className="min-w-[300px] max-sm:w-full max-sm:items-left flex flex-col gap-6 mr-20 max-sm:m-0 items-start">
                                <div className="flex gap-12 mb-4 md:mb-0">
                                    <FaFacebookF className="cursor-pointer text-2xl   hover:text-white transition duration-300" />
                                    <FaTwitter className="cursor-pointer text-2xl hover:text-white transition duration-300" />
                                    <FaInstagram className="cursor-pointer text-2xl hover:text-white transition duration-300" />
                                    <a target="_blank" href="https://www.linkedin.com/company/neecop/posts/?feedView=all">
                                        <FaLinkedin className="cursor-pointer text-2xl hover:text-white transition duration-300" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mb-8 md:w-1/2 bg-gradient-to-br from-purple-500 to-blue-400 p-4 mt-12 rounded-[30px] md:rounded-[40px] ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.9234959603322!2d77.2395041!3d28.6195928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce328e21150a5%3A0x1db02b6d0ba0702a!2sBharat%20Mandapam!5e0!3m2!1sen!2sin!4v1712301296734!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="h-[550px] rounded-[30px] md:rounded-[35px]"
                    ></iframe>

                </div>

            </div>
        </div>
    );
};

export default Contact;
