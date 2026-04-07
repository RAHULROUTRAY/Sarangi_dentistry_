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
import { ScrollVelocityContainer, ScrollVelocityRow } from "./components/ScrollVelocity";

function ScrollToTop() {
  const { pathname } = useLocation();
  const isFirstMount = useRef(true);

  useLayoutEffect(() => {
    // 1. On initial mount (like a page refresh), we do NOT manually scroll to top.
    // We let the browser's native scrollRestoration handle returning the user to their previous position.
    if (isFirstMount.current) {
      isFirstMount.current = false;
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
      return;
    }

    // 2. On subsequent route changes (clicking a link), we scroll to the top artificially.
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
              <div className="bg-[#f8fffa]">
                <Hero />
                <HomeAbout />
                
                {/* Scroll Based Velocity Animation */}
                <div className="relative flex w-full mt-10 mb-20 flex-col items-center justify-center overflow-hidden text-black">
                  <ScrollVelocityContainer className="text-3xl sm:text-4xl md:text-7xl font-black uppercase tracking-[-0.02em] md:leading-[5rem]">
                    <ScrollVelocityRow baseVelocity={1} direction={1}>
                      Premium Dental Care • Modern Technology •
                    </ScrollVelocityRow>
                    <ScrollVelocityRow baseVelocity={1.5} direction={-1}>
                      Radiant Smiles • Artistic Rejuvenation •
                    </ScrollVelocityRow>
                  </ScrollVelocityContainer>
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#f8fffa] to-transparent"></div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#f8fffa] to-transparent"></div>
                </div>

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
