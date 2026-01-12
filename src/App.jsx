import { useState, useEffect } from 'react';
import './App.css';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  Scan,
  Sparkles,
  ShoppingBag,
  Ruler,
  Palette,
  ArrowRight,
  Check,
  Play,
  Menu,
  X,
  Instagram,
  Linkedin,
  Github,
  TrendingDown,
  Users,
  Heart,
  RotateCcw,
  Share2
} from 'lucide-react';

/* =====================
   Animation variants
===================== */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

/* =====================
   Components
===================== */

// Navbar
function Navbar({ scrolled, onGetStarted }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="logo">Loome<span className="logo-accent">é</span></div>

      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#benefits">Benefits</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>

      <button className="nav-cta" onClick={onGetStarted}>Get Started</button>

      <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            {['Features', 'How It Works', 'Benefits', 'Pricing'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Hero
function HeroSection({ onGetStarted }) {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1 variants={fadeInUp}>Try Before You Buy</motion.h1>
        <motion.p variants={fadeInUp}>
          AI-powered AR virtual fitting for confident shopping.
        </motion.p>
        <motion.button className="btn-primary" onClick={onGetStarted} variants={fadeInUp}>
          Get Started <ArrowRight size={16} />
        </motion.button>
      </motion.div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Loomeé. All rights reserved.</p>
      <div className="footer-social">
        <a href="https://www.instagram.com/loomeeai"><Instagram /></a>
        <a href="https://www.linkedin.com"><Linkedin /></a>
        <a href="https://github.com/M-Palliyaguru/LoomeeLanding"><Github /></a>
      </div>
    </footer>
  );
}

/* =====================
   App
===================== */
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app">
      <Navbar scrolled={scrolled} onGetStarted={() => {}} />
      <HeroSection onGetStarted={() => {}} />
      <Footer />
    </div>
  );
}
