
import React, { useState, useEffect } from 'react';
import { Youtube, Instagram, Users, ExternalLink, Play, Heart, MessageCircle } from 'lucide-react';

interface SocialPost {
  id: string;
  platform: 'youtube' | 'instagram' | 'facebook';
  title: string;
  content: string;
  image: string;
  timestamp: string;
  engagement: {
    likes: number;
    comments: number;
    views?: number;
  };
  url: string;
}

const SocialMediaWidget = () => {
  const [activeTab, setActiveTab] = useState<'youtube' | 'instagram' | 'facebook'>('youtube');
  const [posts, setPosts] = useState<SocialPost[]>([]);

  // Mock data - In production, this would come from real API calls
  const mockPosts: SocialPost[] = [
    {
      id: '1',
      platform: 'youtube',
      title: 'EPIC WRESTLING MATCH HIGHLIGHTS',
      content: 'Watch the most intense wrestling moments from last night\'s event!',
      image: '/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png',
      timestamp: '2 hours ago',
      engagement: { likes: 1250, comments: 89, views: 15600 },
      url: 'https://youtube.com/@burnitdownyt?si=ogbNfYLps54zRZQ1'
    },
    {
      id: '2',
      platform: 'instagram',
      title: 'Behind the Scenes Training',
      content: 'Getting ready for the championship match! 💪🔥',
      image: '/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png',
      timestamp: '4 hours ago',
      engagement: { likes: 892, comments: 45 },
      url: 'https://www.instagram.com/burnitdownyt'
    },
    {
      id: '3',
      platform: 'facebook',
      title: 'Community Discussion',
      content: 'What was your favorite match from WrestleMania? Share your thoughts!',
      image: '/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png',
      timestamp: '6 hours ago',
      engagement: { likes: 234, comments: 67 },
      url: 'https://www.facebook.com/share/g/1BpZVnNsqr/?mibextid=wwXIfr'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setPosts(mockPosts.filter(post => post.platform === activeTab));
  }, [activeTab]);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'youtube':
        return <Youtube className="text-red-500" size={24} />;
      case 'instagram':
        return <Instagram className="text-pink-500" size={24} />;
      case 'facebook':
        return <Users className="text-blue-500" size={24} />;
      default:
        return null;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'youtube':
        return 'from-red-600 to-red-800';
      case 'instagram':
        return 'from-pink-600 to-purple-600';
      case 'facebook':
        return 'from-blue-600 to-blue-800';
      default:
        return 'from-gray-600 to-gray-800';
    }
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 to-black py-8 border-b border-red-600/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 text-enhanced">
            🔥 LIVE SOCIAL FEED
          </h2>
          <p className="text-gray-300 text-lg">Stay connected with our latest updates across all platforms</p>
        </div>

        {/* Platform Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 rounded-lg p-2 flex space-x-2">
            {(['youtube', 'instagram', 'facebook'] as const).map((platform) => (
              <button
                key={platform}
                onClick={() => setActiveTab(platform)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-bold transition-all transform hover:scale-105 ${
                  activeTab === platform
                    ? `bg-gradient-to-r ${getPlatformColor(platform)} text-white`
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {getPlatformIcon(platform)}
                <span className="capitalize">{platform}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-red-500 transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 flex items-center space-x-1">
                  {getPlatformIcon(post.platform)}
                </div>
                {post.platform === 'youtube' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="text-white bg-red-600 rounded-full p-3 w-16 h-16" />
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {post.content}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <span>{post.timestamp}</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart size={16} className="text-red-500" />
                      <span>{post.engagement.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle size={16} className="text-blue-500" />
                      <span>{post.engagement.comments}</span>
                    </div>
                    {post.engagement.views && (
                      <div className="flex items-center space-x-1">
                        <Play size={16} className="text-green-500" />
                        <span>{post.engagement.views}</span>
                      </div>
                    )}
                  </div>
                </div>

                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2 bg-gradient-to-r ${getPlatformColor(post.platform)} text-white px-4 py-2 rounded-lg font-bold transition-all transform hover:scale-105 w-full justify-center`}
                >
                  <span>View on {post.platform}</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Updates automatically every 15 minutes • Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaWidget;
