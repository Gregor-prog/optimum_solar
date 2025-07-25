import { useState } from 'react';
import { Link } from 'react-router-dom';
import OPt from "../assets/IMG-20250620-WA0212_1__2-removebg-preview.png"
interface NavItem {
  name: string;
  href: string;
  icon?: string;
}



const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');


const navItems: NavItem[] = [
  {
    name: "Home",
    href: "/",
    icon: "home", // optional: e.g., for an icon library like Heroicons or FontAwesome
  },
  {
    name: "About",
    href: "/about",
    icon: "info",
  },
  {
    name: "Services",
    href: "/services",
    icon: "settings",
  },
  {
    name: "Plans",
    href: "/Plans",
    icon: "briefcase",
  },

  {
    name: "Contact",
    href: "/contact",
    icon: "phone",
  },

];

  
  const handleNavClick = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    setActiveLink(name.toLowerCase());
    
   
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  

  return (
    <header className="overflow-hidden z-50  bg-[#f1d1b27a] rounded-3xl drop-shadow-xl drop-shadow-[#0000004d] shadow-black">
      <div className=" mx-auto px-4 py-3">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img src={OPt} alt=""className='w-[70px] ml-[20px]' />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={(e) => handleNavClick(e,item.name)}
                className={`relative px-1 py-2 text-[#FF9800] hover:text-orange-400 transition-colors font-bold duration-200 ${
                  activeLink === item.name.toLowerCase() ? 'text-orane-400 font-medium' : ''
                }`}
              >
                {item.icon && <i className={`${item.icon} mr-2`}></i>}
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                  activeLink === item.name.toLowerCase() ? 'scale-x-100' : 'scale-x-0'
                }`}></span>
              </Link>
            ))}
            <button className="ml-4 px-6 py-2 bg-gradient-to-r bg-orange-400 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </nav>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-[20px] pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}  
                  onClick={(e) => handleNavClick(e, item.name)}
                  className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                    activeLink === item.name.toLowerCase()
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.icon && <i className={`${item.icon} mr-3`}></i>}
                  {item.name}
                </Link>
              ))}
              {/* <button className="mt-2 px-6 py-2 bg-orange-500 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </button> */}
            </div>
          </div>
        )}
      </div>
    </header>
    
  );
};

export default NavigationBar;
