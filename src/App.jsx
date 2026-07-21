import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import NorthStarSection from './components/sections/NorthStarSection';
import WhyWeExistSection from './components/sections/WhyWeExistSection';

function App() {
  return (
    <div className="relative min-h-screen bg-brand-navy overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <NorthStarSection />
        <WhyWeExistSection />
      </main>
    </div>
  );
}

export default App;
