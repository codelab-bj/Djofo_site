import {ChevronRight} from "lucide-react";
import Image1 from '../images/1.png';
import Image2 from '../images/2.png';
import Image3 from '../images/3.png';
import '../styles/style.css';
       
const Latest_Content = () => {

    // Simulated latest content data
  const latestContent = [
    {
      type: "article",
      title: "Comment reconnaître les fausses nouvelles en ligne",
      category: "Désinformation",
      image: Image1,
      date: "15 Mai 2025",
    },
    {
      type: "investigation",
      title: "Analyse d'une arnaque Mobile Money à Cotonou",
      category: "Arnaque Financière",
      image: Image2,
      date: "10 Mai 2025",
    },
    {
      type: "video",
      title: "5 règles pour sécuriser votre compte Facebook",
      category: "Protection de Compte",
      image: Image3,
      date: "5 Mai 2025",
    },
  ];



    return(
       <section className="latest-content" id="latest-content">
          <div className="container">
            <h2 className="section-title">Contenu Récent</h2>
            <div className="content-grid">
              {latestContent.map((content, index) => (
                <div key={index} className="content-card">
                  <div className="content-image">
                    <img src={content.image} alt={content.title} />
                    <div className="content-badge">
                      {content.type === "article"
                        ? "Article"
                        : content.type === "investigation"
                        ? "Enquête"
                        : "Vidéo"}
                    </div>
                  </div>
                  <div className="content-body">
                    <div className="content-category">{content.category}</div>
                    <h3 className="content-title">{content.title}</h3>
                    <p className="content-date">{content.date}</p>
                    <a href="/content" className="read-more-link">
                      Lire la suite
                      <ChevronRight className="icon-small" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="content-more">
              <a href="/content" className="btn btn-primary">
                Voir tout notre contenu
              </a>
            </div>
          </div>
        </section>

            )
        }


export default Latest_Content;