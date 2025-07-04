
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/work-with-us/HeroSection';
import IntroSection from '@/components/work-with-us/IntroSection';
import SocialMediaPerformance from '@/components/work-with-us/SocialMediaPerformance';
import AudienceDemographics from '@/components/work-with-us/AudienceDemographics';
import SponsorshipExamples from '@/components/work-with-us/SponsorshipExamples';
import PricingPackages from '@/components/work-with-us/PricingPackages';
import MediaKitSection from '@/components/work-with-us/MediaKitSection';

const WorkWithUs = () => {
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
        <HeroSection />
        <IntroSection />
        <SocialMediaPerformance />
        <AudienceDemographics />
        <SponsorshipExamples />
        <PricingPackages />
        <MediaKitSection />
      </div>

      <Footer />
    </div>
  );
};

export default WorkWithUs;
