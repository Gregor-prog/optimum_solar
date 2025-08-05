import image from "../assets/11642686.jpg"
import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';
function AboutUsSection() {

  useEffect(() => {
    AOS.init()
  },[])
  return (
    <section id="about" className="bg-[white] py-9 px-6 md:px-10 rounded-3xl backdrop-blur-2xl ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h2>
       <div className="flex flex-col sm:flex-row items-center justify-evenly">
         <p data-aos={"fade-left"} className="text-center text-gray-600 max-w-3xl mx-auto mb-12 font-semibold text-xl sm:text-2xl">
          We are a passionate Nigerian startup delivering clean solar energy, smart home solutions, 
          and reliable CCTV systems. Whether you’re looking to eliminate power outages, automate your 
          space, or protect your property, we provide affordable and effective solutions tailored to 
          your needs.
        </p>
        <img data-aos={"fade-right"} src={image} alt="" className="sm:w-[45%]"/>
       </div>

        
      </div>
    </section>
  );
}

export default AboutUsSection;
