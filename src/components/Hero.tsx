
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 via-red-700 to-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              JULY 12 | STATE FARM ARENA | ATLANTA, GA
            </h2>
            <h3 className="text-2xl md:text-4xl font-black">
              BURNITDOWNYT PRIORITY PASS
            </h3>
            <p className="text-lg md:text-xl font-semibold">
              PACKAGES AVAILABLE NOW
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold px-8 py-3 rounded transition-colors">
              BUY NOW
            </button>
            <div className="text-xs text-center">
              <div className="font-bold">PRIORITY PASS</div>
              <div>ON LOCATION</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
