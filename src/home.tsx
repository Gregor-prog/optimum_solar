import NavigationBar from "./components/navigation";
import Hero from "./components/Hero";
import Products from "./components/products";
import AboutUsSection from "./components/aboutUs";
import Services from "./components/services";
import Footer from "./components/footer";
import ContactPage from "./components/contactUs";
import Plans from "./components/plans";
import Founder from "./components/founder";
import Projects from "./components/projects";
function Home(){
    return <div className="w-[100vw] px-[4px]  bg-gradient-to-b from-[#daf3da] to-[white]" style={{fontFamily: "Roboto Slab"}}>
        <NavigationBar/>
        <Hero/>
        <Products/>
        <Services/>
        <Plans/>
        <Founder/>
        <Projects/>
        <AboutUsSection/>
        <ContactPage/>
        <Footer/>
    </div>
}
export default Home