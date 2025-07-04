
import React from 'react';
import { TrendingUp, Instagram, Youtube, Facebook } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SocialMediaPerformance = () => {
  const socialStats = [
    {
      platform: 'Instagram',
      icon: Instagram,
      followers: '150K',
      engagement: '8.5%',
      color: 'text-pink-400'
    },
    {
      platform: 'YouTube',
      icon: Youtube,
      followers: '85K',
      engagement: '12.3%',
      color: 'text-red-400'
    },
    {
      platform: 'Facebook',
      icon: Facebook,
      followers: '95K',
      engagement: '6.8%',
      color: 'text-blue-400'
    }
  ];

  return (
    <section className="py-16 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-enhanced">
          <TrendingUp className="inline-block mr-3 text-green-400" />
          <span className="text-white">SOCIAL MEDIA PERFORMANCE</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialStats.map((stat) => (
            <Card key={stat.platform} className="bg-gray-800 border-gray-600 border-2">
              <CardHeader className="text-center">
                <stat.icon className={`mx-auto mb-2 ${stat.color}`} size={56} />
                <CardTitle className="text-2xl text-white font-bold text-enhanced">{stat.platform}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-black text-white mb-2 text-enhanced">{stat.followers}</div>
                <div className="text-gray-200 mb-4 font-semibold text-enhanced">Followers</div>
                <div className="text-3xl font-black text-green-300 text-enhanced">{stat.engagement}</div>
                <div className="text-gray-200 font-semibold text-enhanced">Avg. Engagement</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaPerformance;
