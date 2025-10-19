import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import FeatureCards from './sections/FeatureCards';
import Footer from './sections/Footer';
import CTAsection from './sections/CTAsection';

function App() {
  return (
    <div className="font-inter relative min-h-screen w-full">
      <Navbar />
      <main className="overflow-hidden bg-[#09090b] pb-10 selection:bg-[#67e8f9] selection:text-[#155e75]">
        <Hero />
        <FeatureCards />
        <CTAsection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
