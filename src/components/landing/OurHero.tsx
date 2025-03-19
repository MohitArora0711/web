
const OurHero = () => {
    return (
        <section className="flex flex-col md:flex-row text-center items-center justify-between px-8 md:px-16 lg:px-24 py-32">
            <div className="md:w-1/2 ">
            <img src="/landing/dulogo.svg" alt="" />
                <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-2 mt-5">
                    <span className="text-gray-700 text-xl md:text-2xl font-semibold ">FEB</span>  21 - 22 - 23 <span className="text-gray-700 text-xl md:text-2xl font-semibold ">2025</span>
                </h1>
                <div className="w-20 border-t-2 border-gray-400 mx-auto mb-3"></div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 md:my-4">
                    SHRI RAM COLLEGE OF COMMERCE
                </h2>
                <h3 className="text-lg text-blue-700 font-bold">
                    UNIVERSITY OF DELHI
                </h3>
                <button className="mt-4 bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition">
                    REGISTER
                </button>
            </div>

            <div className="flex gap-4 md:w-1/2 mt-10">
                <div className="container flex flex-col gap-4 h-[200px] max-w-[200px] md:max-h-[500px] md:h-[500px] w-[100px] md:w-[200px]">
                    <div className="up rounded-[20px] overflow-hidden bg-black w-full h-[70%] flex items-end justify-start p-3 gap-2" style={{ backgroundImage: "url('/landing/img1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="hidden md:flex flex-col justify-center bg-white/30 backdrop-blur-lg rounded-xl md:rounded-3xl px-4 py-1 cursor-pointer">
                    <h1 className="font-semibold text-[10px] text-white">Malik clinic</h1>
                            <div className="flex flex-row justify-center items-center gap-2">
                                <img src="/landing/arrow.png" className="h-3 w-3 bg-white/50 rounded-full" alt="Arrow Icon" />
                                <span className="font-semibold text-[10px] text-white">4.7 ⭐</span>
                            </div>
                        </div>
                    </div>
                    <div className="down rounded-[20px] overflow-hidden bg-black w-full h-[30%] flex items-end justify-start p-3 gap-2" style={{ backgroundImage: "url('/landing/img2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="hidden md:flex flex-col justify-center bg-white/30 backdrop-blur-lg rounded-xl md:rounded-3xl px-4 py-1 cursor-pointer">
                    <h1 className="font-semibold text-[10px] text-white">metha shop</h1>
                            <div className="flex flex-row justify-center items-center gap-2">
                                <img src="/landing/arrow.png" className="h-3 w-3 bg-white/50 rounded-full" alt="Arrow Icon" />
                                <span className="font-semibold text-[10px] text-white">4.6 ⭐</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container flex flex-col gap-4 max-w-[200px] max-h-[500px] h-[200px] md:h-[500px] w-[100px] md:w-[200px]">
                    <div className="up rounded-[20px] overflow-hidden bg-black w-full h-full  flex items-end justify-start p-3 gap-2" style={{ backgroundImage: "url('/landing/img7.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="hidden md:flex flex-col justify-center bg-white/30 backdrop-blur-lg rounded-xl md:rounded-3xl px-4 py-1 cursor-pointer">
                    <h1 className="font-semibold text-[10px] text-white">Hair mafiya</h1>
                            <div className="flex flex-row justify-center items-center gap-2">
                                <img src="/landing/arrow.png" className="h-3 w-3 bg-white/50 rounded-full" alt="Arrow Icon" />
                                <span className="font-semibold text-[10px] text-white">4.6 ⭐</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container flex flex-col gap-4 max-w-[300px] max-h-[500px] h-[200px] w-[100px] md:h-[500px] md:w-[300px]">
                    <div className=" up rounded-[20px] overflow-hidden bg-black w-full h-[50%] md:flex items-end justify-start p-3 gap-2" style={{ backgroundImage: "url('/landing/img4.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="hidden md:flex flex-col justify-center bg-white/30 backdrop-blur-lg rounded-xl md:rounded-3xl px-4 py-1 cursor-pointer">
                            <h1 className="font-semibold text-[10px] text-white">Royal Hair Lounge</h1>
                            <div className="flex flex-row justify-center items-center gap-2">
                                <img src="/landing/arrow.png" className="h-3 w-3 bg-white/50 rounded-full" alt="Arrow Icon" />
                                <span className="font-semibold text-[10px] text-white">4.9 ⭐</span>
                            </div>
                        </div>
                    </div>
                    <div className="down rounded-[20px] overflow-hidden bg-black w-full h-[50%] flex items-end justify-start p-3 gap-2" style={{ backgroundImage: "url('/landing/img8.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="hidden md:flex flex-col justify-center bg-white/30 backdrop-blur-lg rounded-xl md:rounded-3xl px-4 py-1 cursor-pointer">
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
