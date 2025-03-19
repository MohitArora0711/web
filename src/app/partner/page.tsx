import React from "react";

const partnersData = [
    {
        title: "Hosted By",
        images: ["/images/hosted1.png", "/images/hosted2.png"],
    },
    {
        title: "Venue Partner",
        images: ["/images/venue1.png", "/images/venue2.png"],
    },
    {
        title: "Associate Partners",
        images: ["/images/associate1.png", "/images/associate2.png"],
    },
    {
        title: "Knowledge Partners",
        images: ["/images/knowledge1.png", "/images/knowledge2.png"],
    },
    {
        title: "Cultural Partner",
        images: ["/images/cultural1.png"],
    },
    {
        title: "Event Partner",
        images: ["/images/event1.png", "/images/event2.png"],
    },
    {
        title: "Institutional Partners",
        images: ["/images/institutional1.png", "/images/institutional2.png"],
    },
    {
        title: "Session Partners",
        images: ["/images/session1.png", "/images/session2.png"],
    },
    {
        title: "Partner",
        images: ["/images/partner1.png", "/images/partner2.png"],
    },
    {
        title: "Multimedia Partner",
        images: ["/images/multimedia1.png"],
    },
    {
        title: "Bookstore Managed By",
        images: ["/images/bookstore1.png"],
    },
    {
        title: "Coffee Partner",
        images: ["/images/coffee1.png"],
    },
    {
        title: "Photography Partner",
        images: ["/images/photography1.png"],
    },
    {
        title: "Snacking Partner",
        images: ["/images/snacking1.png"],
    },
    {
        title: "Education Partner",
        images: ["/images/education1.png"],
    },
    {
        title: "Beverage Partner",
        images: ["/images/beverage1.png"],
    },
];

const PartnerSection = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Partners</h1>
            <div className="space-y-12">
                {partnersData.map((section, index) => (
                    <div key={index} className="text-center">
                        <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            {section.images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`${section.title} ${idx + 1}`}
                                    className="w-36 md:w-48 lg:w-56 h-auto object-contain shadow-md rounded-lg p-2 bg-white"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartnerSection;
