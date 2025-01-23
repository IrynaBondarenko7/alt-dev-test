import "./App.css";
import { AboutSection } from "./components/AboutSection";
import { CaseSection } from "./components/CaseSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { InsightsSection } from "./components/InsightsSection";
import { ServicesSection } from "./components/ServicesSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CaseSection />
        <InsightsSection />
      </main>
    </>
  );
}

export default App;
