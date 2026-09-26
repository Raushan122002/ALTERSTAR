import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Quality from "./pages/Quality";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Product tabs are selected by hash, so a hash that starts with #tab- must not
// be treated as a scroll target. Everything else jumps to its anchor.
function ScrollManager() {
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    if (hash && hash.startsWith("#tab-")) return;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 60);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, state]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollManager />
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
          <Route path="/quality" element={<PageTransition><Quality /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
