function AboutUsSection() {
  return (
    <section className="bg-[#e6e6e6bb] py-9 px-6 md:px-10 rounded-3xl backdrop-blur-2xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We are a passionate Nigerian startup delivering clean solar energy, smart home solutions, 
          and reliable CCTV systems. Whether you’re looking to eliminate power outages, automate your 
          space, or protect your property, we provide affordable and effective solutions tailored to 
          your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-orange-400 mb-2">🔆 Solar Solutions</h3>
            <p className="text-sm text-gray-600">
              We design and install solar systems that keep your lights on 24/7 — no more NEPA stress.
              From home rooftops to small businesses, we’ve got you covered.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-orange-400 mb-2">🎥 CCTV & Security</h3>
            <p className="text-sm text-gray-600">
              Secure your home or office with smart CCTV systems you can monitor from your phone — 
              day or night, even during blackouts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-orange-400 mb-2">🏠 Smart Home Gadgets</h3>
            <p className="text-sm text-gray-600">
              Upgrade your lifestyle with smart bulbs, sockets, and phone accessories that bring 
              convenience and control right to your fingertips.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg- text-white px-6 py-3 rounded-full font-medium bg-orange-400 hover:bg-orange-700 transition"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
