import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";
function Services(){

  useEffect(() => {
    AOS.init()
  },[])
   const services = [
  {
    title: "Solar Installation",
    description: "We install reliable solar systems for homes and businesses, ensuring 24/7 power and energy independence.",
    image: "https://res.cloudinary.com/drh4ma3hj/image/upload/v1754324851/IMG-20250705-WA0080_deo3s5.jpg"
  },
  {
    title: "CCTV Installation",
    description: "Protect your space with smart surveillance solutions — view your property remotely anytime, anywhere.",
    image: "https://img.freepik.com/premium-photo/cctv-installation-with-young-asian-technicians-installation-such-as-wifi-ip-camera-concept-wireless-ip-camera_140555-611.jpg"
  },
  {
    title: "Phone Sales",
    description: "We offer a selection of quality smartphones at competitive prices, tailored to your needs and budget.",
    image:"https://www.shutterstock.com/image-photo/bangkok-thailand-september-22-2024-260nw-2520419325.jpg"
  },
  {
    title: "Solar Items Sale",
    description: "Buy panels, inverters, batteries, and other solar accessories — all top-grade and cost-effective.",
    image:"https://www.renogy.com/product_images/uploaded_images/tools-and-components-for-solar-panels-installation.jpg"
  },
];

    return <div id="services" className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service,index) => (
            <div key={index} data-aos="fade-right" className="relative overflow-hidden h-[400px] m-3 md:m-7 rounded-2xl ">
                <img src={service.image} alt="" className="h-full w-full blur-[0.2px] opacity-95" />
                <div className="absolute h-full top-0 bg-[#00000036] backdrop-blur-[1px]  hover:left-[400px] p-8 py-20 align-text-bottom text-right flex flex-col justify-end">
                <p className="text-4xl font-semibold text-white drop-shadow-black drop-shadow-xl">{service.title}</p>
                <p className="text-[15px] text-[white] my-2">{service.description}</p>
                </div>
            </div>
        ))}
    </div>
}

export default Services