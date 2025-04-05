import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="p-4 md:p-28 flex">
            <div className="bg-black px-8 md:px-16 md:py-24 text-white rounded-[40px] flex flex-col md:flex-row md:justify-between md:items-center w-full ">
                <div className="w-full mt-16">
                    <h2 className="text-5xl font-bold mb-4">We’re Here To Connect And Assist You</h2>
                    <p className="text-gray-400 text-xl mb-6">
                        Have questions about the summit? Need help with registration or travel? Our team is ready to assist you.
                    </p>
                    <div className="flex flex-row flex-wrap gap-8 mb-6">
                        <div className="flex flex-col gap-8">
                            <h3 className="font-bold">CONTACT US</h3>
                            <p className="text-gray-400">+91 918595870292</p>
                        </div>
                        <div className="flex flex-col gap-8">
                            <h3 className="font-bold">EVENT LOCATION</h3>
                            <p className="text-gray-400">University of Delhi</p>
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
                {/* <div className="w-full mb-8 md:w-1/2 bg-gradient-to-br from-purple-500 to-blue-400 p-8 mt-12 rounded-[30px] md:rounded-[40px] ">
                    <h3 className="text-white font-semibold text-3xl mb-6">Resgister now for event</h3>
                    <p className="text-white mb-4">
                        Reach out with inquiries about tickets, partnerships, or event details.
                    </p>
                    <form className="flex flex-col space-y-3">
                        <select className="bg-transparent border-b border-white focus:outline-none focus:border-white placeholder-white p-2">
                            <option>All three days</option>
                            <option>Day 1</option>
                            <option>Day 2</option>
                            <option>Day 3</option>
                        </select>
                        <input type="text" placeholder="Name" className=" text-white bg-transparent border-b border-white focus:outline-none focus:border-white placeholder-white p-2" />
                        <input type="email" placeholder="Email" className="bg-transparent border-b border-white focus:outline-none focus:border-white placeholder-white p-2" />
                        <input type="text" placeholder="Phone" className="bg-transparent border-b border-white focus:outline-none focus:border-white placeholder-white p-2" />
                        <input type="number" placeholder="Age" className="bg-transparent border-b border-white focus:outline-none focus:border-white placeholder-white p-2" />
                        <select className="bg-transparent border-b border-white focus:outline-none focus:border-white placeholder-white p-2">
                            <option>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Rather not to say</option>

                        </select>
                        <input type="text" placeholder="College/Profession" className="bg-transparent border-b border-white focus:outline-none focus:border-white placeholder-white p-2" />
                        <button type="submit" className=" bg-black text-white rounded-full w-48  py-5 mt-10 font-semibold ">Register Now</button>
                    </form>
                </div> */}

            </div>
        </div>
    );
};

export default Contact;
