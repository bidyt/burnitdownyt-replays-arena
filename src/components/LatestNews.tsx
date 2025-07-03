
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  image: string;
  timestamp: string;
}

const LatestNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Placeholder news data - in a real app, this would come from an API
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Championship Match Set for Next Month",
      summary: "Two heavyweight contenders will face off in what promises to be the match of the year...",
      image: "/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      title: "New Wrestling League Announces Major Partnership",
      summary: "The announcement comes as wrestling continues to grow in popularity worldwide...",
      image: "/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png",
      timestamp: "4 hours ago"
    },
    {
      id: 3,
      title: "Behind the Scenes: Training Like a Champion",
      summary: "Get an exclusive look at what it takes to compete at the highest level...",
      image: "/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png",
      timestamp: "6 hours ago"
    },
    {
      id: 4,
      title: "Wrestling Legends Share Their Stories",
      summary: "Former champions discuss their most memorable matches and career highlights...",
      image: "/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png",
      timestamp: "8 hours ago"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-red-900/20 to-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-red-500 mb-2">
            🔥 LATEST & TRENDING
          </h2>
          <p className="text-gray-300 text-lg">Stay updated with the hottest wrestling news</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main News Display */}
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-red-600/30">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={newsItems[currentIndex].image}
                  alt={newsItems[currentIndex].title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <div className="text-red-400 text-sm font-semibold mb-2">
                  {newsItems[currentIndex].timestamp}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {newsItems[currentIndex].title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {newsItems[currentIndex].summary}
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                  READ MORE
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-600/80 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-600/80 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-red-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
