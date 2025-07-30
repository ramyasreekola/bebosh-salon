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
      element.scrollIntoView({ behavior: "smooth" });
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
            <button onClick={() => scrollToSection("home")}>
              {t("nav.home")}
            </button>
            <button onClick={() => scrollToSection("prices")}>
              {t("nav.prices") || "Prices"}
            </button>
            <button onClick={() => scrollToSection("about")}>
              {t("nav.about")}
            </button>
            <button onClick={() => scrollToSection("contact")}>
              {t("nav.contact")}
            </button>
          </nav>

          <div className="logo">
            <button onClick={() => scrollToSection("home")}>
              {t("home.hero.title")}
            </button>
          </div>

          <div className="language-switch-container">
            <LanguageSwitch />
          </div>
        </header>

        {/* Home Section */}
        <section id="home" className="big-title">
          <div className="home-logo">
            <img src="/bebosh-salon/images/beboshlogo.png" alt="Bebosh Logo" />
          </div>

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
          <img src="/bebosh-salon/images/bebosh-1.jpeg" alt="Salon 1" />
          <img src="/bebosh-salon/images/bebosh-2.jpeg" alt="Salon 2" />
          <img src="/bebosh-salon/images/bebosh-3.jpeg" alt="Salon 3" />
        </section>

        {/* Price List Section */}
        <section id="prices" className="price-list-section">
          <div className="price-list-container">
            <h2>{t("prices.title")}</h2>
            <div className="price-list-text">
              <p>{t("prices.subtitle")}</p>
            </div>
            <a
              href="https://www.bokadirekt.se/places/bebosh-barbershop-59276"
              className="btn big-cta book-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("prices.cta")}
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <div className="price-list-image">
              <img 
                src="/bebosh-salon/images/prislista.png" 
                alt="Bebosh Salon Price List" 
                loading="lazy"
              />
            </div>
          </div>
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
                    alt="Modern men's barbershop interior"
                    src="/bebosh-salon/images/history.jpeg"
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
                      src="/bebosh-salon/images/bebosh-4.jpeg"
                      alt="Professional men's haircut"
                    />
                  </div>
                  <h3>{t("about.values.excellence.title")}</h3>
                  <p>{t("about.values.excellence.content")}</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <img
                      src="/bebosh-salon/images/bebosh-5.jpeg"
                      alt="Beard grooming service"
                    />
                  </div>
                  <h3>{t("about.values.innovation.title")}</h3>
                  <p>{t("about.values.innovation.content")}</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <img
                      src="/bebosh-salon/images/bebosh-6.png"
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
                <a href="https://maps.app.goo.gl/nLWmpbHCuhxXth8H9" className="contact-link">Andra Långgatan 30 b, 413 27 Göteborg</a>
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
                <a href="mailto:Mohamadahmad199984@gmail.com" className="contact-link">
                Mohamadahmad199984@gmail.com
              </a>
              <a href="mailto:Beboshbarbershop@gmail.com" className="contact-link">
                Beboshbarbershop@gmail.com
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
              href="https://www.instagram.com/bebosh_barbershop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
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
