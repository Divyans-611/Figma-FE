import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import NorthStarSection from './components/sections/NorthStarSection';
import MeetOurFounderSection from './components/sections/MeetOurFounderSection';
import WhyWeExistSection from './components/sections/WhyWeExistSection';
import TransformLeadershipSection from './components/sections/TransformLeadershipSection';
import EcosystemSection from './components/sections/EcosystemSection';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <NorthStarSection />
        <MeetOurFounderSection />
        <WhyWeExistSection />
        <TransformLeadershipSection />
        <EcosystemSection />
        <div id="contact-us"></div>
      </main>
    </div>
  );
}

export default App;
