
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Play, Heart, MessageCircle } from 'lucide-react';

interface Story {
  id: number;
  image: string;
  title: string;
  timestamp: string;
  likes: number;
  comments: number;
  isVideo?: boolean;
}

const InstagramStories = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Enhanced story data with wrestling themes
  const stories: Story[] = [
    {
      id: 1,
      image: "/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png",
      title: "🔥 INTENSE TRAINING",
      timestamp: "2h",
      likes: 1420,
      comments: 89,
      isVideo: true
    },
    {
      id: 2,
      image: "/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png",
      title: "🎬 BEHIND SCENES",
      timestamp: "4h",
      likes: 956,
      comments: 67
    },
    {
      id: 3,
      image: "/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png",
      title: "💪 MATCH PREP",
      timestamp: "6h",
      likes: 2100,
      comments: 143,
      isVideo: true
    },
    {
      id: 4,
      image: "/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png",
      title: "🤝 FAN MEET",
      timestamp: "8h",
      likes: 876,
      comments: 54
    },
    {
      id: 5,
      image: "/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png",
      title: "🏋️ WORKOUT",
      timestamp: "12h",
      likes: 1680,
      comments: 92,
      isVideo: true
    },
    {
      id: 6,
      image: "/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png",
      title: "🏆 VICTORY",
      timestamp: "1d",
      likes: 3250,
      comments: 287
    }
  ];

  const scrollLeft = () => {
    const container = document.getElementById('stories-container');
    if (container) {
      container.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('stories-container');
    if (container) {
      container.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-red-900/40 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Instagram className="text-pink-500 mr-4 animate-pulse" size={40} />
          <h2 className="text-4xl md:text-5xl font-black text-white text-enhanced heading-glow">
            📱 INSTAGRAM STORIES
          </h2>
          <Instagram className="text-pink-500 ml-4 animate-pulse" size={40} />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            id="stories-container"
            className="flex space-x-6 overflow-x-auto scrollbar-hide px-16 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {stories.map((story) => (
              <div
                key={story.id}
                className="flex-shrink-0 w-32 md:w-40 cursor-pointer group"
              >
                <div className="relative mb-4">
                  {/* Instagram-style gradient border */}
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-1 animate-pulse">
                    <div className="w-full h-full rounded-full border-4 border-black relative overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {story.isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <Play className="text-white" size={24} fill="white" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Timestamp badge */}
                  <div className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                    {story.timestamp}
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-white text-sm md:text-base font-bold mb-2 group-hover:text-pink-400 transition-colors text-enhanced">
                    {story.title}
                  </p>
                  
                  {/* Engagement stats */}
                  <div className="flex justify-center space-x-3 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Heart size={12} className="text-red-500" />
                      <span>{story.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle size={12} className="text-blue-500" />
                      <span>{story.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/burnitdownyt?igsh=MTExOGNwOHJhZWYyYQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-pink-600 via-purple-600 to-red-600 hover:from-pink-700 hover:via-purple-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-black text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <Instagram className="mr-3" size={24} />
            FOLLOW @BURNITDOWNYT 🔥
          </a>
        </div>

        {/* Auto-update indicator */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Stories update automatically • Next refresh in: <span className="text-pink-500 font-bold">5:23</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramStories;
