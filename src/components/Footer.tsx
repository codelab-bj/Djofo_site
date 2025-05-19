import React, { useState, useEffect } from "react";
import logoImage2 from '../images/Logo2.png'; // Update with your actual logo path
import '../styles/Footer.css'

const Footer = () => {
  return(
    <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="footer-logo">
                <img src={logoImage2} className="logo-icon" alt="Cybersécurité" />
                <span className="footer-title">Djofo</span>
              </div>
              <p className="footer-description">
                Sensibiliser, informer et former aux risques liés à l'utilisation
                d'Internet.
              </p>
              <div className="socials-links">
                <a href="#" className="socials-link">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="social-icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="socials-link">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="social-icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v-.468c0-2.456.011-2.784.058-3.807-.045-.975-.207-1.504-.344-1.857a3.1 3.1 0 00-.748-1.15 3.1 3.1 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.882 0 1.44 1.44 0 012.882 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="socials-link">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="social-icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-links-column">
              <h4 className="footer-heading">Ressources</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Articles</a></li>
                <li><a href="#" className="footer-link">Formations</a></li>
                <li><a href="#" className="footer-link">Enquêtes</a></li>
                <li><a href="#" className="footer-link">Alertes</a></li>
                <li><a href="#" className="footer-link">Podcasts</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4 className="footer-heading">À propos</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Notre mission</a></li>
                <li><a href="#" className="footer-link">Partenaires</a></li>
                <li><a href="#" className="footer-link">Équipe</a></li>
                <li><a href="#" className="footer-link">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Aide</a></li>
                <li><a href="#" className="footer-link">Confidentialité</a></li>
                <li><a href="#" className="footer-link">Conditions d'utilisation</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright">© 2025 Djofo. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
 )
}

export default Footer;
