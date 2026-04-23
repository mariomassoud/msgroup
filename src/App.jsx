import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Affiliates from "./components/Affiliates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  useEffect(() => {
    // Remove #hash from URL
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // Always scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Affiliates />
      <Contact />
      <Footer />
    </>
  );
}