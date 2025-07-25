import image from "../assets/5132728.jpg"
import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';
const ContactPage = () => {
  useEffect(() => {
    AOS.init()
  })
  return (
    <div data-aos={"fade-left"} className="min-h-screen bg-gray-50 px-6 md:px-20 py-16">
      <h2 className="text-3xl font-bold text-orange-600 mb-10 text-center">Contact Us</h2>

      <div  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Form Section */}
        <form className="bg-white shadow-lg p-8 rounded-xl space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Image Section */}
        <div className=" md:block" data-aos={"fade-right"}>
          <img
            src={image}
            alt="Contact"
            className="rounded-xl shadow-md w-full object-cover h-full max-h-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
