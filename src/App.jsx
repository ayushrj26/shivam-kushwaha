import Navbar from "./components/Navbar";
import ShivamHero from "./components/ShivamHero";
import About from "./components/About";
import Works from "./components/Works";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="bg-[#050818] min-h-screen">
      <Navbar />

      <main className="pt-28">
        <ShivamHero />
        <About />
        <Works />
        <Services />
        <FAQ />
        <Analytics />
      </main>
    </div>
  );
}

export default App;