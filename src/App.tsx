import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitch from "./components/LanguageSwitch";
import { useTranslation } from "./hooks/useTranslation";

function Home() {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Hero Section */}
      <section className="big-title">
        <h2 className="big-heading">
          {t('home.hero.title')} <br />
          <span className="italic">{t('home.hero.subtitle')}</span>
        </h2>

        <div>
          <p className="big-text">
            {t('home.hero.description')}
          </p>
          <p>
            {t('home.hero.subDescription')}
          </p>

          <Link to="https://www.bokadirekt.se/places/bebosh-barbershop-59276" className="btn big-cta book-btn">
            {t('home.hero.cta')}
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="hero-grid">
        <img
          src="https://i.pinimg.com/736x/1a/8a/d8/1a8ad8a81299dd60695edcd51aa0e592.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/736x/ab/60/cc/ab60ccd32db97868ec277f72ec47d78d.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/736x/e3/cb/60/e3cb60146e6202434a9e78952c2cea30.jpg"
          alt=""
        />
      </section>

      {/* Social Media Banner */}
      <section className="social-banner">
        <h2>{t('home.social.title')}</h2>
        <div className="social-links">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </section>
    </>
  );
}

function AppContent() {
  const { t } = useTranslation();

  return (
    <Router basename="/bebosh-salon/">
      <div className="App">
        {/* Header */}
        <header className="header">
          <nav className="nav-links">
            <Link to="/">{t('nav.home')}</Link>
            <Link to="/about">{t('nav.about')}</Link>
            <Link to="/contact">{t('nav.contact')}</Link>
          </nav>

          <div className="logo">
            <Link to="/">{t('home.hero.title')}</Link>
          </div>

          <div className="language-switch">
            <LanguageSwitch />
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
