import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitch from "./components/LanguageSwitch";
import { useTranslation } from "./hooks/useTranslation";
import { useState } from "react";

function AppContent() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <Router basename="/bebosh-salon/">
      <div className="App">
        {/* Header */}
        <header className="header">
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`hamburger ${mobileOpen ? "open" : ""}`}></span>
          </button>
          <nav className={`nav-links ${mobileOpen ? "mobile-open" : ""}`}>
            <button onClick={() => scrollToSection('home')}>{t("nav.home")}</button>
            <button onClick={() => scrollToSection('about')}>{t("nav.about")}</button>
            <button onClick={() => scrollToSection('contact')}>{t("nav.contact")}</button>
          </nav>

          <div className="logo">
            <button onClick={() => scrollToSection('home')}>{t("home.hero.title")}</button>
          </div>

          <div className="language-switch-container">
            <LanguageSwitch />
          </div>
        </header>

        {/* Home Section */}
        <section id="home" className="big-title">
          <h2 className="big-heading">
            {t("home.hero.title")} <br />
            <span className="italic">{t("home.hero.subtitle")}</span>
          </h2>

          <div>
            <p className="big-text">{t("home.hero.description")}</p>
            <p>{t("home.hero.subDescription")}</p>

            <a
              href="https://www.bokadirekt.se/places/bebosh-barbershop-59276"
              className="btn big-cta book-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("home.hero.cta")}
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
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

        {/* About Section */}
        <section id="about" className="about-page">
          <div className="about-hero">
            <h1>{t("about.hero.title")}</h1>
            <p className="subtitle">{t("about.hero.subtitle")}</p>
          </div>

          <div className="about-content">
            <div className="story">
              <div className="story-content-wrapper">
                <div className="story-text">
                  <h2 className="story-title">{t("about.story.title")}</h2>
                  <p className="story-content">{t("about.story.content")}</p>
                </div>
                <div className="story-image">
                  <img 
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                    alt="Modern men's barbershop interior"
                  />
                </div>
              </div>
            </div>

            <div className="values">
              <h2>{t("about.values.title")}</h2>
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon">
                    <img 
                      src="https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                      alt="Professional men's haircut"
                    />
                  </div>
                  <h3>{t("about.values.excellence.title")}</h3>
                  <p>{t("about.values.excellence.content")}</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <img 
                      src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                      alt="Beard grooming service"
                    />
                  </div>
                  <h3>{t("about.values.innovation.title")}</h3>
                  <p>{t("about.values.innovation.content")}</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <img 
                      src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                      alt="Men's facial treatment"
                    />
                  </div>
                  <h3>{t("about.values.customerCare.title")}</h3>
                  <p>{t("about.values.customerCare.content")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-page">
          <div className="contact-hero">
            <h1>{t("contact.hero.title")}</h1>
            <p className="subtitle">{t("contact.hero.subtitle")}</p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <h2>{t("contact.info.title")}</h2>
              <div className="info-item">
                <h3>{t("contact.info.address")}</h3>
                <p>Andra Långgatan 30 b, 413 27 Göteborg</p>
              </div>
              <div className="info-item">
                <h3>{t("contact.info.phone")}</h3>
                <p>
                  <a href="tel:+46732622704" className="contact-link">
                    +46 732622704
                  </a>
                </p>
              </div>
              <div className="info-item">
                <h3>{t("contact.info.email")}</h3>
                <p>
                  <a
                    href="mailto:Mohamadahmad199984@gmail.com"
                    className="contact-link"
                  >
                    Mohamadahmad199984@gmail.com
                    <br/>
                    salonbebosh@gmail.com
                  </a>
                </p>
              </div>
              <div className="info-item">
                <h3>{t("contact.info.hours")}</h3>
                <p>{t("contact.info.hoursContent.weekdays")}</p>
                <p>{t("contact.info.hoursContent.saturday")}</p>
                <p>{t("contact.info.hoursContent.sunday")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Banner */}
        <section className="social-banner">
          <h2>{t("home.social.title")}</h2>
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
