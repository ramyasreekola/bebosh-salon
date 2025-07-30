//import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
//import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t } = useTranslation();

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

      </section>
    </div>
  );
};

export default Contact;
