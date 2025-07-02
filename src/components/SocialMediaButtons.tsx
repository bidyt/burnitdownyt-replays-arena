
import { Youtube, Instagram, Facebook } from 'lucide-react';

const SocialMediaButtons = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://youtube.com/@burnitdownyt?si=ogbNfYLps54zRZQ1',
      icon: Youtube,
      color: 'bg-red-600 hover:bg-red-700',
      description: 'Subscribe to our YouTube channel'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/burnitdownyt?igsh=MTExOGNwOHJhZWYyYQ%3D%3D&utm_source=qr',
      icon: Instagram,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
      description: 'Follow us on Instagram'
    },
    {
      name: 'Instagram Channel',
      url: 'https://www.instagram.com/channel/Abbc4EpkLSYnms4K/?igsh=a3RsdXV4cjQ0ZWZu',
      icon: Instagram,
      color: 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600',
      description: 'Check our Instagram updates'
    },
    {
      name: 'Facebook Group',
      url: 'https://www.facebook.com/share/g/1BpZVnNsqr/?mibextid=wwXIfr',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Join our WWE 2K community'
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Follow <span className="text-red-500">BurnItDownYT</span>
          </h2>
          <p className="text-gray-400">Stay connected with our latest content and updates</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <button
                key={index}
                onClick={() => handleSocialClick(social.url)}
                className={`${social.color} text-white p-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex flex-col items-center space-y-3`}
              >
                <IconComponent size={32} />
                <span className="font-bold text-lg">{social.name}</span>
                <span className="text-sm opacity-90 text-center">{social.description}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaButtons;
