// import { useState, useEffect } from "react";
// import {ChevronRight, Headphones, Play, Calendar } from "lucide-react";
// import '../styles/Podcast.css';
// import image from '../images/5.jpg'

// const Podcast = () => {
//     const [activeSlide, setActiveSlide] = useState(0);
//     // Podcast episodes data
//       const podcastEpisodes = [
//         {
//           title: "La cybersécurité pour les débutants au Bénin",
//           host: "Dr. Anicet Bonou",
//           guest: "Marie Koutchoukalo",
//           duration: "42:15",
//           date: "12 Mai 2025",
//           image: image,
//           description: "Dans cet épisode, nous explorons les bases de la cybersécurité adaptées au contexte béninois, avec des conseils pratiques pour protéger vos données personnelles."
//         },
//         {
//           title: "Les arnaques financières en Afrique de l'Ouest",
//           host: "Dr. Anicet Bonou",
//           guest: "Prof. Kodjo Agbessi",
//           duration: "38:45",
//           date: "5 Mai 2025",
//           image: image,
//           description: "Discussion approfondie sur les nouvelles techniques d'arnaque financière qui ciblent spécifiquement les utilisateurs d'Afrique de l'Ouest."
//         },
//         {
//           title: "Comment se protéger contre le piratage de compte",
//           host: "Dr. Anicet Bonou",
//           guest: "Emma Dossou",
//           duration: "45:20",
//           date: "28 Avril 2025",
//           image: image,
//           description: "Stratégies avancées pour protéger vos comptes en ligne contre les pirates informatiques, avec des solutions adaptées aux utilisateurs béninois."
//         }
//       ];

//       // Auto-rotate podcast slider
//         useEffect(() => {
//           const interval = setInterval(() => {
//             setActiveSlide((prev) => (prev + 1) % podcastEpisodes.length);
//           }, 7000);
//           return () => clearInterval(interval);
//         }, [podcastEpisodes.length]);

//     return (
//         <section className="podcast-section">
//           <div className="container">
//             <h2 className="section-title">Notre Podcast <span className="highlight">CyberTalk Bénin</span></h2>
//             <div className="podcast-intro">
//               <p className="podcast-description">
//                 Écoutez notre podcast hebdomadaire sur la cybersécurité avec des invités experts et des thématiques adaptées au contexte africain.
//               </p>
//               <div className="listen-platforms">
//                 <span className="listen-text">Écoutez sur:</span>
//                 <div className="platform-icons">
//                   <a href="#" className="platform-link">Spotify</a>
//                   <a href="#" className="platform-link">Apple</a>
//                   <a href="#" className="platform-link">Google</a>
//                   <a href="#" className="platform-link">SoundCloud</a>
//                 </div>
//               </div>
//             </div>
            
//             <div className="podcast-slider">
//               <div className="slider-container" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
//                 {podcastEpisodes.map((episode, index) => (
//                   <div key={index} className="podcast-episode">
//                     <div className="episode-image">
//                       <img src={episode.image} alt={episode.title} />
//                       <div className="play-button">
//                         <Play className="play-icon" />
//                       </div>
//                     </div>
//                     <div className="episode-content">
//                       <div className="episode-meta">
//                         <span className="episode-number">Épisode {index + 1}</span>
//                         <span className="episode-duration">
//                           <Calendar className="icon-tiny" /> {episode.date} | {episode.duration}
//                         </span>
//                       </div>
//                       <h3 className="episode-title">{episode.title}</h3>
//                       <p className="episode-hosts">
//                         <span className="host">Animateur: {episode.host}</span>
//                         <span className="guest">Invité: {episode.guest}</span>
//                       </p>
//                       <p className="episode-description">{episode.description}</p>
//                       <a href="#" className="listen-link">
//                         Écouter cet épisode
//                         <ChevronRight className="icon-tiny" />
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="slider-controls">
//                 <div className="slider-dots">
//                   {podcastEpisodes.map((_, idx) => (
//                     <div
//                       key={idx}
//                       className={`slider-dot ${idx === activeSlide ? "active" : ""}`}
//                       onClick={() => setActiveSlide(idx)}
//                     />
//                   ))}
//                 </div>
//                 <div className="slider-arrows">
//                   <button 
//                     className="arrow-button prev" 
//                     onClick={() => setActiveSlide((prev) => (prev === 0 ? podcastEpisodes.length - 1 : prev - 1))}
//                   >
//                     &larr;
//                   </button>
//                   <button 
//                     className="arrow-button next" 
//                     onClick={() => setActiveSlide((prev) => (prev + 1) % podcastEpisodes.length)}
//                   >
//                     &rarr;
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             <div className="all-episodes">
//               <a href="/podcasts" className="btn btn-outline">
//                 Voir tous les épisodes
//                 <Headphones className="icon-small" />
//               </a>
//             </div>
//           </div>
//         </section>
//     );
//   }
  

//   export default Podcast;






import { useState, useEffect } from "react";
import { ChevronRight, Headphones, Play, Calendar, Loader, Pause } from "lucide-react";
import '../styles/Podcast.css';
import image from '../images/5.jpg'; // Fallback image

const Podcast = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [podcastEpisodes, setPodcastEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [audioElement, setAudioElement] = useState(null);

  // Fetch podcast episodes and their episodes from PodcastIndex API
  useEffect(() => {
    const fetchPodcasts = async () => {
      setIsLoading(true);
      try {
        // Using iTunes API to search for cybersecurity podcasts in French
        // Increase limit to get more podcasts
        const response = await fetch(
          "https://itunes.apple.com/search?term=cybersecurite&media=podcast&limit=15&lang=fr"
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch podcasts");
        }
        
        const data = await response.json();
        
        // Get the top 6 podcasts instead of just 3
        const topPodcasts = data.results.slice(0, 6);
        const episodeRequests = topPodcasts.map(async (podcast) => {
          try {
            // Use the podcast's feedUrl to fetch the latest episodes
            // In a real implementation, you would parse the RSS feed
            // Here we'll simulate episode data based on the podcast info
            return {
              id: podcast.collectionId,
              title: podcast.collectionName || "Podcast sur la cybersécurité",
              host: podcast.artistName || "Hôte inconnu",
              guest: "Invités experts",
              duration: "30:00",
              date: new Date().toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long', 
                year: 'numeric'
              }),
              image: podcast.artworkUrl600 || podcast.artworkUrl100 || image,
              description: podcast.collectionCensoredName || "Discussions sur les meilleures pratiques de cybersécurité",
              // For demo purposes, use a sample audio file that's freely available
              audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-" + ((podcast.collectionId % 3) + 1) + ".mp3"
            };
          } catch (error) {
            console.error("Error fetching podcast episodes:", error);
            return null;
          }
        });
        
        // Wait for all episode requests to complete
        const resolvedEpisodes = await Promise.all(episodeRequests);
        const formattedEpisodes = resolvedEpisodes.filter(episode => episode !== null);
        
        setPodcastEpisodes(formattedEpisodes);
      } catch (err) {
        console.error("Error fetching podcasts:", err);
        setError("Impossible de charger les podcasts. Veuillez réessayer plus tard.");
        
        // No fallback data - just show error
        setPodcastEpisodes([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPodcasts();
    
    // Create audio element and attach event listeners
    const audio = new Audio();
    audio.addEventListener('ended', () => setCurrentlyPlaying(null));
    setAudioElement(audio);
    
    // Cleanup
    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
        audio.removeEventListener('ended', () => setCurrentlyPlaying(null));
      }
    };
  }, []);

  // Auto-rotate podcast slider
  useEffect(() => {
    if (podcastEpisodes.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % podcastEpisodes.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, [podcastEpisodes.length]);

  // Play podcast episode
  const playPodcast = (episodeId) => {
    if (!audioElement) return;
    
    // If an episode is already playing, stop it
    if (currentlyPlaying) {
      audioElement.pause();
      
      // If the same episode is clicked, just pause it
      if (currentlyPlaying === episodeId) {
        setCurrentlyPlaying(null);
        return;
      }
    }
    
    // Play the new episode
    const episode = podcastEpisodes.find(ep => ep.id === episodeId);
    if (episode && episode.audioUrl) {
      audioElement.src = episode.audioUrl;
      audioElement.play()
        .then(() => {
          setCurrentlyPlaying(episodeId);
        })
        .catch(error => {
          console.error("Error playing audio:", error);
          setError("Impossible de lire le podcast. Veuillez réessayer plus tard.");
        });
    }
  };

  // Handle case when podcasts are loading
  if (isLoading) {
    return (
      <section className="podcast-section">
        <div className="container">
          <h2 className="section-title">Notre Podcast <span className="highlight">CyberTalk Bénin</span></h2>
          <div className="loading-container">
            <Loader className="animate-spin" />
            <p>Chargement des podcasts...</p>
          </div>
        </div>
      </section>
    );
  }

  // Handle error case - now with no fallback, we'll show a more prominent error
  if (error || podcastEpisodes.length === 0) {
    return (
      <section className="podcast-section">
        <div className="container">
          <h2 className="section-title">Notre Podcast <span className="highlight">CyberTalk Bénin</span></h2>
          <div className="error-container">
            <p>{error || "Aucun podcast n'a pu être récupéré. Veuillez vérifier votre connexion internet."}</p>
            <button className="btn" onClick={() => window.location.reload()}>
              Réessayer
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="podcast-section">
      <div className="container">
        <h2 className="section-title">Notre Podcast <span className="highlight">CyberTalk Bénin</span></h2>
        <div className="podcast-intro">
          <p className="podcast-description">
            Écoutez notre podcast hebdomadaire sur la cybersécurité avec des invités experts et des thématiques adaptées au contexte africain.
          </p>
          <div className="listen-platforms">
            <span className="listen-text">Écoutez directement sur notre site</span>
            <div className="podcast-count">
              <span>{podcastEpisodes.length} épisodes disponibles</span>
            </div>
          </div>
        </div>
        
        {/* Audio Player (Hidden) */}
        {currentlyPlaying && (
          <div className="audio-player-bar">
            <div className="now-playing">
              <span>En lecture:</span> {podcastEpisodes.find(ep => ep.id === currentlyPlaying)?.title}
            </div>
            <button 
              className="pause-button" 
              onClick={() => playPodcast(currentlyPlaying)}
            >
              <Pause size={16} />
            </button>
          </div>
        )}
        
        <div className="podcast-slider">
          <div className="slider-container" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {podcastEpisodes.map((episode, index) => (
              <div key={index} className="podcast-episode">
                <div className="episode-image">
                  <img src={episode.image} alt={episode.title} />
                  <div 
                    className="play-button" 
                    onClick={() => playPodcast(episode.id)}
                  >
                    {currentlyPlaying === episode.id ? <Pause className="play-icon" /> : <Play className="play-icon" />}
                  </div>
                </div>
                <div className="episode-content">
                  <div className="episode-meta">
                    <span className="episode-number">Épisode {index + 1}</span>
                    <span className="episode-duration">
                      <Calendar className="icon-tiny" /> {episode.date} | {episode.duration}
                    </span>
                  </div>
                  <h3 className="episode-title">{episode.title}</h3>
                  <p className="episode-hosts">
                    <span className="host">Animateur: {episode.host}</span>
                    <span className="guest">Invité: {episode.guest}</span>
                  </p>
                  <p className="episode-description">{episode.description}</p>
                  <button 
                    className="listen-button" 
                    onClick={() => playPodcast(episode.id)}
                  >
                    {currentlyPlaying === episode.id ? 'Pause' : 'Écouter cet épisode'}
                    {currentlyPlaying === episode.id ? <Pause className="icon-tiny" /> : <Play className="icon-tiny" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-controls">
            <div className="slider-dots">
              {podcastEpisodes.map((_, idx) => (
                <div
                  key={idx}
                  className={`slider-dot ${idx === activeSlide ? "active" : ""}`}
                  onClick={() => setActiveSlide(idx)}
                />
              ))}
            </div>
            <div className="slider-arrows">
              <button 
                className="arrow-button prev" 
                onClick={() => setActiveSlide((prev) => (prev === 0 ? podcastEpisodes.length - 1 : prev - 1))}
              >
                &larr;
              </button>
              <button 
                className="arrow-button next" 
                onClick={() => setActiveSlide((prev) => (prev + 1) % podcastEpisodes.length)}
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
        
        <div className="all-episodes">
          <button 
            className="btn btn-outline" 
            onClick={() => {
              // Refresh podcasts by reloading data
              window.location.reload();
            }}
          >
            Actualiser les podcasts
            <Headphones className="icon-small" />
          </button>
        </div>
      </div>
      
      {/* Add some CSS styles for new elements */}
      <style jsx>{`
        .podcast-count {
          margin-top: 8px;
          font-style: italic;
        }
        
        .audio-player-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f0f8ff;
          padding: 10px 15px;
          border-radius: 8px;
          margin-bottom: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .now-playing {
          font-weight: 500;
        }
        
        .now-playing span {
          font-weight: bold;
          margin-right: 8px;
        }
        
        .pause-button {
          background-color: #e74c3c;
          color: white;
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .pause-button:hover {
          background-color: #c0392b;
        }
        
        .listen-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #3498db;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.3s;
        }
        
        .listen-button:hover {
          background-color: #2980b9;
        }
        
        .loading-container, .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 0;
          text-align: center;
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
    
  );
};

export default Podcast;