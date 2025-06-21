import NavigationBar from "./components/navigation";
import Hero from "./components/Hero";
function Home(){
    return <div className="w-[100vw] px-10 bg-gradient-to-b from-[#C8EC9] to-green-400">
        <NavigationBar/>
        <Hero/>
    </div>
}
export default Home