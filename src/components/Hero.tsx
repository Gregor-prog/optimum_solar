// import heroImage from "../assets/3d-rendering-house-model (1).jpg"
import { useEffect } from "react";
// import heroImage from "../assets/african-american-technician-checks-maintenance-solar-panels-group-three-black-engineers-meeting-solar-station.jpg"
import { PanelLeftDashed, Camera, Smartphone } from "lucide-react";
// import { serviceItem } from "../types/interface";
import {ReactTyped} from "react-typed"
import AOS from "aos"
import 'aos/dist/aos.css';

function Hero(){
    interface serviceItem {
      title: string;
  icon: any; // icon name or path
  body: string;
}
useEffect(() => {
  AOS.init()
},[])

   const services: serviceItem[] = [
  {
    title: "Solar Installation",
    icon: <PanelLeftDashed/>,
    body:
      "Enjoy 24/7 power with our reliable solar systems for homes and businesses.",
  },
  {
    title: "CCTV Services",
    icon: <Camera/>,
    body:
      "Protect your property with high-quality CCTV that you can monitor remotely.",
  },
  {
    title: "Other Gadgets",
    icon: <Smartphone/>,
    body:
      "Get solar products, phones, and smart devices — all in one trusted place.",
  },
];

const heroImage  = "https://res.cloudinary.com/drh4ma3hj/image/upload/v1754324848/IMG-20250705-WA0102_ep0cv3.jpg"



    return <div className=" w-[100%] relative rounded-3xl overflow-hidden   " >
            {/* <img src={panel} alt="" className="absolute bottom-[330px] right-[-20px] w-[150px]"/> */}
               
                <div className="w-[100%] relative   sm:absolute z-20 h-[100%] sm:h-[700px] top-0 rounded-3xl  sm:bg-[rgba(24,24,24,0.38)] flex flex-col items-center ">
                <div className="flex flex-col items-left sm:items-center h-[100%] sm:h-[70%] sm:w-[80%] justify-center p-3 rounded-3xl my-[20px] sm:my-[0px] ">
                        <p className="text-[25px]  text-black my-4 sm:text-[35px] md:text-[45px] font-bold sm:text-white text-left sm:text-center">
                            “Reliable  <ReactTyped className="ml  whitespace-nowrap overflow-hidden text-ellipsis w-[40px] "
                              strings={[
                                "Solar System",
                                "CCTV Security",
                                "Smart Homes"
                              ]}
                              typeSpeed={40}
                              backSpeed={50}
                              loop={true}
                              showCursor={false}
                            >
                                {/* <input type="text" />  */}
                                <h1 className="h-[35px]"/>
                              </ReactTyped><span className="pt-4">for Every Nigerian Household”</span>
                           
                        </p>
                        <p className="text-[12px]  text-bla sm:text-[20px] font-semibold  sm:text-white  sm:text-center w-[90%]">
                            Say goodbye to NEPA issues, control your home from anywhere, and keep your property secure.
                        </p>
                        <button  className="my-6 p-3.5 rounded-2xl bg-[#ff990088] w-[50%] sm:w-[25%] text-[#3d2828 font-bold "><a  href="https://wa.me/2347036273661"> Get in touch</a></button>
                </div>

                   <div className="hidden md:flex items-center justify-evenly flex-col sm:flex-row mt-[20px] mb-[20px] sm:mt-[0px] ">
                    {services.map((service,item) => (
                        <div key={item} className="flex items-center flex-col w-[97%] my-[15px] sm:w-[27%] bg-[#ffffffa9] sm:bg-[#ffffff2a] p-[25px] rounded-3xl backdrop-blur-[4px]">
                            <div className="text-center">{service.icon}</div>
                            <p> {service.title}</p>
                            <p className="text-center">{service.body}</p>
                        </div>
                    ))}
                </div>
        
                </div>
                 <div className="z-4 sm:h-[700px] h-[350px]  sm:static top-3.5  w-[100%] overflow-hidden mt-[-10px] rounded-3xl ">
                    <img src={heroImage} alt="" data-aos="fade-left" className="md:mt-[-200px] mt-[0px] sm:mt-[-100px]"/>
                </div>
                    
                    
                 
    </div>
}

export default Hero