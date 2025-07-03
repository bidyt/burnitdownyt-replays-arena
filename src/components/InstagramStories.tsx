
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

interface Story {
  id: number;
  image: string;
  title: string;
  timestamp: string;
}

const InstagramStories = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Placeholder story data
  const stories: Story[] = [
    {
      id: 1,
      image: "/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png",
      title: "Training Day",
      timestamp: "2h"
    },
    {
      id: 2,
      image: "/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png",
      title: "Behind Scenes",
      timestamp: "4h"
    },
    {
      id: 3,
      image: "/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png",
      title: "Match Prep",
      timestamp: "6h"
    },
    {
      id: 4,
      image: "/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png",
      title: "Fan Meet",
      timestamp: "8h"
    },
    {
      id: 5,
      image: "/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png",
      title: "Workout",
      timestamp: "12h"
    },
    {
      id: 6,
      image: "/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png",
      title: "Victory",
      timestamp: "1d"
    }
  ];

  const scrollLeft = () => {
    const container = document.getElementById('stories-container');
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('stories-container');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Instagram className="text-pink-500 mr-3" size={32} />
          <h2 className="text-3xl md:text-4xl font-black text-white">
            📲 INSTAGRAM STORIES
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-pink-600/80 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            id="stories-container"
            className="flex space-x-4 overflow-x-auto scrollbar-hide px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {stories.map((story) => (
              <div
                key={story.id}
                className="flex-shrink-0 w-24 md:w-32 cursor-pointer group"
              >
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gradient-to-r from-pink-500 to-purple-500 p-1 bg-gradient-to-r from-pink-500 to-purple-500">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full rounded-full object-cover border-2 border-black"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                    {story.timestamp}
                  </div>
                </div>
                <p className="text-white text-center text-sm mt-2 font-medium group-hover:text-pink-400 transition-colors">
                  {story.title}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-pink-600/80 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com/burnitdownyt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105"
          >
            <Instagram className="mr-2" size={20} />
            Follow @BurnItDownYT
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramStories;
