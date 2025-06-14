import { useLanguage } from '../context/LanguageContext';
import { useState, useRef, useEffect } from 'react';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: 'en' | 'sv') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const getLanguageDisplay = (lang: string) => {
    if (window.innerWidth <= 768) {
      return lang.toUpperCase();
    }
    return lang === "en" ? "English" : "Svenska";
  };

  return (
    <div className="language-switch-container" ref={dropdownRef}>
      <button
        className="language-button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        {getLanguageDisplay(language)}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={isOpen ? "rotate" : ""}
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="language-dropdown">
          <button
            className={`language-option ${language === "en" ? "active" : ""}`}
            onClick={() => handleLanguageChange("en")}
          >
            {getLanguageDisplay("en")}
          </button>
          <button
            className={`language-option ${language === "sv" ? "active" : ""}`}
            onClick={() => handleLanguageChange("sv")}
          >
            {getLanguageDisplay("sv")}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch; 