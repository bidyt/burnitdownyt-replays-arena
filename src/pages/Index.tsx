
import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialMediaWidget from '../components/SocialMediaWidget';
import LatestNews from '../components/LatestNews';
import Slideshow from '../components/Slideshow';
import SocialMediaButtons from '../components/SocialMediaButtons';
import FeaturedBelts from '../components/FeaturedBelts';
import ResellTickets from '../components/ResellTickets';
import FloatingButtons from '../components/FloatingButtons';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background with WWE-style effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Dynamic background with wrestling theme */}
        <div 
          className="absolute inset-0 opacity-10 animate-pulse"
          style={{
            backgroundImage: 'url(/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '40%'
          }}
        />
        {/* Animated red glow effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/5 via-transparent to-red-900/5 animate-pulse" />
        {/* Wrestling ring rope effect */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-pulse" />
      </div>
      
      <div className="relative z-10">
        <Header />
        <LatestNews />
        <SocialMediaWidget />
        <Slideshow />
        <SocialMediaButtons />
        <FeaturedBelts />
        <ResellTickets />
        <Footer />
      </div>
      
      <FloatingButtons />
    </div>
  );
};

export default Index;
