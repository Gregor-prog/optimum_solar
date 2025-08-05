// import NavigationBar from "./"
import NavigationBar from "../components/navigation"
import animeA from "../animations/Save Energy.json"
import animeB from "../animations/Solar Powered House.json"
import animeC from "../animations/IOT house.json"
import animeD from "../animations/Solar Green Energy.json"
import Lottie from "lottie-react"
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react"

function Plans(){

      useEffect(() => {
        AOS.init()
      },[])

    const plans = [
  {
    "planType": "Plan A: Basic Home Setup",
    "Size": "Inverter Size: 1kVA – 3kVA",
    "battery": "Battery Capacity: 220/440Ah (Tubular or Lithium)",
    "Panel": "Solar Panels: 2–5Panels (250W–650W)",
    "suita": "Suitable for: Small apartments or shops (fans, lights, TV, decoder)",
    "time": "Installation Timeframe: 1–2 days",
    "cost": "Estimated Cost Range: ₦450,000 – ₦1.8m",
    "animationData":animeA
  },
  {
    "planType": "Plan B: Medium Power Package",
    "Size": "Inverter Size: 3.5kVA – 5kVA",
    "battery": "Battery Capacity: 300Ah – 440Ah (Tubular or Lithium)",
    "Panel": "Solar Panels: 4–6 Panels (650W)",
    "suita": "Suitable for: Homes with 1.5HP inverter AC, fridge, fans, TVs, lights",
    "time": "Installation Timeframe: 2–3 days",
    "cost": "Estimated Cost Range: ₦1,800,000 – ₦4,300,000",
    "animationData":animeB
  },
  {
    "planType": "Plan C: Premium Family Package",
    "Size": "Inverter Size: 5kVA – 8kVA",
    "battery": "Battery Capacity: 600Ah – 800Ah (Lithium preferred)",
    "Panel": "Solar Panels: 6–12 Panels (650W)",
    "suita": "Suitable for: Full homes with ACs, freezer, pump, washing machine, etc.",
    "time": "Installation Timeframe: 3–4 days",
    "cost": "Estimated Cost Range: ₦4.3M – ₦6.9M+",
    "animationData":animeC
  },
  {
    "planType": "Plan D: Commercial Setup",
    "Size": "Inverter Size: 10kVA – 15kVA+",
    "battery": "Battery Capacity: 1,000Ah+",
    "Panel": "Solar Panels: 12–24 Panels (550W)",
    "suita": "Suitable for: Schools, hospitals, offices, factories, etc.",
    "time": "Installation Timeframe: 5– 10days",
    "cost": "Estimated Cost Range: ₦6.9M – ₦18M+",
    "animationData":animeD
  }
]

   
    return <>
        <div className="w-[100vw] px-[4px]  bg-gradient-to-b from-[#daf3da] overflow-hidden to-[white]" style={{fontFamily: "Roboto Slab"}} >
            <NavigationBar/>
            <div className="w-full my-4 mt-9" >
                <p className="text-center text-3xl font-bold" >Available plans</p>
            </div>
            <div className="flex flex-col md:flex-row">
                {plans.map((plan) => (
                    <div data-aos={"fade-left"} className="bg-white rounded-2xl p-5 m-4">
                        <div className="w-[160px] h-[140px] my-9 mx-auto">
                        <Lottie loop={true} animationData={plan.animationData} />
                        </div>
                        <p className="font-bold">{plan.planType}</p>
                        <p>{plan.Size}</p>
                        <p>{plan.battery}</p>
                        <p>{plan.Panel}</p>
                        <p>{plan.suita}</p>
                        <p>{plan.time}</p>
                        <p>{plan.cost}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
}


export default Plans