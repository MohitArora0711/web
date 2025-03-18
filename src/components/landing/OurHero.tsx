
const OurHero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-32">
            <div className="md:w-1/2 text-left pl-4 md:pr-[100px]">
                <h1 className="text-5xl md:text-5xl font-bold mb-4">
                    Effortless Appointments for <br /> Your Everyday Needs!
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                    From salons to hospitals, book hassle-free appointments in just a few clicks.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-gray-200 p-1  pr-2  font-semibold rounded-full text-sm flex items-center gap-1 cursor-pointer ">
                        <div
                            className="w-6 h-6 rounded-full bg-cover bg-center"
                            style={{ backgroundImage: "url('landing/img1.jpg')" }}
                        ></div>
                        <h1>Men’s Saloon</h1>
                    </span>
                    <span className="bg-gray-200 p-1  pr-2  font-semibold   rounded-full text-sm flex items-center gap-1 cursor-pointer ">
                        <div
                            className="w-6 h-6 rounded-full bg-cover bg-center"
                            style={{ backgroundImage: "url('landing/img2.jpg')" }}
                        ></div>
                        <h1>Women Saloon</h1>
                    </span>
                    <span className="bg-blue-600 text-white p-1  pr-2   font-semibold  rounded-full text-sm flex items-center gap-1 cursor-pointer ">
                        <div
                            className="w-6 h-6 rounded-full bg-cover bg-center"
                            style={{ backgroundImage: "url('landing/img3.jpg')" }}
                        ></div>
                        <h1>Doctor Clinics</h1>
                    </span>
                    <span className="bg-gray-200 p-1  pr-2  font-semibold   rounded-full text-sm flex items-center gap-1  cursor-pointer ">
                        <div
                            className="w-6 h-6 rounded-full bg-cover bg-center"
                            style={{ backgroundImage: "url('landing/img6.jpg')" }}
                        ></div>
                        <h1>Grocery Stores</h1>
                    </span>
                    <span className="bg-blue-600 text-white p-1  pr-2  font-semibold  rounded-full text-sm flex items-center gap-1 cursor-pointer ">
                        <div
                            className="w-6 h-6 rounded-full bg-cover bg-center"
                            style={{ backgroundImage: "url('landing/img8.jpg')" }}
                        ></div>
                        <h1>Doctor Clinics</h1>
                    </span>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-semibold">500k</span>
                        <span className="text-gray-500 text-sm">Appointment Booked</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-semibold">12M+</span>
                        <span className="text-gray-500 text-sm">Customers Globally</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 md:w-1/2">
                <div className="container flex flex-col gap-4 max-w-[200px] max-h-[500px] h-[500px] w-[200px]">
                    <div className="up rounded-[20px] overflow-hidden bg-black w-full h-[70%] flex items-end justify-start p-3 gap-2" style={{ backgroundImage: "url('/landing/img1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="flex flex-col justify-center bg-white/30 backdrop-blur-lg rounded-3xl px-4 py-1 cursor-pointer">
                            <h1 className="font-semibold text-[10px] text-white">Malik clinic</h1>
                            <div className="flex flex-row justify-center items-center gap-2">
                                <img src="/landing/arrow.png" className="h-3 w-3 bg-white/50 rounded-full" alt="Arrow Icon" />
                                <span className="font-semibold text-[10px] text-white">4.7 ⭐</span>
                            </div>
                        </div>
                    </div>
                    <div className="down rounded-[20px] overflow-hidden bg-black w-full h-[30%] flex items-end justify-start p-3 gap-2" style={{ backgroundImage: "url('/landing/img2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="flex flex-col justify-center bg-white/30 backdrop-blur-lg rounded-3xl px-4 py-1 cursor-pointer">
                            <h1 className="font-semibold text-[10px] text-white">metha shop</h1>
                            <div className="flex flex-row justify-center items-center gap-2">
                                <img src="/landing/arrow.png" className="h-3 w-3 bg-white/50 rounded-full" alt="Arrow Icon" />
                                <span className="font-semibold text-[10px] text-white">4.6 ⭐</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container flex flex-col gap-4 max-w-[200px] max-h-[500px] h-[500px] w-[200px]">
                    <div className="up rounded-[20px] overflow-hidden bg-black w-full h-full  flex items-end justify-start p-3 gap-2" style={{ backgroundImage: "url('/landing/img7.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="flex flex-col justify-center bg-white/30 backdrop-blur-lg rounded-3xl px-4 py-1 cursor-pointer">
                            <h1 className="font-semibold text-[10px] text-white">Hair mafiya</h1>
                            <div className="flex flex-row justify-center items-center gap-2">
                                <img src="/landing/arrow.png" className="h-3 w-3 bg-white/50 rounded-full" alt="Arrow Icon" />
                                <span className="font-semibold text-[10px] text-white">4.6 ⭐</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container flex flex-col gap-4 max-w-[300px] max-h-[500px] h-[500px] w-[300px]">
                    <div className="up rounded-[20px] overflow-hidden bg-black w-full h-[50%] flex items-end justify-start p-3 gap-2" style={{ backgroundImage: "url('/landing/img4.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="flex flex-col justify-center bg-white/30 backdrop-blur-lg rounded-3xl px-4 py-1 cursor-pointer">
                            <h1 className="font-semibold text-[10px] text-white">Royal Hair Lounge</h1>
                            <div className="flex flex-row justify-center items-center gap-2">
                                <img src="/landing/arrow.png" className="h-3 w-3 bg-white/50 rounded-full" alt="Arrow Icon" />
                                <span className="font-semibold text-[10px] text-white">4.9 ⭐</span>
                            </div>
                        </div>
                    </div>
                    <div className="down rounded-[20px] overflow-hidden bg-black w-full h-[50%] flex items-end justify-start p-3 gap-2" style={{ backgroundImage: "url('/landing/img8.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="flex flex-col justify-center bg-white/30 backdrop-blur-lg rounded-3xl px-4 py-1 cursor-pointer">
                            <h1 className="font-semibold text-[10px] text-white">Luxury Locks</h1>
                            <div className="flex flex-row justify-center items-center gap-2">
                                <img src="/landing/arrow.png" className="h-3 w-3 bg-white/50 rounded-full" alt="Arrow Icon" />
                                <span className="font-semibold text-[10px] text-white">4.8 ⭐</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurHero;
