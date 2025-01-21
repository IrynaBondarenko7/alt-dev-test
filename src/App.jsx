import "./App.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
    </>
  );
}

export default App;
