import { FaInstagram, FaFacebookF, FaWhatsapp,FaYoutube,FaTiktok,FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-2">Optimum Solar</h2>
          <p className="text-sm text-gray-400">
            Powering your peace of mind with clean energy, smart homes & secured spaces.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2 text-sm">
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <a href="/about" className="block text-gray-400 hover:text-orange-500 transition">About</a>
          <a href="/services" className="block text-gray-400 hover:text-orange-500 transition">Services</a>
          <a href="/projects" className="block text-gray-400 hover:text-orange-500 transition">Projects</a>
          <a href="/contact" className="block text-gray-400 hover:text-orange-500 transition">Contact</a>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Connect with us</h4>
          <div className="flex space-x-4 text-xl text-orange-500">
            <a
              href="https://wa.me/2347036273661"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/optimum_gadgets_solar_inns"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/people/Optim%C3%BBm-Gadgets-MART/100094600571420/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/@Optimum_Gadgets_Solar_Inns"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://t.me//OPTIMUM_GADGET_SOLAR_INNOVATIONS"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300"
            >
              <FaTelegram />
            </a>
            <a
              href="https://www.tiktok.com/@optimum_gadget_solar_inn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-300"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Optimum Solar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
