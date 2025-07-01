
import Header from '../components/Header';
import Hero from '../components/Hero';
import Slideshow from '../components/Slideshow';
import ResellTickets from '../components/ResellTickets';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Slideshow />
      <ResellTickets />
      <Footer />
    </div>
  );
};

export default Index;
