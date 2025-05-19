import '../styles/style2.css'
import ComingSoon from './ComingSoon';

const Training = () => {
    return(
        <section className="training-section">
          <div className="container">
            <div className="training-card">
              <div className="training-content">
                <div className="training-text">
                  <h2 className="training-title">Formez-vous gratuitement</h2>
                  <p className="training-description">
                    Accédez à nos modules de formation sur la protection des
                    données, la détection des fausses nouvelles, la sécurité
                    mobile, et bien plus encore.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Découvrir nos formations
                  </a>
                </div>
                <div className="training-image">
                  <img
                    src={"/api/placeholder/600/400"}
                    alt="Formation cybersécurité"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Training;