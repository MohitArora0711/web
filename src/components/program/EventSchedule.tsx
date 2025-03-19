"use client";
import { useState } from "react";

interface Event {
    time: string;
    title: string;
    description: string;
    location: string;
}

type EventsData = {
    [key: string]: Event[];
};

export default function EventSchedule() {
    const [activeDay, setActiveDay] = useState<string>("day1");
    const [filter, setFilter] = useState<string>("all");
    
    const events: EventsData = {
        day1: [
            {
                time: "10:30 AM - 11:50 AM",
                title: "Inaugural Ceremony",
                description:
                    "Keynote Address by Arjun Ram Meghwal, Opening Address by Dr. Swapan Dasgupta, Sanjeev Sanyal & Principal SRCC",
                location: "Shridhar Shriram Auditorium",
            },
            {
                time: "12:00 PM - 12:50 PM",
                title: "The Dilemma of an Indian Liberal",
                description: "Gurcharan Das in conversation with Priya Sharma",
                location: "Front Lawn",
            },
        ],
        day2: [
            {
                time: "10:00 AM - 11:00 AM",
                title: "Fiction and Reality",
                description: "A discussion with prominent authors.",
                location: "Front Lawn",
            },
            {
                time: "01:00 PM - 02:00 PM",
                title: "Storytelling Workshop",
                description: "Hands-on storytelling session.",
                location: "Shridhar Shriram Auditorium",
            },
        ],
        day3: [
            {
                time: "11:00 AM - 12:00 PM",
                title: "JAM",
                description: "A lively debate competition.",
                location: "Front Lawn",
            },
            {
                time: "02:00 PM - 03:00 PM",
                title: "Ministry of Culture",
                description: "Session on Heritage Mitra Program.",
                location: "Shridhar Shriram Auditorium",
            },
        ],
    };

    const filteredEvents: Event[] = filter === "all" 
        ? events[activeDay] 
        : events[activeDay].filter(event => event.location === filter);

    return (
        <div className="p-6">
            <div className="flex justify-between">
                <div className="flex space-x-2 mb-4">
                    {Object.keys(events).map((day, index) => (
                        <button
                            key={day}
                            className={`px-4 py-2 text-white font-semibold rounded ${activeDay === day ? "bg-orange-500" : "bg-orange-300"}`}
                            onClick={() => {
                                setActiveDay(day);
                                setFilter("all");
                            }}
                        >
                            DAY {index + 1}
                        </button>
                    ))}
                </div>

                <div className="flex space-x-2 mb-4">
                    {["all", "Shridhar Shriram Auditorium", "Front Lawn"].map(location => (
                        <button
                            key={location}
                            className={`px-4 py-2 font-semibold rounded ${filter === location ? "bg-orange-500 text-white" : "bg-gray-200 text-black"}`}
                            onClick={() => setFilter(location)}
                        >
                            {location === "all" ? "Show All" : location}
                        </button>
                    ))}
                </div>
            </div>
            <div className="bg-blue-700 text-white text-center text-2xl font-bold py-2">
                {activeDay === "day1" && "FRIDAY, 21ST FEBRUARY"}
                {activeDay === "day2" && "SATURDAY, 22ND FEBRUARY"}
                {activeDay === "day3" && "SUNDAY, 23RD FEBRUARY"}
            </div>

            <div className="mt-4">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event, index) => (
                        <div key={index} className="border rounded-lg p-4 shadow-md mb-4 bg-gray-100">
                            <div className="text-gray-500 text-sm">
                                {activeDay === "day1" ? "Friday, February 21" : activeDay === "day2" ? "Saturday, February 22" : "Sunday, February 23"} | {event.time}
                            </div>
                            <h3 className="text-blue-700 font-bold text-lg">{event.title}</h3>
                            <p className="text-gray-600">{event.description}</p>
                            <div className="flex items-center text-gray-700 mt-2">
                                📍 {event.location}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500">No events found for the selected location.</div>
                )}
            </div>
        </div>
    );
}
