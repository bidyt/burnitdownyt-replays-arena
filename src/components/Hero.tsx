
import { Play, Flame, Trophy, Users, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-950/30 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Main hero image */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Animated overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent animate-pulse" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto">
          {/* Logo Animation */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img 
                src="/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png" 
                alt="BurnItDownYT" 
                className="h-20 w-auto animate-pulse hover:scale-110 transition-transform duration-300"
              />
              <Flame className="text-red-500 text-6xl animate-pulse" />
            </div>
          </div>

          {/* Main Title with Wrestling Effects */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 heading-glow animate-scale-in">
            BURN IT DOWN
            <span className="block text-4xl md:text-6xl text-red-500 mt-2 animate-pulse">
              YT WRESTLING
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 text-enhanced animate-fade-in">
            🔥 THE ULTIMATE WRESTLING ENTERTAINMENT EXPERIENCE 🔥
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <button className="group relative bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full font-black text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <Play className="inline mr-2" size={24} />
              WATCH NOW
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg" />
            </button>
            
            <button className="group relative bg-transparent border-2 border-red-500 text-red-500 px-8 py-4 rounded-full font-black text-lg hover:bg-red-500 hover:text-white transform hover:scale-105 transition-all duration-300">
              <Trophy className="inline mr-2" size={24} />
              VIEW CHAMPIONSHIPS
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-red-500/30 hover:border-red-500 transition-all duration-300 transform hover:scale-105">
              <Users className="text-red-500 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-black text-white mb-2">50K+</h3>
              <p className="text-gray-300">Wrestling Fans</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-red-500/30 hover:border-red-500 transition-all duration-300 transform hover:scale-105">
              <Play className="text-red-500 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-black text-white mb-2">1000+</h3>
              <p className="text-gray-300">Epic Matches</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-red-500/30 hover:border-red-500 transition-all duration-300 transform hover:scale-105">
              <Calendar className="text-red-500 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-black text-white mb-2">24/7</h3>
              <p className="text-gray-300">Live Content</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-red-500 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse" />
            </div>
            <p className="text-red-500 text-sm mt-2 font-bold">SCROLL FOR MORE</p>
          </div>
        </div>
      </div>

      {/* Side Effects */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-32 bg-gradient-to-b from-transparent via-red-500/50 to-transparent animate-pulse" />
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-32 bg-gradient-to-b from-transparent via-red-500/50 to-transparent animate-pulse" />
    </section>
  );
};

export default Hero;
