import NavigationBar from "./components/navigation";
import Hero from "./components/Hero";
import Products from "./components/products";
import AboutUsSection from "./components/aboutUs";
// import Services from "./components/services";
import Footer from "./components/footer";
import ContactPage from "./components/contactUs";
import Plans from "./components/plans";
import Founder from "./components/founder";
import Projects from "./components/projects";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
function Home(){
    return <div className="w-[100vw] px-[4px]  bg-gradient-to-b from-[#daf3da] overflow-hidden to-[white]" style={{fontFamily: "Roboto Slab"}}>
        <FloatingWhatsApp
            phoneNumber="+2347036273661"
            accountName="optimum solar gadget"
            statusMessage="typically replies in 10mins"
            chatMessage="Hello there!\nHow can we help?"
            placeholder="type a messsage..."
            allowClickAway
            buttonClassName="whatsapp icon"
            chatboxHeight={320}
            notification
        />
        <NavigationBar/>
        <Hero/>
        <Products/>
        {/* <Services/> */}
        <Plans/>
        <Founder/>
        <Projects/>
        <AboutUsSection/>
        <ContactPage/>
        <Footer/>
    </div>
}
export default Home