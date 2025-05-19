// // src/components/Navbar.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md p-4 flex justify-between">
//       <Link to="/" className="font-bold text-xl">Cybersecurity Platform</Link>
//       <ul className="flex space-x-4">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/report">Report Scam</Link></li>
//         <li><Link to="/content">Content Center</Link></li>
//         <li><Link to="/courses">Online Courses</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react'; // Assuming you're using lucide-react for icons
import logoImage2 from '../images/Logo2.png'; // Update with your actual logo path
import '../styles/Nav.css';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');
  
  // Set the current path when component mounts
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  
  // Function to check if a link is active
  const isActive = (path) => {
    return currentPath === path;
  };
  
  return (
    <>
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logoImage2} className="logo-icon" alt="Cybersécurité" />
            <span className="logo-text">Djofo</span>
          </div>
          <div className="nav-links">
            <a href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Accueil
            </a>
            <a href="/content" className={`nav-link ${isActive('/content') ? 'active' : ''}`}>Centre de contenu</a>
            <a href="/reportcourse" className={`nav-link ${isActive('/reportcourse') ? 'active' : ''}`}>Formation en ligne</a>
            <a href="/community" className={`nav-link ${isActive('/community') ? 'active' : ''}`}>Communauté</a>
            <a href="/investigation" className={`nav-link ${isActive('/investigation') ? 'active' : ''}`}>Enquêtes</a>
            <a href="/podcasts" className={`nav-link ${isActive('/podcasts') ? 'active' : ''}`}>Podcasts</a>
          </div>
          <div className="mobile-toggle">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="/" className={`mobile-link ${isActive('/') ? 'active' : ''}`}>
              Accueil
            </a>
            <a href="/content" className={`mobile-link ${isActive('/content') ? 'active' : ''}`}>Centre de contenu</a>
            <a href="/reportcourse" className={`mobile-link ${isActive('/reportcourse') ? 'active' : ''}`}>Formation en ligne</a>
            <a href="/community" className={`mobile-link ${isActive('/community') ? 'active' : ''}`}>Communauté</a>
            <a href="/investigation" className={`mobile-link ${isActive('/investigation') ? 'active' : ''}`}>Enquêtes</a>
            <a href="/podcasts" className={`mobile-link ${isActive('/podcasts') ? 'active' : ''}`}>Podcasts</a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;