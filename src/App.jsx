import "./App.css";
import { AboutSection } from "./components/AboutSection";
import { CaseSection } from "./components/CaseSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { InsightsSection } from "./components/InsightsSection";
import { ProductivitySection } from "./components/ProductivitySection";
import { ServicesSection } from "./components/ServicesSection";
import { TeamSection } from "./components/TeamSection";

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
        <TeamSection />
        <ProductivitySection />
      </main>
    </>
  );
}

export default App;
