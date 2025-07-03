
import { useState } from 'react';
import { Download, Users, TrendingUp, Instagram, Youtube, Facebook } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WorkWithUs = () => {
  const [activePackage, setActivePackage] = useState<string | null>(null);

  const socialStats = [
    {
      platform: 'Instagram',
      icon: Instagram,
      followers: '150K',
      engagement: '8.5%',
      color: 'text-pink-500'
    },
    {
      platform: 'YouTube',
      icon: Youtube,
      followers: '85K',
      engagement: '12.3%',
      color: 'text-red-500'
    },
    {
      platform: 'Facebook',
      icon: Facebook,
      followers: '95K',
      engagement: '6.8%',
      color: 'text-blue-500'
    }
  ];

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
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Background Logo Watermark */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: 'url(/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '40%'
        }}
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-900/30 to-black py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-red-500">WORK</span> WITH US
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with BurnItDownYT for authentic wrestling content and brand collaborations
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="bg-gray-900 border-red-600/30">
              <CardHeader>
                <CardTitle className="text-2xl text-red-500">Hi, I'm Dan...</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Welcome to BurnItDownYT! I'm Dan, your go-to wrestling content creator with a passion for bringing the excitement 
                  of wrestling to fans worldwide. With years of experience in content creation and a dedicated following across 
                  multiple platforms, I specialize in authentic wrestling commentary, reviews, and behind-the-scenes content.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center bg-red-900/20 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-red-500">330K+</div>
                    <div className="text-gray-300">Total Followers</div>
                  </div>
                  <div className="text-center bg-red-900/20 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-red-500">5M+</div>
                    <div className="text-gray-300">Monthly Views</div>
                  </div>
                  <div className="text-center bg-red-900/20 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-red-500">95%</div>
                    <div className="text-gray-300">Audience Retention</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Social Media Performance */}
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
              <TrendingUp className="inline-block mr-3 text-green-500" />
              SOCIAL MEDIA PERFORMANCE
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {socialStats.map((stat) => (
                <Card key={stat.platform} className="bg-gray-900 border-gray-700">
                  <CardHeader className="text-center">
                    <stat.icon className={`mx-auto mb-2 ${stat.color}`} size={48} />
                    <CardTitle className="text-xl">{stat.platform}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{stat.followers}</div>
                    <div className="text-gray-400 mb-4">Followers</div>
                    <div className="text-2xl font-bold text-green-400">{stat.engagement}</div>
                    <div className="text-gray-400">Avg. Engagement</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Audience Demographics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
              <Users className="inline-block mr-3 text-blue-500" />
              AUDIENCE DEMOGRAPHICS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle>Age Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>18-24</span>
                      <div className="flex-1 mx-4 bg-gray-700 rounded-full h-3">
                        <div className="bg-red-500 h-3 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                      <span>25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>25-34</span>
                      <div className="flex-1 mx-4 bg-gray-700 rounded-full h-3">
                        <div className="bg-red-500 h-3 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span>45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>35-44</span>
                      <div className="flex-1 mx-4 bg-gray-700 rounded-full h-3">
                        <div className="bg-red-500 h-3 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                      <span>20%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>45+</span>
                      <div className="flex-1 mx-4 bg-gray-700 rounded-full h-3">
                        <div className="bg-red-500 h-3 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                      <span>10%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>United States</span>
                      <span className="font-bold text-red-500">60%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Canada</span>
                      <span className="font-bold text-red-500">15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>United Kingdom</span>
                      <span className="font-bold text-red-500">12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Australia</span>
                      <span className="font-bold text-red-500">8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Other</span>
                      <span className="font-bold text-red-500">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sponsorship Examples */}
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
              SPONSORSHIP EXAMPLES
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <img 
                    src="/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png"
                    alt="Brand Partnership"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg font-bold mb-2">Wrestling Gear Partnership</h3>
                  <p className="text-gray-300 text-sm mb-2">Featured wrestling equipment and apparel</p>
                  <div className="text-green-400 font-bold">150K+ Impressions</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <img 
                    src="/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png"
                    alt="Event Promotion"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg font-bold mb-2">Event Promotion</h3>
                  <p className="text-gray-300 text-sm mb-2">Wrestling event ticket sales campaign</p>
                  <div className="text-green-400 font-bold">200K+ Reach</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <img 
                    src="/lovable-uploads/51aac6eb-3e1e-4d33-b71c-fd8f4f724d3f.png"
                    alt="Product Review"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg font-bold mb-2">Product Reviews</h3>
                  <p className="text-gray-300 text-sm mb-2">In-depth wrestling product analysis</p>
                  <div className="text-green-400 font-bold">85K+ Views</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing & Packages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
              PRICING & PACKAGES
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card 
                  key={pkg.id}
                  className={`bg-gray-900 border-2 transition-all cursor-pointer ${
                    activePackage === pkg.id ? 'border-red-500' : 'border-gray-700 hover:border-red-400'
                  }`}
                  onClick={() => setActivePackage(activePackage === pkg.id ? null : pkg.id)}
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-red-500">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-white">{pkg.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {pkg.platforms.map((platform) => (
                        <span 
                          key={platform}
                          className="bg-red-600 text-white px-2 py-1 rounded text-xs"
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

        {/* Media Kit Download */}
        <section className="py-16 bg-gradient-to-r from-red-900/30 to-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              GET THE FULL MEDIA KIT
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Download our comprehensive media kit with detailed analytics, case studies, and collaboration options.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors transform hover:scale-105 inline-flex items-center">
              <Download className="mr-2" size={24} />
              DOWNLOAD MEDIA KIT
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default WorkWithUs;
