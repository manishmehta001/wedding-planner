const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          "url('https://images.squarespace-cdn.com/content/569fb1fccbced6e361e09b11/1689174888469-KD16AK7TCF6H07QCI2BA/Portland-Oregon-wedding-planners.jpeg?format=1500w&content-type=image%2Fjpeg')",
      }}
    >
      <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-white">
        <h1 className="text-5xl font-bold ">Making Your Special Day Perfect</h1>
        <button className="mt-6 py-2 px-6 bg-blue-500 text-white rounded-full">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
