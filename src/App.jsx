import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import NorthStarSection from './components/sections/NorthStarSection';
import TransformLeadershipSection from './components/sections/TransformLeadershipSection';
import EcosystemSection from './components/sections/EcosystemSection';

function App() {
  return (
    <div className="relative min-h-screen bg-brand-navy overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <NorthStarSection />
        <TransformLeadershipSection />
        <EcosystemSection />
      </main>
    </div>
  );
}

export default App;
