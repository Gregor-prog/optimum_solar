import NavigationBar from "./components/navigation";
import Hero from "./components/Hero";
import Products from "./components/products";
import AboutUsSection from "./components/aboutUs";
function Home(){
    return <div className="w-[100vw] px-[4px]  bg-gradient-to-b from-[#a1e7a1] to-[white]">
        <NavigationBar/>
        <Hero/>
        <Products/>
        <AboutUsSection/>
    </div>
}
export default Home