import React from "react";

const EventHeroSection = () => {
  return (
    <section className="w-full pb-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Image Column */}
        <div className="flex flex-col gap-8">
          <img
            src="https://images.squarespace-cdn.com/content/v1/569fb1fccbced6e361e09b11/b8fe49b1-f9dd-4b6e-b80b-78031b9720c8/Caroline+Mueller+%2B+John+Switzer+Wedding%2C+8.6.22%2C+Stoller%2C+Amanda+K+%287%29.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/569fb1fccbced6e361e09b11/b8fe49b1-f9dd-4b6e-b80b-78031b9720c8/Caroline+Mueller+%2B+John+Switzer+Wedding%2C+8.6.22%2C+Stoller%2C+Amanda+K+%287%29.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/569fb1fccbced6e361e09b11/b8fe49b1-f9dd-4b6e-b80b-78031b9720c8/Caroline+Mueller+%2B+John+Switzer+Wedding%2C+8.6.22%2C+Stoller%2C+Amanda+K+%287%29.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/569fb1fccbced6e361e09b11/b8fe49b1-f9dd-4b6e-b80b-78031b9720c8/Caroline+Mueller+%2B+John+Switzer+Wedding%2C+8.6.22%2C+Stoller%2C+Amanda+K+%287%29.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/569fb1fccbced6e361e09b11/b8fe49b1-f9dd-4b6e-b80b-78031b9720c8/Caroline+Mueller+%2B+John+Switzer+Wedding%2C+8.6.22%2C+Stoller%2C+Amanda+K+%287%29.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/569fb1fccbced6e361e09b11/b8fe49b1-f9dd-4b6e-b80b-78031b9720c8/Caroline+Mueller+%2B+John+Switzer+Wedding%2C+8.6.22%2C+Stoller%2C+Amanda+K+%287%29.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/569fb1fccbced6e361e09b11/b8fe49b1-f9dd-4b6e-b80b-78031b9720c8/Caroline+Mueller+%2B+John+Switzer+Wedding%2C+8.6.22%2C+Stoller%2C+Amanda+K+%287%29.jpg?format=2500w 2500w"
            alt="Left Top"
            className="w-full h-[340px] object-cover rounded-2xl shadow-md"
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/569fb1fccbced6e361e09b11/4c333099-7d0d-490c-bff9-274636e65624/Meg+Corscadden+and+Andrew+Rockamann%2C+5.25.24%2C+The+Admiral%27s+House%2C+Anna+Peters+%281%29.jpg"
            alt="Left Bottom"
            className="w-full h-[250px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Center Image */}
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/569fb1fccbced6e361e09b11/cb6b1b50-a0ae-4de0-ac16-069e80c35ef4/Jennifer+Nordine+%2B+Keith+Kniland%2C+5-15-21%2C+Hideway+Club+Palm+Springs%2C+Rebecca+Yale+Photography+%284%29.jpg"
            alt="Center Table Setup"
            className="w-full h-[600px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Right Text Section */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-center flex flex-col justify-center items-center space-y-6 min-h-[600px]">
          <h3 className="text-xl tracking-widest uppercase text-gray-600 pb-3">
            Portland,{" "}
            <span className="underline decoration-gray-400 decoration-[1px] underline-offset-4">
              Seattle
            </span>
            ,{" "}
            <span className="underline decoration-gray-400 decoration-[1px] underline-offset-4">
              Bend
            </span>{" "}
            and
          </h3>
          <h1 className="text-4xl font-light text-gray-800 pb-3">
            destination
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-xs pb-3">
            While based in the Pacific Northwest, our experienced wedding
            planning team also jet-sets around the globe for notable destination
            events worldwide!
          </p>
          <button className="px-6 py-3 bg-gray-800 text-white uppercase tracking-wider rounded-2xl hover:bg-gray-700 transition">
            Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventHeroSection;
