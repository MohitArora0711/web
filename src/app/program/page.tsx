import React from 'react'
import EventSchedule from '@/components/program/EventSchedule'
import OurHero from '@/components/landing/OurHero'
function page() {
    return (
        <div>
            <OurHero />
            <div>
                <EventSchedule />
            </div>
        </div>
    )
}

export default page
