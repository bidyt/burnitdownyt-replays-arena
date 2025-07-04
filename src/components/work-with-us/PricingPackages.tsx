
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PricingPackages = () => {
  const [activePackage, setActivePackage] = useState<string | null>(null);

  const packages = [
    {
      id: 'basic',
      name: 'Basic Package',
      price: '$500',
      features: [
        '1 Instagram Post',
        '1 Instagram Story',
        'Standard analytics report',
        '24-hour content live time'
      ],
      platforms: ['Instagram']
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: '$1,200',
      features: [
        '2 Instagram Posts',
        '3 Instagram Stories',
        '1 YouTube integration',
        '1 Facebook post',
        'Detailed analytics report',
        '48-hour content live time',
        'Custom hashtag strategy'
      ],
      platforms: ['Instagram', 'YouTube', 'Facebook']
    },
    {
      id: 'ultimate',
      name: 'Ultimate Package',
      price: '$2,500',
      features: [
        '4 Instagram Posts',
        '6 Instagram Stories',
        '1 Dedicated YouTube video',
        '2 Facebook posts',
        'Cross-platform campaign',
        'Extended analytics (30 days)',
        'Custom content creation',
        'Brand integration consultation'
      ],
      platforms: ['Instagram', 'YouTube', 'Facebook']
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-white text-enhanced">
          PRICING & PACKAGES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id}
              className={`bg-gray-800 border-2 transition-all cursor-pointer ${
                activePackage === pkg.id ? 'border-red-400' : 'border-gray-600 hover:border-red-300'
              }`}
              onClick={() => setActivePackage(activePackage === pkg.id ? null : pkg.id)}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-red-400 font-black text-enhanced">{pkg.name}</CardTitle>
                <div className="text-4xl font-black text-white text-enhanced">{pkg.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="text-green-300 mr-2 font-bold">✓</span>
                      <span className="text-gray-200 font-medium text-enhanced">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {pkg.platforms.map((platform) => (
                    <span 
                      key={platform}
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm font-semibold text-enhanced"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
