import {
  About,
  Skills,
  Projects,
  Contact,
  Footer
} from "./components";
import Navigation from "./components/layout/Navigation";
import Hero from "./components/layout/Hero";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-black text-green-300">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
