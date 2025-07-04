
import React, { useState, useEffect } from 'react';
import { Youtube, Instagram, Users, ExternalLink, Play, Heart, MessageCircle, Share, MoreHorizontal, Bookmark } from 'lucide-react';

interface SocialPost {
  id: string;
  platform: 'youtube' | 'instagram' | 'facebook';
  title: string;
  content: string;
  image: string;
  timestamp: string;
  author: {
    name: string;
    username: string;
    avatar: string;
    verified: boolean;
  };
  engagement: {
    likes: number;
    comments: number;
    shares?: number;
    views?: number;
  };
  url: string;
}

const SocialMediaWidget = () => {
  const [activeTab, setActiveTab] = useState<'youtube' | 'instagram' | 'facebook'>('youtube');
  const [posts, setPosts] = useState<SocialPost[]>([]);

  // Enhanced mock data with social media styling
  const mockPosts: SocialPost[] = [
    {
      id: '1',
      platform: 'youtube',
      title: 'EPIC WRESTLING MATCH HIGHLIGHTS',
      content: 'Watch the most intense wrestling moments from last night\'s event! This was absolutely incredible 🔥',
      image: '/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png',
      timestamp: '2 hours ago',
      author: {
        name: 'BurnItDownYT',
        username: '@burnitdownyt',
        avatar: '/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png',
        verified: true
      },
      engagement: { likes: 1250, comments: 89, shares: 45, views: 15600 },
      url: 'https://youtube.com/@burnitdownyt?si=ogbNfYLps54zRZQ1'
    },
    {
      id: '2',
      platform: 'instagram',
      title: 'Training Session',
      content: 'Getting ready for the championship match! 💪🔥 #Wrestling #Training #Championship',
      image: '/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png',
      timestamp: '4 hours ago',
      author: {
        name: 'BurnItDownYT',
        username: '@burnitdownyt',
        avatar: '/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png',
        verified: true
      },
      engagement: { likes: 892, comments: 45, shares: 23 },
      url: 'https://www.instagram.com/burnitdownyt'
    },
    {
      id: '3',
      platform: 'facebook',
      title: 'Community Discussion',
      content: 'What was your favorite match from WrestleMania? Share your thoughts in the comments! Let\'s discuss! 🤼‍♂️',
      image: '/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png',
      timestamp: '6 hours ago',
      author: {
        name: 'BurnItDownYT Wrestling',
        username: 'BurnItDownYT',
        avatar: '/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png',
        verified: true
      },
      engagement: { likes: 234, comments: 67, shares: 12 },
      url: 'https://www.facebook.com/share/g/1BpZVnNsqr/?mibextid=wwXIfr'
    }
  ];

  useEffect(() => {
    setPosts(mockPosts.filter(post => post.platform === activeTab));
  }, [activeTab]);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'youtube':
        return <Youtube className="text-red-500" size={20} />;
      case 'instagram':
        return <Instagram className="text-pink-500" size={20} />;
      case 'facebook':
        return <Users className="text-blue-500" size={20} />;
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

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 to-black py-12 border-b border-red-600/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 text-enhanced">
            🔥 LIVE SOCIAL FEED
          </h2>
          <p className="text-gray-300 text-lg">Stay connected with our latest updates</p>
        </div>

        {/* Platform Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 rounded-full p-1 flex space-x-1">
            {(['youtube', 'instagram', 'facebook'] as const).map((platform) => (
              <button
                key={platform}
                onClick={() => setActiveTab(platform)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105 ${
                  activeTab === platform
                    ? `bg-gradient-to-r ${getPlatformColor(platform)} text-white shadow-lg`
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {getPlatformIcon(platform)}
                <span className="capitalize">{platform}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Social Media Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
            >
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div className="absolute -bottom-1 -right-1">
                      {getPlatformIcon(post.platform)}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      <h3 className="font-bold text-gray-900">{post.author.name}</h3>
                      {post.author.verified && (
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">{post.author.username} • {post.timestamp}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 p-2">
                  <MoreHorizontal size={20} />
                </button>
              </div>

              {/* Post Content */}
              <div className="px-4 pb-3">
                <p className="text-gray-800 leading-relaxed">{post.content}</p>
              </div>

              {/* Post Image/Video */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-80 object-cover"
                />
                {post.platform === 'youtube' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors cursor-pointer">
                      <Play className="text-white ml-1" size={24} fill="white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Post Actions */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                      <Heart size={24} />
                      <span className="font-semibold">{formatNumber(post.engagement.likes)}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                      <MessageCircle size={24} />
                      <span className="font-semibold">{formatNumber(post.engagement.comments)}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                      <Share size={24} />
                      <span className="font-semibold">{formatNumber(post.engagement.shares || 0)}</span>
                    </button>
                  </div>
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <Bookmark size={24} />
                  </button>
                </div>

                {post.engagement.views && (
                  <p className="text-gray-500 text-sm mb-3">
                    {formatNumber(post.engagement.views)} views
                  </p>
                )}

                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2 bg-gradient-to-r ${getPlatformColor(post.platform)} text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105 w-full justify-center shadow-lg`}
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
