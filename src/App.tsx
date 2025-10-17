import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import FeatureCards from './sections/FeatureCards';

function App() {
  return (
    <div className="font-inter relative min-h-screen w-full">
      <Navbar />
      <main className="bg-[#09090b] ">
        <Hero />
        <FeatureCards />
      </main>
    </div>
  );
}

export default App;
