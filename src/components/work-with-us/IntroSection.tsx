
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const IntroSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="bg-gray-800 border-red-500/50 border-2">
          <CardHeader>
            <CardTitle className="text-3xl text-red-400 font-black text-enhanced">Hi, I'm Dan...</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-100 text-lg md:text-xl leading-relaxed mb-6 font-medium text-enhanced">
              Welcome to BurnItDownYT! I'm Dan, your go-to wrestling content creator with a passion for bringing the excitement 
              of wrestling to fans worldwide. With years of experience in content creation and a dedicated following across 
              multiple platforms, I specialize in authentic wrestling commentary, reviews, and behind-the-scenes content.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-red-800/40 p-6 rounded-lg border border-red-600/30">
                <div className="text-4xl font-black text-red-300 text-enhanced">330K+</div>
                <div className="text-gray-200 font-semibold text-enhanced">Total Followers</div>
              </div>
              <div className="text-center bg-red-800/40 p-6 rounded-lg border border-red-600/30">
                <div className="text-4xl font-black text-red-300 text-enhanced">5M+</div>
                <div className="text-gray-200 font-semibold text-enhanced">Monthly Views</div>
              </div>
              <div className="text-center bg-red-800/40 p-6 rounded-lg border border-red-600/30">
                <div className="text-4xl font-black text-red-300 text-enhanced">95%</div>
                <div className="text-gray-200 font-semibold text-enhanced">Audience Retention</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IntroSection;
