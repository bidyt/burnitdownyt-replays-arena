
import Header from '../components/Header';
import Hero from '../components/Hero';
import Slideshow from '../components/Slideshow';
import SocialMediaButtons from '../components/SocialMediaButtons';
import ResellTickets from '../components/ResellTickets';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Slideshow />
      <SocialMediaButtons />
      <ResellTickets />
      <Footer />
    </div>
  );
};

export default Index;
