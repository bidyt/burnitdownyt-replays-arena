
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
        className="fixed inset-0 opacity-3 pointer-events-none z-0"
        style={{
          backgroundImage: 'url(/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '40%'
        }}
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-900/40 to-black py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-enhanced">
              <span className="text-red-400 heading-glow">WORK</span> <span className="text-white">WITH US</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-semibold text-enhanced">
              Partner with BurnItDownYT for authentic wrestling content and brand collaborations
            </p>
          </div>
        </section>

        {/* Intro Section */}
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

        {/* Social Media Performance */}
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

        {/* Audience Demographics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-enhanced">
              <Users className="inline-block mr-3 text-blue-400" />
              <span className="text-white">AUDIENCE DEMOGRAPHICS</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-800 border-gray-600 border-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-white font-bold text-enhanced">Age Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-enhanced">18-24</span>
                      <div className="flex-1 mx-4 bg-gray-600 rounded-full h-4">
                        <div className="bg-red-400 h-4 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                      <span className="text-white font-semibold text-enhanced">25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-enhanced">25-34</span>
                      <div className="flex-1 mx-4 bg-gray-600 rounded-full h-4">
                        <div className="bg-red-400 h-4 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-white font-semibold text-enhanced">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-enhanced">35-44</span>
                      <div className="flex-1 mx-4 bg-gray-600 rounded-full h-4">
                        <div className="bg-red-400 h-4 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                      <span className="text-white font-semibold text-enhanced">20%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-enhanced">45+</span>
                      <div className="flex-1 mx-4 bg-gray-600 rounded-full h-4">
                        <div className="bg-red-400 h-4 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                      <span className="text-white font-semibold text-enhanced">10%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-600 border-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-white font-bold text-enhanced">Geographic Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-white font-semibold text-enhanced">United States</span>
                      <span className="font-black text-red-300 text-enhanced">60%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white font-semibold text-enhanced">Canada</span>
                      <span className="font-black text-red-300 text-enhanced">15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white font-semibold text-enhanced">United Kingdom</span>
                      <span className="font-black text-red-300 text-enhanced">12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white font-semibold text-enhanced">Australia</span>
                      <span className="font-black text-red-300 text-enhanced">8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white font-semibold text-enhanced">Other</span>
                      <span className="font-black text-red-300 text-enhanced">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sponsorship Examples */}
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

        {/* Pricing & Packages */}
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

        {/* Media Kit Download */}
        <section className="py-16 bg-gradient-to-r from-red-900/50 to-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white text-enhanced">
              GET THE FULL MEDIA KIT
            </h2>
            <p className="text-gray-200 text-xl mb-8 max-w-2xl mx-auto font-semibold text-enhanced">
              Download our comprehensive media kit with detailed analytics, case studies, and collaboration options.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-5 rounded-lg font-black text-xl transition-colors transform hover:scale-105 inline-flex items-center text-enhanced">
              <Download className="mr-3" size={28} />
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
