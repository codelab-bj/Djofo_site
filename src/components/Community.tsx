
import "../styles/style.css"

const Community = () => {
    return(
        <section className="community-section">
            <div className="container">
            <h2 className="section-title">Rejoignez notre communauté</h2>
            <div className="community-card">
                <div className="community-grid">
                <div className="community-benefits">
                    <h3 className="community-subtitle">Pourquoi rejoindre ?</h3>
                    <ul className="benefits-list">
                    <li className="benefit-item">
                        <div className="check-icon">✓</div>
                        <p>Entraide et partage d'expériences</p>
                    </li>
                    <li className="benefit-item">
                        <div className="check-icon">✓</div>
                        <p>Alertes en temps réel sur les menaces</p>
                    </li>
                    <li className="benefit-item">
                        <div className="check-icon">✓</div>
                        <p>Accès à des ressources exclusives</p>
                    </li>
                    <li className="benefit-item">
                        <div className="check-icon">✓</div>
                        <p>Webinaires et sessions de questions-réponses</p>
                    </li>
                    </ul>
                </div>
                <div className="newsletter-form">
                    <h3 className="community-subtitle">
                    Inscrivez-vous à la newsletter
                    </h3>
                    <p className="newsletter-description">
                    Recevez les dernières actualités sur la cybersécurité au Bénin
                    et en Afrique de l'Ouest.
                    </p>
                    <form className="form">
                    <div className="input-group">
                        <input
                        type="email"
                        className="email-input"
                        placeholder="Votre adresse email"
                        />
                        <button type="submit" className="btn btn-secondary">
                        S'abonner
                        </button>
                    </div>
                    <p className="privacy-note">
                        Nous respectons votre vie privée. Désabonnez-vous à tout
                        moment.
                    </p>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Community;