
"use client"
import { motion } from "framer-motion";

const FAQ = () => {
    return (
        <motion.div
            className="px-24 pb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <section className="py-12 ">
                <div className="mx-auto">
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
                                title: "Can I upgrade my subscription?",
                                text: "Absolutely! Upgrading your subscription plan with Slate is a breeze. Simply log into your account, navigate to the billing section."
                            },
                            {
                                title: "Can I cancel my subscription?",
                                text: "Of course! We believe in offering flexibility to our valued customers. If you decide to cancel your subscription with Slate,"
                            },
                            {
                                title: "Does Slate offer a free trial period?",
                                text: "Yes, indeed! We understand that getting started with a new SaaS platform can be overwhelming."
                            },
                            {
                                title: "Does Slate offer a free trial period?",
                                text: "Of course! We believe in offering flexibility to our valued customers. If you decide to cancel your subscription with Slate,"
                            },
                            {
                                title: "Can I upgrade my subscription?",
                                text: "Yes, indeed! We understand that getting started with a new SaaS platform can be overwhelming."
                            },
                            {
                                title: "Add your question title here?",
                                text: "Absolutely! Upgrading your subscription plan with Slate is a breeze. Simply log into your account, navigate to the billing section."
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
