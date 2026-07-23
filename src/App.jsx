import {useState, useEffect} from "react";
import {AnimatePresence} from "framer-motion";
import Background from "./components/Background";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import ScrollTop from "./components/ScrollTop";
import Preloader from "./sections/Preloader";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import TechMarquee from "./sections/TechMarquee";
import About from "./sections/About";
import Expertise from "./sections/Expertise";
import Experience from "./sections/Experience";
import Work from "./sections/Work";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <Background />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Expertise />
        <Experience />
        <Work />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
