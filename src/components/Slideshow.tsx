
import { useState, useEffect } from 'react';

interface SlideContent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
}

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample content - this will be replaced with Supabase data later
  const slides: SlideContent[] = [
    {
      id: 1,
      title: "Jey Uso saves Sami Zayn and Penta from a Bron Breakker and Bronson Reed beatdown",
      subtitle: "RAW RESULTS FOR 6/30",
      description: "The Tribal Combat Unit strikes back in explosive fashion",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "RAW"
    },
    {
      id: 2,
      title: "Championship Showdown This Friday Night",
      subtitle: "SMACKDOWN PREVIEW",
      description: "Title implications on the line in a massive main event",
      image: "https://images.unsplash.com/photo-1594736797933-d0c4e0638b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "SMACKDOWN"
    },
    {
      id: 3,
      title: "Exclusive Behind the Scenes Content",
      subtitle: "PREMIUM CONTENT",
      description: "Get access to never-before-seen footage",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "EXCLUSIVE"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-gradient-to-br from-red-600 via-red-700 to-black min-h-[600px] relative overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
          
          {/* Left Side - Brand Logo */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <div className="bg-red-600 text-white px-8 py-4 rounded-lg shadow-2xl transform hover:scale-105 transition-transform">
                <h1 className="text-6xl font-black tracking-wider">
                  BURN
                </h1>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Center - Main Content Slideshow */}
          <div className="lg:col-span-1 relative">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="bg-red-600 text-xs font-bold px-3 py-1 rounded mb-2 inline-block">
                      {slide.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">
                      {slide.title}
                    </h3>
                    <p className="text-sm opacity-90">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Current Slide Info */}
          <div className="flex items-center">
            <div className="bg-red-600 text-white p-6 rounded-lg shadow-2xl w-full">
              <div className="text-sm font-bold mb-2 opacity-90">
                {slides[currentSlide].subtitle}
              </div>
              <h2 className="text-2xl font-bold mb-4 leading-tight">
                {slides[currentSlide].title}
              </h2>
              <div className="flex space-x-4">
                <button className="bg-white text-red-600 px-6 py-2 rounded font-bold hover:bg-gray-100 transition-colors">
                  Results
                </button>
                <button className="border-2 border-white text-white px-6 py-2 rounded font-bold hover:bg-white hover:text-red-600 transition-colors flex items-center">
                  ▶ Watch Highlights
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
