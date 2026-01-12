import { useState, useEffect } from 'react';
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
  Twitter,
  Instagram,
  Linkedin,
  Github,
  TrendingDown,
  Users,
  Heart,
  RotateCcw,
  Share2
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Animation variants 
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

// Navbar Component
function Navbar({ scrolled, onGetStarted }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="logo">
        Loome<span className="logo-accent">é</span>
      </div>

      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#benefits">Benefits</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>

      <button className="nav-cta" onClick={onGetStarted}>
        Get Started
      </button>

      <button 
        className="mobile-menu-btn" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: '#FFFBF1',
              padding: '2rem',
              boxShadow: '0 10px 40px rgba(28,43,57,0.1)'
            }}
          >
            {['Features', 'How It Works', 'Benefits', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                  display: 'block',
                  padding: '1rem 0',
                  color: '#1C2B39',
                  textDecoration: 'none',
                  fontWeight: 500,
                  borderBottom: '1px solid rgba(28,43,57,0.1)'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              className="btn-primary"
              onClick={() => {
                setMobileMenuOpen(false);
                onGetStarted();
              }}
              style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Hero Section
function HeroSection({ onGetStarted }) {
  return (
    <section className="hero">
      <div className="hero-bg-shapes">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="hero-badge" variants={fadeInUp}>
            <span className="badge-dot"></span>
            AI-Powered Virtual Fitting
          </motion.div>

          <motion.h1 className="hero-title" variants={fadeInUp}>
            <span className="hero-title-line">Try Before</span>
            <span className="hero-title-line">
              You <span className="hero-title-highlight">Buy</span>
            </span>
          </motion.h1>

          <motion.p className="hero-description" variants={fadeInUp}>
            Experience the future of online shopping with AR-powered virtual try-on.
            See exactly how clothes fit your body before making a purchase.
          </motion.p>

          <motion.div className="hero-buttons" variants={fadeInUp}>
            <button className="btn-primary" onClick={onGetStarted}>
              Get Started Free
              <ArrowRight size={18} />
            </button>
            <a href="#how-it-works" className="btn-secondary">
              <Play size={18} />
              See How It Works
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={fadeInUp}>
            <div className="stat-item">
              <div className="stat-number">75%</div>
              <div className="stat-label">Reduced Returns</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2M+</div>
              <div className="stat-label">Happy Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Fit Accuracy</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="phone-notch"></div>
              <div className="phone-content">
                <div className="phone-header">
                  <div className="phone-logo">Loomeé</div>
                  <div className="phone-avatar"></div>
                </div>
                <div className="phone-ar-view">
                  <div className="ar-silhouette">
                    <div className="ar-overlay-clothes"></div>
                  </div>
                  <div className="ar-badge">
                    <span className="ar-badge-dot"></span>
                    AR Active
                  </div>
                </div>
                <div className="phone-controls">
                  <div className="control-btn">
                    <Camera size={20} />
                  </div>
                  <div className="control-btn active">
                    <RotateCcw size={20} />
                  </div>
                  <div className="control-btn">
                    <Share2 size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="floating-card floating-card-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="floating-card-icon">
              <Sparkles size={20} />
            </div>
            <div className="floating-card-text">Perfect Fit</div>
            <div className="floating-card-sub">Size M Recommended</div>
          </motion.div>

          <motion.div
            className="floating-card floating-card-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="floating-card-icon">
              <Heart size={20} />
            </div>
            <div className="floating-card-text">Style Match</div>
            <div className="floating-card-sub">95% compatibility</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: <Camera size={28} />,
      title: 'AR Virtual Try-On',
      description: 'See clothes on your body in real-time using advanced augmented reality technology.'
    },
    {
      icon: <Scan size={28} />,
      title: 'Body Measurement',
      description: 'AI-powered body scanning captures accurate measurements for perfect sizing recommendations.'
    },
    {
      icon: <Ruler size={28} />,
      title: 'Smart Size Matching',
      description: 'Get precise size recommendations based on your unique body measurements and preferences.'
    },
    {
      icon: <Sparkles size={28} />,
      title: 'AI Styling Assistant',
      description: 'Receive personalized outfit suggestions based on your style DNA and preferences.'
    },
    {
      icon: <ShoppingBag size={28} />,
      title: 'Seamless Shopping',
      description: 'Browse, try, and buy from multiple brands all within one intuitive application.'
    },
    {
      icon: <Palette size={28} />,
      title: 'Color Matching',
      description: 'Find colors that complement your skin tone and existing wardrobe pieces.'
    }
  ];

  return (
    <section id="features" className="features">
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.span className="section-eyebrow" variants={fadeInUp}>
          Features
        </motion.span>
        <motion.h2 className="section-title" variants={fadeInUp}>
          Everything You Need for the Perfect Fit
        </motion.h2>
        <motion.p className="section-description" variants={fadeInUp}>
          Loomeé combines cutting-edge AR technology with AI-powered recommendations
          to transform your online shopping experience.
        </motion.p>
      </motion.div>

      <motion.div
        className="features-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={staggerContainer}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            variants={scaleIn}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    { number: 1, title: 'Download & Sign Up', description: 'Get the app and create your profile in seconds' },
    { number: 2, title: 'Capture Your Body', description: 'Take a quick photo for accurate measurements' },
    { number: 3, title: 'Browse & Try On', description: 'Explore clothes and see them on your avatar' },
    { number: 4, title: 'Shop with Confidence', description: 'Purchase knowing exactly how items will fit' }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.span className="section-eyebrow" variants={fadeInUp}>
          How It Works
        </motion.span>
        <motion.h2 className="section-title" variants={fadeInUp}>
          Four Simple Steps to Perfect Fit
        </motion.h2>
        <motion.p className="section-description" variants={fadeInUp}>
          Getting started with Loomeé is quick and easy. Follow these steps to
          revolutionize your online shopping experience.
        </motion.p>
      </motion.div>

      <motion.div
        className="steps-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={staggerContainer}
      >
        <div className="steps-line"></div>
        {steps.map((step, index) => (
          <motion.div key={index} className="step-card" variants={fadeInUp}>
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// Benefits Section
function BenefitsSection() {
  const benefits = [
    { title: 'Reduce Return Rates', description: 'Up to 75% fewer returns means less hassle and better sustainability.' },
    { title: 'Save Time Shopping', description: 'No more ordering multiple sizes. Get it right the first time.' },
    { title: 'Boost Confidence', description: 'Know exactly how clothes will look before you commit to buying.' },
    { title: 'Personalized Experience', description: "AI learns your preferences to suggest styles you'll love." }
  ];

  return (
    <section id="benefits" className="benefits">
      <div className="benefits-grid">
        <motion.div
          className="benefits-visual"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          
        <div className="benefits-main-image">
          <img
            src="/benefits-preview.jpg"
            alt="Virtual try-on preview"
            className="benefits-image"
          />
        </div>


          <motion.div
            className="benefits-floating-stat stat-1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="stat-icon">
              <TrendingDown size={22} />
            </div>
            <div className="stat-value">-75%</div>
            <div className="stat-desc">Return Rate</div>
          </motion.div>

          <motion.div
            className="benefits-floating-stat stat-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)' }}>
              <Users size={22} />
            </div>
            <div className="stat-value">2M+</div>
            <div className="stat-desc">Happy Users</div>
          </motion.div>
        </motion.div>

        <motion.div
          className="benefits-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span className="section-eyebrow" variants={fadeInUp}>
            Benefits
          </motion.span>
          <motion.h2 className="section-title" variants={fadeInUp}>
            Why Shoppers Love Loomeé
          </motion.h2>
          <motion.p className="section-description" variants={fadeInUp}>
            Join millions of users who have transformed their online shopping
            experience with our AI-powered virtual fitting solution.
          </motion.p>

          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <motion.li key={index} className="benefit-item" variants={fadeInUp}>
                <div className="benefit-check">
                  <Check size={16} />
                </div>
                <div className="benefit-text">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection({ onSelectPlan }) {
  const plans = [
    {
      name: 'Free',
      description: 'Perfect for trying out Loomeé',
      price: '$0',
      period: 'forever',
      features: ['5 virtual try-ons per month', 'Basic body measurements', 'Standard clothing catalog', 'Size recommendations', 'Email support'],
      featured: false,
      cta: 'Start Free'
    },
    {
      name: 'Pro',
      description: 'For fashion enthusiasts',
      price: '$9.99',
      period: '/month',
      features: ['Unlimited virtual try-ons', 'Advanced body scanning', 'Full clothing catalog access', 'AI style recommendations', 'Priority support', 'Save favorite outfits', 'Multiple body profiles'],
      featured: true,
      cta: 'Go Pro',
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      description: 'For brands and retailers',
      price: 'Custom',
      period: 'per month',
      features: ['Everything in Pro', 'API integration', 'Custom branding', 'Analytics dashboard', 'Dedicated account manager', 'SLA guarantee', 'White-label solution'],
      featured: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.span className="section-eyebrow" variants={fadeInUp}>
          Pricing
        </motion.span>
        <motion.h2 className="section-title" variants={fadeInUp}>
          Choose Your Perfect Plan
        </motion.h2>
        <motion.p className="section-description" variants={fadeInUp}>
          Start free and upgrade as you grow. No hidden fees, cancel anytime.
        </motion.p>
      </motion.div>

      <motion.div
        className="pricing-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={staggerContainer}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`pricing-card ${plan.featured ? 'featured' : ''}`}
            variants={scaleIn}
          >
            {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
            <h3 className="pricing-name">{plan.name}</h3>
            <p className="pricing-description">{plan.description}</p>
            <div className="pricing-price">
              <span className="price-amount">{plan.price}</span>
              <span className="price-period">{plan.period}</span>
            </div>
            <ul className="pricing-features">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="pricing-feature">
                  <span className="feature-check">
                    <Check size={12} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="pricing-cta" onClick={() => onSelectPlan(plan.name)}>
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// CTA Section
function CTASection({ onGetStarted }) {
  return (
    <section className="cta-section">
      <motion.div
        className="cta-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="cta-bg-pattern"></div>
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Shopping Experience?</h2>
          <p className="cta-description">
            Join over 2 million users who shop with confidence using Loomeé's
            AI-powered virtual fitting technology.
          </p>
          <div className="cta-buttons">
            <button className="cta-btn-primary" onClick={onGetStarted}>
              Get Started Free
              <ArrowRight size={18} />
            </button>
            <a href="#pricing" className="cta-btn-secondary">
              View Pricing
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">Loomeé</div>
          <p className="footer-tagline">
            Transforming online fashion shopping with AI-powered virtual try-on technology.
            Shop with confidence, reduce returns, and find your perfect fit.
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com/loomeeai?utm_source=qr&igsh=aDdlb2g5a2RmajY0" className="social-link"><Instagram size={18} /></a>
            <a href="www.linkedin.com/in/loomee-vto-a90aba3a4" className="social-link"><Linkedin size={18} /></a>
            <a href="https://github.com/M-Palliyaguru/LoomeeLanding" className="social-link"><Github size={18} /></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Product</h4>
          <ul className="footer-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Integrations</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">GDPR</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2025 Loomeé. All rights reserved. Team CS-123 | IIT
        </p>
        <div className="footer-legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

// Pricing Modal
function PricingModal({ isOpen, onClose, selectedPlan }) {
  if (!isOpen) return null;

  const planDetails = {
    Free: {
      title: 'Free Plan',
      description: 'Start your journey with Loomeé',
      features: ['5 virtual try-ons per month', 'Basic body measurements', 'Standard catalog access'],
      buttonText: 'Create Free Account'
    },
    Pro: {
      title: 'Pro Plan',
      description: 'Unlock the full Loomeé experience',
      features: ['Unlimited virtual try-ons', 'Advanced AI recommendations', 'Priority support'],
      buttonText: 'Start Pro Trial'
    },
    Enterprise: {
      title: 'Enterprise Plan',
      description: 'Custom solutions for your business',
      features: ['White-label solution', 'API integration', 'Dedicated support'],
      buttonText: 'Contact Sales'
    }
  };

  const plan = planDetails[selectedPlan] || planDetails.Free;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>

          <div className="modal-icon">
            <Sparkles size={32} />
          </div>

          <h2 className="modal-title">{plan.title}</h2>
          <p className="modal-description">{plan.description}</p>

          <ul className="modal-features">
            {plan.features.map((feature, index) => (
              <li key={index} className="modal-feature">
                <span className="modal-feature-check">
                  <Check size={14} />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <button className="modal-btn" onClick={() => alert('Redirecting to sign up...')}>
            {plan.buttonText}
            <ArrowRight size={18} />
          </button>

          <p className="modal-note">No credit card required • Cancel anytime</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Main App
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Free');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    setSelectedPlan('Free');
    setModalOpen(true);
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  return (
    <div className="app">
      <Navbar scrolled={scrolled} onGetStarted={handleGetStarted} />
      
      <main>
        <HeroSection onGetStarted={handleGetStarted} />
        <FeaturesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <PricingSection onSelectPlan={handleSelectPlan} />
        <CTASection onGetStarted={handleGetStarted} />
      </main>

      <Footer />

      <PricingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}

export default App;
