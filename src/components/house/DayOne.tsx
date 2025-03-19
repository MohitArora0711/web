


function DayOne() {
    return (
        <div className="p-4">
            <h2 className="text-center text-xl font-bold mb-4">
                HOUSE OF FICTION - DAY 1
            </h2>
            <div className="border rounded-lg shadow-md overflow-hidden">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-600 text-left">
                            <th className="p-3 text-white font-bold">Time</th>
                            <th className="p-3 text-white font-bold">Session</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t">
                            <td className="p-3">11:00 AM - 12:00 PM</td>
                            <td className="p-3">
                                <strong>Speaker session 1</strong>
                                <br />
                                Puneet Sikka
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="p-3">12:00 PM - 02:00 PM</td>
                            <td className="p-3">
                                <strong>Ostraca: Twisted Perspectives: A Battle of Narratives</strong>
                                <br />
                                A battle of Narratives
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="p-3">02:00 PM - 03:00 PM</td>
                            <td className="p-3">
                                <strong>Bookmark Exchange competition</strong>
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="p-3">03:00 PM - 04:00 PM</td>
                            <td className="p-3">
                                <strong>Open mic</strong>
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="p-3">04:00 PM - 05:00 PM</td>
                            <td className="p-3">
                                <strong>Game (musical chairs)</strong>
                                <br />
                                The Last Supper
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="p-3">05:00 PM - 06:00 PM</td>
                            <td className="p-3">
                                <strong>Literary Pictionary</strong>
                                <br />
                                Chitrakshar
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default DayOne;
