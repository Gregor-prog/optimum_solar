import heroImage from "../assets/3d-rendering-house-model (1).jpg"
import panel from "../assets/2303.w019.n002.872B.p15.872-removebg-preview.png"
function Hero(){
    return <div className="w-[100%] relative rounded-3xl overflow-hidden mt-[20px]  " >
            {/* <img src={panel} alt="" className="absolute bottom-[330px] right-[-20px] w-[150px]"/> */}
               
                <div className="w-[100%] sm:absolute z-20 h-[100%] sm:h-[700px] top-0 rounded-3xl  sm:bg-[rgba(24,24,24,0.38)] flex flex-col items-center ">
                <div className="flex flex-col items-center h-[100%] sm:h-[80%] sm:w-[80%] justify-center p-3 rounded-3xl my-[20px] sm:my-[0px] ">
                        <p className="text-[12px] sm:text-[20px] font-semibold  sm:text-white  text-center w-[90%]">
                            Say goodbye to NEPA issues, control your home from anywhere, and keep your property secure.
                        </p>
                        <p className="text-[30px] my-4 sm:text-[35px] md:text-[45px] font-bold sm:text-white text-center">
                            “Reliable Solar, Smart Homes & CCTV Security for Every Nigerian Household”
                        </p>
                </div>

                <div>
                    
                </div>
        
                </div>
                 <div className="z-[-1] sm:h-[700px] overflow-hidden mt-[-10px] rounded-3xl ">
                    <img src={heroImage} alt="" className="md:mt-[-200px] mt-[0px] sm:mt-[-100px] " /></div>
    </div>
}

export default Hero