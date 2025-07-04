
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Flame, Clock, Eye } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  image: string;
  timestamp: string;
  category: string;
  views: number;
  isBreaking?: boolean;
}

const LatestNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Enhanced news data with wrestling themes
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "🏆 CHAMPIONSHIP SHOWDOWN: Two Titans Collide Next Month",
      summary: "The wrestling world is buzzing as two heavyweight legends prepare for what promises to be the most explosive match of the year. Don't miss this epic collision of titans!",
      image: "/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png",
      timestamp: "2 hours ago",
      category: "BREAKING NEWS",
      views: 15420,
      isBreaking: true
    },
    {
      id: 2,
      title: "🚀 Major Wrestling League Announces Game-Changing Partnership",
      summary: "Industry insiders reveal shocking details about the new alliance that will revolutionize professional wrestling. This partnership is set to shake the foundation of sports entertainment!",
      image: "/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png",
      timestamp: "4 hours ago",
      category: "INDUSTRY NEWS",
      views: 8930
    },
    {
      id: 3,
      title: "💪 EXCLUSIVE: Inside the Training Regimen of Champions",
      summary: "Get unprecedented access to the grueling training routines that forge wrestling legends. From dawn workouts to specialized techniques, discover what it truly takes to dominate the ring!",
      image: "/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png",
      timestamp: "6 hours ago",
      category: "TRAINING",
      views: 12650
    },
    {
      id: 4,
      title: "📺 Wrestling Legends Share Their Most Memorable Moments",
      summary: "Hall of Fame wrestlers open up about their career-defining matches, backstage stories, and the moments that made them legends. These exclusive interviews will give you chills!",
      image: "/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png",
      timestamp: "8 hours ago",
      category: "INTERVIEWS",
      views: 9840
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-red-900/30 via-black to-red-900/30 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Flame className="text-red-500 mr-3 animate-pulse" size={36} />
            <h2 className="text-4xl md:text-6xl font-black text-red-500 mb-2 text-enhanced heading-glow">
              LATEST & TRENDING
            </h2>
            <Flame className="text-red-500 ml-3 animate-pulse" size={36} />
          </div>
          <p className="text-gray-300 text-xl font-semibold text-enhanced">
            Breaking wrestling news that's setting the world on fire! 🔥
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main News Display with Wrestling Effects */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border-2 border-red-600/50 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            {newsItems[currentIndex].isBreaking && (
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 font-black text-center animate-pulse">
                🚨 BREAKING NEWS 🚨
              </div>
            )}
            
            <div className="md:flex">
              <div className="md:w-1/2 relative overflow-hidden">
                <img
                  src={newsItems[currentIndex].image}
                  alt={newsItems[currentIndex].title}
                  className="w-full h-64 md:h-96 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {newsItems[currentIndex].category}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                  <Eye size={16} />
                  <span>{newsItems[currentIndex].views.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center text-red-400 text-sm font-bold mb-4">
                  <Clock size={16} className="mr-2" />
                  {newsItems[currentIndex].timestamp}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight text-enhanced">
                  {newsItems[currentIndex].title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-8 text-lg text-enhanced">
                  {newsItems[currentIndex].summary}
                </p>
                
                <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-black text-lg transition-all transform hover:scale-105 hover:shadow-lg">
                  READ FULL STORY 📖
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-4 rounded-full transition-all transform hover:scale-110 shadow-lg z-10"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-4 rounded-full transition-all transform hover:scale-110 shadow-lg z-10"
          >
            <ChevronRight size={28} />
          </button>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-red-500 scale-125 shadow-lg' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-1 mt-6">
            <div 
              className="bg-gradient-to-r from-red-500 to-red-600 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / newsItems.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
