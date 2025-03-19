export default function DayTwo() {
    return (
        <div className="p-4">
            <h2 className="text-center text-xl font-bold mb-4">
                HOUSE OF FICTION - DAY 2
            </h2>
            <div className="border rounded-lg shadow-md overflow-hidden">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-600 text-left">
                            <th className="p-3 text-white font-bold italic">Time</th>
                            <th className="p-3 text-white font-bold italic">Session</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t">
                            <td className="p-3 font-semibold">11:00 AM - 01:00 PM</td>
                            <td className="p-3">
                                <strong>Kavyanjali</strong>
                                <br />
                                Presenting a Poet
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="p-3 font-semibold">01:00 PM - 02:00 PM</td>
                            <td className="p-3">
                                <strong>Shreya Punj</strong>
                                <br />
                                Pitch perfect with Shreya Punj
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="p-3 font-semibold">02:00 PM - 03:00 PM</td>
                            <td className="p-3">
                                <strong>Poetry Circle</strong>
                                <br />
                                Verse war
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="p-3 font-semibold">03:00 PM - 04:00 PM</td>
                            <td className="p-3">
                                <strong>Debate</strong>
                                <br />
                                Prose and cons
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
