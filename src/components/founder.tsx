import { useEffect } from "react";
import founderImage from "../assets/IMG-20250705-WA0020.jpg"
import AOS from "aos"
import 'aos/dist/aos.css';
const Founder = () => {

  useEffect(() => {
      AOS.init()
  },[])

  const founder = {
    name: 'Mr. Olayiwola Sulaimon A.',
    title: 'Visionary Founder & CEO',
    imageUrl: founderImage, // Placeholder image
    bio: `Mr. Olayiwola Sulaimon A. , a passionate advocate for sustainable energy, founded Optimum Solar with a clear mission: to make clean, affordable solar power accessible to every home and business. With a Ph.D. in Renewable Energy Systems and over 15 years in the industry, Mr.Olayiwola envisioned a company that not only provided cutting-edge solar solutions but also fostered a community committed to environmental stewardship.`,
  };

  const companyOrigin = `Optimum Solar was born from a simple yet powerful idea during a challenging period of energy instability. Witnessing firsthand the impact of unreliable power grids and the rising cost of traditional energy, Mr.Olayiwola was driven to create a reliable and eco-friendly alternative. Starting in a small garage with a big dream, Optimum Solar has grown into a leading provider of solar solutions, built on principles of innovation, integrity, and a deep commitment to a brighter, greener future.`;

  return (
    <div className="overflow-hidden min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className=" bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 lg:p-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl tracking-tight">
            Meet Our Founder
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            The vision and passion behind Optimum Solar.
          </p>
        </div>

        {/* Founder & Company Story Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
          {/* Founder Image */}
          <div className="flex-shrink-0 w-full md:w-1/3 mb-8 md:mb-0">
            <div data-aos={"fade-up"} className="relative w-full h-0 pb-[100%] rounded-xl overflow-hidden shadow-xl border-4 border-[#f3cd94]">
              <img
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                src={founder.imageUrl}
                alt={founder.name}
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/600x600/F0F0F0/333333?text=${founder.name.split(' ')[0]}`; // Fallback
                }}
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-3xl font-bold text-gray-900">{founder.name}</h3>
              <p className="text-xl text-yellow-600 font-medium mt-1">{founder.title}</p>
            </div>
          </div>

          {/* Company Story & Founder Bio */}
          <div className="flex-1 space-y-8">
            {/* Founder Bio */}
            <div data-aos={"fade-up"}>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">About Mr. Olayiwola Sulaimon A.</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {founder.bio}
              </p>
            </div>

            {/* Company Origin */}
            <div data-aos={"fade-up"}>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Origin Story</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {companyOrigin}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;