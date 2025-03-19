
"use client"
import { motion } from "framer-motion";

const FAQ = () => {
    return (
        <motion.div
            className="md:px-24 px-5 pb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <section className="py-12 ">
                <div className="md:mx-auto">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Creative Freedom
                    </h2>
                    <div className="flex flex-col md:flex-row md:justify-between items-start mt-4">
                        <div className="flex flex-col gap-4 ">
                            <h3 className="text-5xl font-semibold text-gray-900">
                                Frequently Asked
                            </h3>
                            <div className="text-5xl text-white bg-blue-600 px-2 py-2 rounded-md w-60">
                                Questions
                            </div>
                        </div>
                        <p className="text-gray-600 text-[18px] max-w-[500px] mt-4 md:mt-0">
                            Your success is our top priority. Our dedicated support team is here to assist you every step of the way.
                        </p>
                    </div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-6 mt-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                title: "How can I register for the festival?",
                                text: "Registering for the Delhi University Literature Festival is simple! Click on the 'Register' button, fill in your details, download your festival pass, and you’re all set!"
                            },
                            {
                                title: "Is there an entry fee for the festival?",
                                text: "No, the festival is absolutely free for all attendees! However, prior registration is required to secure your spot."
                            },
                            {
                                title: "Will there be a live stream of the sessions?",
                                text: "Yes! For those who can’t make it in person, selected sessions will be streamed live on our official YouTube channel and social media handles."
                            },
                            {
                                title: "Can I get a certificate for attending the festival?",
                                text: "Yes, attendees can receive a participation certificate. Make sure to check in at the venue or attend live sessions online to be eligible."
                            },
                            {
                                title: "Who are the keynote speakers for 2025?",
                                text: "This year, we are honored to host distinguished speakers including Dr. S. Jaishankar, A. Rajarajan, Hardeep Singh Puri, Amb. Lakshmi Puri, and many more!"
                            },
                            {
                                title: "What are the festival dates and venue?",
                                text: "The Delhi University Literature Festival 2025 will take place on **February 21-23, 2025**, at **Shri Ram College of Commerce, University of Delhi**."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-blue-600 font-semibold">{faq.title}</h4>
                                <p className="text-gray-600 mt-2">{faq.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default FAQ;
