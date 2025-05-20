// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { ArrowLeft, Clock, Shield, AlertTriangle } from "lucide-react";
// import Footer from "../../components/Footer.tsx";
// import "./ContentDetail.css";
// import { fetchContentById } from "../../services/contentAPI.ts";
// import type { ContentItem } from "../../services/contentAPI.ts";

// export default function ContentDetail() {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const [content, setContent] = useState<ContentItem | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchContentDetail = async () => {
//       setIsLoading(true);
//       setError(null);

//       try {
//         if (!id) {
//           throw new Error('ID non spécifié');
//         }
        
//         // Using our new API service for fetching content by ID
//         const contentItem = await fetchContentById(id);
//         setContent(contentItem);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'Une erreur est survenue');
//         console.error('Error fetching content detail:', err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     if (id) {
//       fetchContentDetail();
//     }
//   }, [id]);

  
//   // Format date
//   const formatDate = (dateString: string): string => {
//     const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('fr-FR', options);
//   };

//   // Get category icon
//   const getCategoryIcon = () => {
//     if (!content) return null;
    
//     switch (content.category) {
//       case 'disinformation':
//         return <AlertTriangle className="category-icon" />;
//       case 'hacking':
//         return <Shield className="category-icon" />;
//       case 'financial':
//         return <Shield className="category-icon" />;
//       case 'phishing':
//         return <Shield className="category-icon" />;
//       case 'ransomware':
//         return <Shield className="category-icon" />;
//       case 'harassment':
//         return <Shield className="category-icon" />;
//       default:
//         return <Shield className="category-icon" />;
//     }
//   };

//   // Parse and render HTML content safely
//   const renderContent = () => {
//     if (!content) return null;
    
//     // If content is HTML and needs to be rendered as HTML
//     if (content.content && typeof content.content === 'string' && 
//         content.content.includes('<') && content.content.includes('>')) {
//       return (
//         <div 
//           className="content-body"
//           dangerouslySetInnerHTML={{ __html: content.content }}
//         />
//       );
//     }
    
//     // Otherwise, render as plain text, making sure to preserve line breaks
//     return (
//       <div className="content-body">
//         {content.content.split('\n').map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="content-detail-page">
//       {/* Back button */}
//       <div className="container back-navigation">
//         <button onClick={() => navigate('/content')} className="back-button">
//           <ArrowLeft className="icon-small" />
//           <span>Retour aux ressources</span>
//         </button>
//       </div>

//       {/* Loading State */}
//       {isLoading && (
//         <div className="loading-container">
//           <div className="loading-spinner"></div>
//           <p className="loading-text">Chargement du contenu...</p>
//         </div>
//       )}

//       {/* Error State */}
//       {error && (
//         <div className="error-container">
//           <AlertTriangle className="error-icon" size={40} />
//           <h3 className="error-title">Une erreur est survenue</h3>
//           <p className="error-message">{error}</p>
//           <button 
//             className="retry-button"
//             onClick={() => window.location.reload()}
//           >
//             Réessayer
//           </button>
//         </div>
//       )}

//       {/* Content Detail */}
//       {!isLoading && !error && content && (
//         <div className="container">
//           <article className="content-detail">
//             <div className="content-meta-info">
//               <div className="content-type">{content.type}</div>
//               <div className="content-category">
//                 {getCategoryIcon()}
//                 <span>{content.category}</span>
//               </div>
//               <div className="content-date">
//                 <Clock className="icon-tiny" />
//                 <span>{formatDate(content.date)}</span>
//               </div>
//             </div>

//             <h1 className="content-title">{content.title}</h1>
            
//             <div className="content-featured-image-container">
//               <img 
//                 src={content.image} 
//                 alt={content.title}
//                 className="content-featured-image"
//                 onError={(e) => {
//                   const target = e.target as HTMLImageElement;
//                   target.onerror = null;
//                   target.src = `https://source.unsplash.com/random/1200x600/?cybersecurity&sig=${content.id}`;
//                 }}
//               />
//             </div>

//             <div className="content-description">
//               <p>{content.description}</p>
//             </div>

//             {/* Use our new helper function to render content */}
//             {renderContent()}

           
//           </article>
//         </div>
//       )}

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }






import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Shield, AlertTriangle } from "lucide-react";
import Footer from "../../components/Footer.tsx";
import "./ContentDetail.css";
import { fetchContentById } from "../../services/contentAPI.ts";
import type { ContentItem } from "../../services/contentAPI.ts";

export default function ContentDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<ContentItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContentDetail = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (!id) {
          throw new Error('ID non spécifié');
        }
        
        const contentItem = await fetchContentById(id);
        setContent(contentItem);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        console.error('Error fetching content detail:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (id) {
      fetchContentDetail();
    }
  }, [id]);

  // Format date
  const formatDate = (dateString: string): string => {
    try {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('fr-FR', options);
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString; // Return the original string if formatting fails
    }
  };

  // Get category icon
  const getCategoryIcon = () => {
    if (!content) return null;
    
    switch (content.category) {
      case 'disinformation':
        return <AlertTriangle className="category-icon" />;
      case 'hacking':
        return <Shield className="category-icon" />;
      case 'financial':
        return <Shield className="category-icon" />;
      case 'phishing':
        return <Shield className="category-icon" />;
      case 'ransomware':
        return <Shield className="category-icon" />;
      case 'harassment':
        return <Shield className="category-icon" />;
      default:
        return <Shield className="category-icon" />;
    }
  };

  // Parse and render HTML content safely
  const renderContent = () => {
    if (!content) return null;
    
    // If content is HTML and needs to be rendered as HTML
    if (content.content && typeof content.content === 'string' && 
        content.content.includes('<') && content.content.includes('>')) {
      return (
        <div 
          className="content-body"
          dangerouslySetInnerHTML={{ __html: content.content }}
        />
      );
    }
    
    // Otherwise, render as plain text, making sure to preserve line breaks
    return (
      <div className="content-body">
        {content.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    );
  };

  // Handle viewing original source
  const handleViewSource = () => {
    if (content && content.link) {
      window.open(content.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="content-detail-page">
      {/* Back button */}
      <div className="container back-navigation">
        <button onClick={() => navigate('/content')} className="back-button">
          <ArrowLeft className="icon-small" />
          <span>Retour aux ressources</span>
        </button>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Chargement du contenu...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="error-container">
          <AlertTriangle className="error-icon" size={40} />
          <h3 className="error-title">Une erreur est survenue</h3>
          <p className="error-message">{error}</p>
          <button 
            className="retry-button"
            onClick={() => window.location.reload()}
          >
            Réessayer
          </button>
        </div>
      )}

      {/* Content Detail */}
      {!isLoading && !error && content && (
        <div className="container">
          <article className="content-detail">
            <div className="content-meta-info">
              <div className="content-type">{content.type}</div>
              <div className="content-category">
                {getCategoryIcon()}
                <span>{content.category}</span>
              </div>
              <div className="content-date">
                <Clock className="icon-tiny" />
                <span>{formatDate(content.date)}</span>
              </div>
            </div>

            <h1 className="content-title">{content.title}</h1>
            
            <div className="content-featured-image-container">
              <img 
                src={content.image} 
                alt={content.title}
                className="content-featured-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://source.unsplash.com/random/1200x600/?cybersecurity&sig=${content.id}`;
                }}
              />
            </div>

            <div className="content-description">
              <p>{content.description}</p>
            </div>

            {/* Render content */}
            {renderContent()}

            {/* View original source button */}
            {/* {content.link && (
              <div className="view-source-container">
                <button onClick={handleViewSource} className="view-source-button">
                  Voir la source originale
                </button>
              </div>
            )} */}
          </article>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}