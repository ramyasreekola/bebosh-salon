import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo">Glamour Salon</div>
        <nav className="nav-links">
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <div className="burger" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="big-title">
        <h2 className="big-heading">
          Glamour Saloon <br />
          <span className="italic">Göteborg</span>
        </h2>

        <div>
          <p className="big-text">
            Experience luxury, style, and the perfect look crafted just for you.
          </p>
          <p>
            We are the best saloon for your favourite hairstyles and hair
            services. We give you the personal touch you are looking for.
          </p>

          <a className="btn big-cta" href="#">
            Contact Us
            <svg fill="none" viewBox="0 0 24 24" stroke-width="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      <section className="hero-grid">
        <img
          src="https://i.pinimg.com/736x/dd/21/db/dd21db91c8e5c5f96c9d9feee3d1e66b.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/736x/56/f4/5a/56f45a02f7d6141d35226f7544336b25.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/736x/1a/74/a4/1a74a429bb63d1b0b1a712cef7e289a9.jpg"
          alt=""
        />
      </section>

      {/* Social Media Banner */}
      <section className="social-banner">
        <h2>Follow Us</h2>
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

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@glamoursalon.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Main Street, Cityville</p>
      </section>
    </div>
  );
}

export default App;
