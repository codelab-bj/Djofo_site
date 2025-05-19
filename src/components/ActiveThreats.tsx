import {AlertTriangle} from 'lucide-react';
import "../styles/style.css"

const ActivityThreat = () => {

  const activeThreats = [
    {
      title: "Alerte: Campagne de phishing ciblant les utilisateurs MTN",
      description:
        "Une nouvelle vague d'emails frauduleux prétendant provenir de MTN Bénin circule actuellement. Ne cliquez pas sur les liens demandant de mettre à jour vos informations.",
    },
    {
      title: "Arnaque WhatsApp: Fausse promotion de recharge mobile",
      description:
        "Des messages frauduleux offrant des recharges téléphoniques gratuites se propagent. Ne partagez jamais vos codes ou informations personnelles.",
    },
    {
      title: "Attention: Faux site de l'administration fiscale",
      description:
        "Un site imitant le portail des impôts du Bénin circule. Vérifiez toujours l'URL officielle avant de saisir vos identifiants.",
    },
  ];

  return(
    <section className="threats-section" id="alerts">
          <div className="container">
            <h2 className="section-title">Alertes Actuelles</h2>
            <div className="threats-grid">
              {activeThreats.map((threat, index) => (
                <div key={index} className="threat-card">
                  <div className="threat-content">
                    <div className="threat-icon">
                      <AlertTriangle className="icon-warning" />
                    </div>
                    <div className="threat-body">
                      <h3 className="threat-title">{threat.title}</h3>
                      <p className="threat-description">{threat.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default ActivityThreat;