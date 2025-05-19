import { ChevronRight, Shield, BookOpen, FileText,MessageCircle } from "lucide-react";
import "../styles/Mission.css"

const Mission = () => {
    return (
      <section className="mission-section">
          <div className="container">
            <h2 className="section-title">Notre Mission</h2>
            <div className="mission-grid">
              <div className="mission-text">
                <p>
                  Notre plateforme est dédiée à la sensibilisation, l'information
                  et la formation aux divers risques liés à l'utilisation
                  d'Internet, adaptée au contexte béninois et ouest-africain.
                </p>
                <div className="read-more">
                  {/* <a href="#" className="read-more-link">
                    En savoir plus sur nous
                    <ChevronRight className="icon-small" />
                  </a> */}
                </div>
              </div>
              <div className="features-grid">
                <div className="feature-card color-indigo">
                  <Shield className="feature-icon" />
                  <h3 className="feature-title">Protection</h3>
                  <p className="feature-text">Sécurité en ligne</p>
                </div>
                <div className="feature-card color-blue">
                  <BookOpen className="feature-icon" />
                  <h3 className="feature-title">Éducation</h3>
                  <p className="feature-text">Formation pratique</p>
                </div>
                <div className="feature-card color-green">
                  <FileText className="feature-icon" />
                  <h3 className="feature-title">Information</h3>
                  <p className="feature-text">Contenu adapté</p>
                </div>
                <div className="feature-card color-yellow">
                  <MessageCircle className="feature-icon" />
                  <h3 className="feature-title">Communauté</h3>
                  <p className="feature-text">Entraide locale</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }

export default Mission;
