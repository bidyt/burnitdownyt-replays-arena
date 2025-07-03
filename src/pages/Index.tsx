
import Header from '../components/Header';
import Hero from '../components/Hero';
import LatestNews from '../components/LatestNews';
import InstagramStories from '../components/InstagramStories';
import Slideshow from '../components/Slideshow';
import SocialMediaButtons from '../components/SocialMediaButtons';
import FeaturedBelts from '../components/FeaturedBelts';
import ResellTickets from '../components/ResellTickets';
import FloatingButtons from '../components/FloatingButtons';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Logo Watermark */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: 'url(/lovable-uploads/eb5a7593-283a-4841-b680-38adeeb16bdb.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '30%'
        }}
      />
      
      <div className="relative z-10">
        <Header />
        <LatestNews />
        <InstagramStories />
        <Hero />
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
