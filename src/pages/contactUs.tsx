import { useEffect, } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import NavigationBar from '../components/navigation';
import { FaTelegram, FaTiktok } from 'react-icons/fa';
// Main App component to render the ContactUs page


// ContactUs Functional Component
function ContactUs() {
  // Effect to load Lottie player and potentially animation (for demonstration)
  useEffect(() => {
    // Dynamically import the Lottie player script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
    script.async = true;
    script.onload = () => {
      console.log('Lottie player script loaded.');
      // You would typically load a specific animation here
      // For example, if you have a lottie-player element with an ID:
      // const player = document.getElementById('contact-lottie-player');
      // if (player) {
      //   player.load('YOUR_LOTTIE_ANIMATION_JSON_URL_HERE');
      //   setLottieInstance(player);
      // }
    };
    document.body.appendChild(script);

    return () => {
      // Clean up script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='w-[100vw] px-[4px]  bg-gradient-to-b from-[#daf3da] overflow-hidden to-[white]" style={{fontFamily: "Roboto Slab"}}'>
        <NavigationBar/>
        <div className="bg-[#ffffff44] m-auto my-8 rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-4xl w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start border border-gray-200">
      {/* Left Section: Lottie Animation */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-4 bg-blue-50 rounded-lg">
    
      </div>

      {/* Right Section: Contact Information */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          We'd love to hear from you! Whether you have a question about our services,
          need support, or just want to say hello, feel free to reach out.
        </p>

        {/* Phone Section */}
        <div className="flex items-center justify-center lg:justify-start mb-6">
          <Phone className="text-blue-600 w-7 h-7 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-700 text-lg">+2347036273661</p>
          </div>
        </div>

        {/* Mail Section */}
        <div className="flex items-center justify-center lg:justify-start mb-6">
          <Mail className="text-blue-600 w-7 h-7 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Email</h3>
            <p className="text-gray-700 text-lg">optimumgadgetmart@gmail.com</p>
          </div>
        </div>

        {/* Location Section */}
        <div className="flex items-center justify-center lg:justify-start mb-6">
          <MapPin className="text-blue-600 w-7 h-7 mr-4 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Location</h3>
            <p className="text-gray-700 text-lg">
              Serving Southwest Nigeria and beyond
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center lg:text-left">
            Connect With Us
          </h3>
          <div className="flex justify-center lg:justify-start space-x-6">
            <a
              href="https://www.facebook.com/people/Optim%C3%BBm-Gadgets-MART/100094600571420/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/people/Optim%C3%BBm-Gadgets-MART/100094600571420/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="https://t.me//OPTIMUM_GADGET_SOLAR_INNOVATIONS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-700 transition duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaTelegram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default ContactUs