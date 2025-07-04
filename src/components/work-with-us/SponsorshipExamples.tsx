
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SponsorshipExamples = () => {
  return (
    <section className="py-16 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-white text-enhanced">
          SPONSORSHIP EXAMPLES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border-gray-600 border-2">
            <CardContent className="p-6">
              <img 
                src="/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png"
                alt="Brand Partnership"
                className="w-full h-32 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-white text-enhanced">Wrestling Gear Partnership</h3>
              <p className="text-gray-200 text-sm mb-2 font-medium text-enhanced">Featured wrestling equipment and apparel</p>
              <div className="text-green-300 font-bold text-enhanced text-lg">150K+ Impressions</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-600 border-2">
            <CardContent className="p-6">
              <img 
                src="/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png"
                alt="Event Promotion"
                className="w-full h-32 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-white text-enhanced">Event Promotion</h3>
              <p className="text-gray-200 text-sm mb-2 font-medium text-enhanced">Wrestling event ticket sales campaign</p>
              <div className="text-green-300 font-bold text-enhanced text-lg">200K+ Reach</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-600 border-2">
            <CardContent className="p-6">
              <img 
                src="/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png"
                alt="Product Review"
                className="w-full h-32 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-white text-enhanced">Product Reviews</h3>
              <p className="text-gray-200 text-sm mb-2 font-medium text-enhanced">In-depth wrestling product analysis</p>
              <div className="text-green-300 font-bold text-enhanced text-lg">85K+ Views</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipExamples;
