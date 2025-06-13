import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateForm = () => {
    if (!formData.name.trim()) {
      throw new Error(t("contact.form.errors.required"));
    }
    if (!formData.email.trim()) {
      throw new Error(t("contact.form.errors.required"));
    }
    if (!formData.email.includes("@")) {
      throw new Error(t("contact.form.errors.invalidEmail"));
    }
    if (!formData.message.trim()) {
      throw new Error(t("contact.form.errors.required"));
    }
    if (formData.message.length < 10) {
      throw new Error(t("contact.form.errors.messageTooShort"));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      validateForm();

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: "", //TODO: Add email address
        message: formData.message,
        subject: "Nytt meddelande från hemsidan",
      };

      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      alert(t("contact.form.success"));
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("Failed to fetch")) {
          setError(t("contact.form.errors.networkError"));
        } else {
          setError(error.message);
        }
      } else {
        setError(t("contact.form.errors.unexpected"));
      }
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError(null);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>{t("contact.hero.title")}</h1>
        <p className="subtitle">{t("contact.hero.subtitle")}</p>
      </section>

      <section className="contact-content">
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

        {/* <div className="contact-form"> 
          <h2>{t('contact.form.title')}</h2>
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.form.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contact.form.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.form.message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                disabled={isSubmitting}
              />
            </div>
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
            </button>
          </form>
        </div>*/}
      </section>
    </div>
  );
};

export default Contact;
