function Services(){
   const services = [
  {
    title: "Solar Installation",
    description: "We install reliable solar systems for homes and businesses, ensuring 24/7 power and energy independence.",
    image: "https://famoussolar.com.ng/wp-content/uploads/2022/10/Famous-Solar-Company-in-Ibadan-Nigeria.jpg"
  },
  {
    title: "CCTV Installation",
    description: "Protect your space with smart surveillance solutions — view your property remotely anytime, anywhere.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp4nTzoikKrrNvO_7SjhH5n3ev3MtJmB5Pw&s"
  },
  {
    title: "Phone Sales",
    description: "We offer a selection of quality smartphones at competitive prices, tailored to your needs and budget.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mxdnUKaw5I3lPDAbYMPo0Kj_Pr3M0Bf1Xw&s"
  },
  {
    title: "Solar Items Sale",
    description: "Buy panels, inverters, batteries, and other solar accessories — all top-grade and cost-effective.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSg23Cl5EGpyJnVBR-IJ-gGuUS-k0pSyTKmA&s"
  },
];

    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service,index) => (
            <div key={index} className="relative overflow-hidden h-[400px] ">
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