import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import image from "../assets/pexels-cristian-rojas-8853505.jpg"
function Products(){

  interface Product {
  name: string;
  category: string;
  image: string;
  description: string;
  price?: string;
}

const products: Product[] = [
  {
    name: "400W Monocrystalline Solar Panel",
    category: "Solar Panels",
    image:image,
    description: "High-efficiency monocrystalline panel with 21% efficiency rating. Perfect for residential rooftop installations."
  },
  {
    name: "300W Polycrystalline Solar Panel",
    category: "Solar Panels",
    image: "https://images.squarespace-cdn.com/content/v1/6004afb33753c24df2462d5d/1693405496247-FF2U7YEWORKWV13BDAXV/0B5C3055-CE96-43EC-838B-6175A48BEA9C?format=1000w",
    description: "Cost-effective polycrystalline panel ideal for large-scale commercial installations."
  },
 {
    name: "Solar Panel Protection Kit",
    category: "Protection",
    image: "https://solarpowershop.co.zw/wp-content/uploads/2025/03/solar-protection-kit.jpg",
    description: "Complete protection kit with surge protectors, fuses, and weatherproof enclosures for solar installations."
  },
  {
    name: "5KW Pure Sine Wave Inverter",
    category: "Inverters",
    image: "https://control.spop.com.ng/pages/uploads/product/2024-01-31-ltXDjA86e2pzyiU57QKd/IMG-20240131-WA0008.jpg",
    description: "High-capacity pure sine wave inverter with built-in MPPT charge controller and LCD display."
  },
  {
    name: "3KW Hybrid Solar Inverter",
    category: "Inverters",
    image: "https://www.ecgsolax.com/cdn/shop/files/10.2KWDC48V180AmpDualMPPTSolarChargeInverter9.jpg?v=1706261257&width=1200",
    description: "Smart hybrid inverter with WiFi monitoring and grid-tie capability."
  },
  {
    name: "200Ah Lithium Solar Battery",
    category: "Batteries",
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/1338983/1.jpg?9830",
    description: "Long-lasting LiFePO4 battery with 6000+ cycle life and built-in BMS protection."
  },
  {
    name: "150Ah Deep Cycle AGM Battery",
    category: "Batteries",
    image: "https://csbattery.cn/wp-content/uploads/2022/08/GB12-200.jpg",
    description: "Maintenance-free sealed AGM battery designed for solar energy storage systems."
  },
  {
    name: "60A MPPT Solar Charge Controller",
    category: "Charge Controllers",
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/8895572/1.jpg?5563",
    description: "Advanced MPPT controller with LCD display, USB charging, and multiple protection features."
  },
  {
    name: "50W All-in-One Solar Street Light",
    category: "Solar Lighting",
    image: "https://pictures-nigeria.jijistatic.net/54984054_img-20191026-141110-7_620x827.webp",
    description: "Complete solar street light with motion sensor, remote control, and all-night illumination."
  },
  {
    name: "20W Solar LED Flood Light",
    category: "Solar Lighting",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliiM9B5wlb3EpOeisyKfrC_4CXnSpxy6Gkg&s",
    description: "Waterproof solar flood light with dusk-to-dawn auto operation and remote control."
  },
  {
    name: "Solar Water Pump System - 1HP",
    category: "Solar Pumps",
    image: "https://sc04.alicdn.com/kf/H4f9f7a9063214a91897b777c16f2bb2d0.jpg",
    description: "Complete solar water pumping system for irrigation and livestock watering."
  },
  {
    name: "Complete 5KW Home Solar Kit",
    category: "Solar Kits",
    image: "https://bsg-i.nbxc.com/product/e6/df/85/285485c45d2a69fa98a9a400ad.jpg@4e_360w_360h.src%7C95Q.webp",
    description: "Everything needed for home solar installation: panels, inverter, batteries, and mounting hardware."
  }
];





    return <div>
    <section className="my-[100px] bg-[#ffffff7a] p-[20px]">
      <div className="flex flex-col sm:flex-row items-center justify-between  sm:p-[20px] sm:px-[100px]">
        <div className="h-[70%] sm:w-[50%] my-[20px]">
          <p className="font-bold text-3xl sm:text-4xl my-[20px]">Explore Our Quality Product</p>
          <p className=" text-xl sm:text-2xl">We provide reliable, high-quality, and innovative products designed to meet your everyday needs. Whether you're upgrading your space or embracing smart living, we’ve got something for you.</p>
        </div>
      <Carousel className=" p-2.5 sm:w-[40%] w-[100%]"
       autoPlay          // Enables automatic sliding
      interval={2000}   // Delay between slides in ms (3000ms = 3s)
      infiniteLoop      // Enables looping back to the first slide
      showThumbs={false} // Hides thumbnail previews
      showStatus={false} // Hides slide number indicator
      showArrows={true}  // Optional: show navigation arrows
      stopOnHover={true} // Pauses on hover
      swipeable={true}   // Allows swiping on touch screens
      dynamicHeight={false}
      showIndicators={false} >
          {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl w-[full] overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-[300px] w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{product.description}</p>
              
            </div>
          </div>
        ))}

        </Carousel>

        
      </div>
    
    </section>



    </div>
}
export default Products