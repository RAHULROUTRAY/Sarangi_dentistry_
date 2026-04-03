import { useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeAbout from "./components/HomeAbout";
import Page3 from "./components/Page3";
import Page2 from "./components/Page2";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import AboutPage from "./components/AboutPageNew";
import Procedures from "./components/Procedures";
import ProcedureDetail from "./components/ProcedureDetail";
import ContactPage from "./components/ContactPage";
import BookAppointmentPage from "./components/BookAppointmentPage";
import CertificationPage from "./components/CertificationPage";
import GalleryPage from "./components/GalleryPage";
import CustomCursor from "./components/CustomCursor";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    document.documentElement.style.scrollBehavior = "auto";

    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 10);

    const stTimer = setTimeout(() => {
      document.documentElement.style.scrollBehavior = "";
      ScrollTrigger.refresh(true);
    }, 150);

    return () => clearTimeout(stTimer);
  }, [pathname]);

  return null;
}

function App() {
  const mainRef = useRef(null);

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />

      <main ref={mainRef} id="main" className="relative w-full">
        <Routes>
          <Route
            path="/"
            element={
              <div 
                className="bg-[#f8fffa] bg-fixed bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/sketch%20it%20-sarangi.png')" }}
              >
                <Hero />
                <HomeAbout />
                <Page3 />
                <Page2 />
              </div>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Page3 />} />
          <Route path="/procedure" element={<Procedures />} />
          <Route path="/procedure/:id" element={<ProcedureDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-appointment" element={<BookAppointmentPage />} />
          <Route path="/certification" element={<CertificationPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
