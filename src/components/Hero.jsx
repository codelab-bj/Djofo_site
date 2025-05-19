import logoImage from '../images/Logo.png';
import '../styles/Hero.css';



const Hero = () => {
    return (
      <div className="hero-section">
        <div className="hero-overlay">
          <img src={logoImage} alt="Cybersécurité" className="hero-background" />
          <div className="overlay-dark"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Protégez-vous en ligne</h1>
          <p className="hero-text">
            Informez-vous, formez-vous et protégez-vous contre les risques
            numériques adaptés au contexte béninois et ouest-africain.
          </p>
          <div className="hero-buttons">
            {/* <a href="#" className="btn btn-primary">
              Explorer nos ressources
            </a> */}
            <a href="/report" className="btn btn-secondary">
              Signaler un incident
            </a>
          </div>
        </div>
      </div>
    );
  };

  export default Hero;