import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="bg-gray-50 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center min-h-[610px]">
        {/* Left Content */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col justify-center min-h-[500px]">
          <h2 className="text-gray-800 text-3xl tracking-widest uppercase pb-12">
            Curated Events, Timeless Style,
          </h2>
          <h1 className="text-4xl md:text-5xl font-light italic text-gray-600 pb-12">
            Flawless{" "}
            <span className="font-normal not-italic text-gray-800">
              Execution
            </span>
          </h1>
          <p className="text-gray-600 leading-relaxed pb-9">
            Bridal Bliss is a full-service planning company, executing events
            since 2002. Our passion for weddings, creative spirit, undivided
            attention, and affirming attitude set us apart. We bring a fresh
            perspective to event design and collaborate with you to create an
            extraordinarily stylish and authentic event. Our team values
            diversity, inclusion, honesty, and innovation.
          </p>
          <button className="mt-2 px-6 py-3 bg-gray-800 text-white uppercase tracking-wider rounded-md shadow hover:bg-gray-700 transition">
            Our Services
          </button>
        </div>

        {/* Center Image */}
        <div className="col-span-1">
          <img
            src="/images/wp2.jpg"
            alt="Wedding Couple"
            className="w-full h-[610px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Images */}
        <div className="col-span-1 space-y-4">
          <img
            src="/images/wp3.jpg"
            alt="Wedding Venue"
            className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
          />
          <img
            src="/images/wp7.jpg"
            alt="Decorations"
            className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
