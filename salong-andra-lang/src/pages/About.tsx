import { useTranslation } from '../hooks/useTranslation';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>{t('about.hero.title')}</h1>
        <p className="subtitle">{t('about.hero.subtitle')}</p>
      </section>

      <section className="about-content">
        <div className="story">
          <div className="story-content-wrapper">
            <div className="story-text">
              <h2 className="story-title">{t('about.story.title')}</h2>
              <p className="story-content">{t('about.story.content')}</p>
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
          <h2>{t('about.values.title')}</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <img 
                  src="https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                  alt="Professional men's haircut"
                />
              </div>
              <h3>{t('about.values.excellence.title')}</h3>
              <p>{t('about.values.excellence.content')}</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <img 
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                  alt="Beard grooming service"
                />
              </div>
              <h3>{t('about.values.innovation.title')}</h3>
              <p>{t('about.values.innovation.content')}</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <img 
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Men's facial treatment"
                />
              </div>
              <h3>{t('about.values.customerCare.title')}</h3>
              <p>{t('about.values.customerCare.content')}</p>
            </div>
          </div>
        </div>

        <div className="team">
          <h2>{t('about.team.title')}</h2>
          <div className="team-content">
            <p>{t('about.team.content')}</p>
            <div className="team-gallery">
              <img 
                src="https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="Professional barber"
              />
              <img 
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Beard specialist"
              />
              <img 
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Men's grooming expert"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 