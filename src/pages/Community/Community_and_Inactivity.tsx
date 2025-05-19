// import React, { useState, useEffect } from 'react';
// import './CommunityInteractivity.css';
// import forumIcon from './assets/forum-icon.svg';
// import commentIcon from './assets/comment-icon.svg';
// import newsletterIcon from './assets/newsletter-icon.svg';
// import whatsappIcon from './assets/whatsapp-icon.svg';
// import telegramIcon from './assets/telegram-icon.svg';
// import diagnosticIcon from './assets/diagnostic-icon.svg';
// import chatbotIcon from './assets/chatbot-icon.svg';

// const CommunityInteractivity = () => {
//   const [activeTab, setActiveTab] = useState('comments');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalContent, setModalContent] = useState('');
//   const [showChatbot, setShowChatbot] = useState(false);
//   const [userMessage, setUserMessage] = useState('');
//   const [chatMessages, setChatMessages] = useState([
//     { sender: 'bot', text: 'Bonjour! Comment puis-je vous aider avec la cybersécurité aujourd\'hui?' }
//   ]);
//   const [newsletterEmail, setNewsletterEmail] = useState('');
//   const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);
//   const [forumTopics, setForumTopics] = useState([
//     {
//       id: 1,
//       title: 'Attention aux arnaques Mobile Money',
//       author: 'CyberVigilant',
//       date: '16 Mai 2025',
//       replies: 24,
//       views: 183
//     },
//     {
//       id: 2,
//       title: 'Comment sécuriser son compte Facebook',
//       author: 'TechSafe',
//       date: '14 Mai 2025',
//       replies: 16,
//       views: 142
//     },
//     {
//       id: 3,
//       title: 'Expérience avec le nouveau ransomware',
//       author: 'InfoSecBenin',
//       date: '10 Mai 2025',
//       replies: 31,
//       views: 267
//     },
//     {
//       id: 4,
//       title: 'Alerte: Nouveau phishing visant les banques locales',
//       author: 'CyberAlert',
//       date: '08 Mai 2025',
//       replies: 19,
//       views: 216
//     }
//   ]);
  
//   const [comments, setComments] = useState([
//     {
//       id: 1,
//       author: 'Kofi Mensah',
//       date: '15 Mai 2025',
//       content: 'Cette ressource est excellente! J\'ai pu identifier une tentative de phishing grâce à vos conseils.',
//       likes: 12,
//       replies: []
//     },
//     {
//       id: 2,
//       author: 'Aminata Diallo',
//       date: '13 Mai 2025',
//       content: 'Est-ce que vous pourriez faire un article sur comment protéger les enfants en ligne? C\'est un sujet qui m\'inquiète.',
//       likes: 8,
//       replies: [
//         {
//           id: 21,
//           author: 'ModérateurCyber',
//           date: '14 Mai 2025',
//           content: 'Merci pour votre suggestion Aminata! Nous préparons justement un dossier complet sur ce sujet qui sera publié la semaine prochaine.',
//           likes: 5
//         }
//       ]
//     }
//   ]);

//   const [diagnosticQuestions, setDiagnosticQuestions] = useState([
//     {
//       id: 1,
//       question: 'Utilisez-vous le même mot de passe pour plusieurs comptes?',
//       options: ['Oui', 'Non', 'Parfois'],
//       answer: null
//     },
//     {
//       id: 2,
//       question: 'Avez-vous activé l\'authentification à deux facteurs sur vos comptes importants?',
//       options: ['Oui', 'Non', 'Sur certains comptes seulement'],
//       answer: null
//     },
//     {
//       id: 3,
//       question: 'Mettez-vous régulièrement à jour vos appareils et applications?',
//       options: ['Oui, automatiquement', 'Oui, manuellement', 'Rarement', 'Jamais'],
//       answer: null
//     }
//   ]);
  
//   const [diagnosticScore, setDiagnosticScore] = useState<number | null>(null);
//   const [diagnosticCompleted, setDiagnosticCompleted] = useState(false);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const toggleModal = (content) => {
//     setModalContent(content);
//     setIsModalOpen(!isModalOpen);
//   };
  
//   const toggleChatbot = () => {
//     setShowChatbot(!showChatbot);
//   };
  
//   const sendChatMessage = () => {
//     if (userMessage.trim() === '') return;
    
//     setChatMessages([...chatMessages, { sender: 'user', text: userMessage }]);
    
//     // Simulate bot response
//     setTimeout(() => {
//       let botResponse = "Je comprends votre préoccupation. Pour plus d'informations sur ce sujet, consultez notre section de ressources ou posez des questions plus spécifiques.";
      
//       if (userMessage.toLowerCase().includes('phishing')) {
//         botResponse = "Le phishing est une technique frauduleuse pour obtenir vos informations personnelles. Vérifiez toujours l'URL et ne cliquez pas sur des liens suspects. Consultez notre guide complet dans la section Ressources.";
//       } else if (userMessage.toLowerCase().includes('mot de passe')) {
//         botResponse = "Pour un mot de passe sécurisé, utilisez au moins 12 caractères avec des lettres, chiffres et symboles. Évitez les informations personnelles et utilisez un gestionnaire de mots de passe.";
//       } else if (userMessage.toLowerCase().includes('mobile money') || userMessage.toLowerCase().includes('arnaque')) {
//         botResponse = "Les arnaques Mobile Money sont fréquentes au Bénin. Ne partagez jamais votre code PIN, ignorez les demandes de transfert inattendues, et vérifiez toujours l'identité du destinataire. Consultez notre investigation sur ce sujet.";
//       }
      
//       setChatMessages(prevMessages => [...prevMessages, { sender: 'bot', text: botResponse }]);
//     }, 1000);
    
//     setUserMessage('');
//   };
  
//   const handleNewsletterSubmit = (e) => {
//     e.preventDefault();
//     // In a real app, you would send this to your backend
//     setIsNewsletterSubmitted(true);
//     setTimeout(() => setIsNewsletterSubmitted(false), 3000);
//   };
  
//   const answerDiagnosticQuestion = (questionId, answerIndex) => {
//     setDiagnosticQuestions(prevQuestions => 
//       prevQuestions.map(q => 
//         q.id === questionId ? { ...q, answer: answerIndex } : q
//       )
//     );
    
//     // Check if all questions are answered
//     const updatedQuestions = diagnosticQuestions.map(q => 
//       q.id === questionId ? { ...q, answer: answerIndex } : q
//     );
    
//     const allAnswered = updatedQuestions.every(q => q.answer !== null);
    
//     if (allAnswered) {
//       // Calculate score (simplified example)
//       let score = 0;
//       updatedQuestions.forEach(q => {
//         if (q.id === 1 && q.answer === 1) score += 33; // "Non" is secure
//         if (q.id === 2 && q.answer === 0) score += 33; // "Oui" is secure
//         if (q.id === 3 && (q.answer === 0 || q.answer === 1)) score += 34; // Regular updates are secure
//       });
      
//       setDiagnosticScore(score);
//       setDiagnosticCompleted(true);
//     }
//   };
  
//   const resetDiagnostic = () => {
//     setDiagnosticQuestions(prevQuestions => 
//       prevQuestions.map(q => ({ ...q, answer: null }))
//     );
//     setDiagnosticScore(null);
//     setDiagnosticCompleted(false);
//   };

//   return (
//     <div className="community-container">
//       <h2 className="section-title">Communauté & Interactivité</h2>
//       <p className="section-description">
//         Rejoignez notre communauté de cybersécurité pour partager vos expériences, 
//         poser des questions et rester informé des dernières menaces numériques au Bénin.
//       </p>
      
//       <div className="tabs-container">
//         <div className="tabs">
//           <button 
//             className={`tab-button ${activeTab === 'comments' ? 'active' : ''}`}
//             onClick={() => handleTabChange('comments')}
//           >
//             <img src={commentIcon} alt="Comments" className="tab-icon" />
//             Commentaires
//           </button>
//           <button 
//             className={`tab-button ${activeTab === 'forum' ? 'active' : ''}`}
//             onClick={() => handleTabChange('forum')}
//           >
//             <img src={forumIcon} alt="Forum" className="tab-icon" />
//             Forum
//           </button>
//           <button 
//             className={`tab-button ${activeTab === 'newsletter' ? 'active' : ''}`}
//             onClick={() => handleTabChange('newsletter')}
//           >
//             <img src={newsletterIcon} alt="Newsletter" className="tab-icon" />
//             Newsletter
//           </button>
//           <button 
//             className={`tab-button ${activeTab === 'groups' ? 'active' : ''}`}
//             onClick={() => handleTabChange('groups')}
//           >
//             <img src={whatsappIcon} alt="Groups" className="tab-icon" />
//             Groupes
//           </button>
//           <button 
//             className={`tab-button ${activeTab === 'diagnostic' ? 'active' : ''}`}
//             onClick={() => handleTabChange('diagnostic')}
//           >
//             <img src={diagnosticIcon} alt="Diagnostic" className="tab-icon" />
//             Diagnostic
//           </button>
//         </div>
        
//         <div className="tab-content">
//           {activeTab === 'comments' && (
//             <div className="comments-container">
//               <h3>Commentaires récents</h3>
//               <div className="comments-list">
//                 {comments.map(comment => (
//                   <div key={comment.id} className="comment">
//                     <div className="comment-header">
//                       <div className="comment-author">{comment.author}</div>
//                       <div className="comment-date">{comment.date}</div>
//                     </div>
//                     <div className="comment-content">{comment.content}</div>
//                     <div className="comment-actions">
//                       <button className="like-button">
//                         <span className="like-icon">👍</span> {comment.likes}
//                       </button>
//                       <button className="reply-button" onClick={() => toggleModal(`Répondre à ${comment.author}`)}>
//                         Répondre
//                       </button>
//                     </div>
                    
//                     {comment.replies.length > 0 && (
//                       <div className="comment-replies">
//                         {comment.replies.map(reply => (
//                           <div key={reply.id} className="reply">
//                             <div className="comment-header">
//                               <div className="comment-author">{reply.author}</div>
//                               <div className="comment-date">{reply.date}</div>
//                             </div>
//                             <div className="comment-content">{reply.content}</div>
//                             <div className="comment-actions">
//                               <button className="like-button">
//                                 <span className="like-icon">👍</span> {reply.likes}
//                               </button>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               <div className="add-comment">
//                 <h4>Ajouter un commentaire</h4>
//                 <textarea 
//                   placeholder="Partagez votre expérience ou posez une question..." 
//                   className="comment-textarea"
//                 ></textarea>
//                 <button className="submit-button">Publier</button>
//               </div>
//             </div>
//           )}
          
//           {activeTab === 'forum' && (
//             <div className="forum-container">
//               <div className="forum-header">
//                 <h3>Forum de discussion</h3>
//                 <button className="new-topic-button" onClick={() => toggleModal('Créer un nouveau sujet')}>
//                   Nouveau sujet
//                 </button>
//               </div>
//               <div className="forum-topics">
//                 <div className="topic-header">
//                   <div className="topic-title-header">Sujet</div>
//                   <div className="topic-author-header">Auteur</div>
//                   <div className="topic-date-header">Date</div>
//                   <div className="topic-replies-header">Réponses</div>
//                   <div className="topic-views-header">Vues</div>
//                 </div>
//                 {forumTopics.map(topic => (
//                   <div key={topic.id} className="topic-row" onClick={() => toggleModal(`Voir le sujet: ${topic.title}`)}>
//                     <div className="topic-title">{topic.title}</div>
//                     <div className="topic-author">{topic.author}</div>
//                     <div className="topic-date">{topic.date}</div>
//                     <div className="topic-replies">{topic.replies}</div>
//                     <div className="topic-views">{topic.views}</div>
//                   </div>
//                 ))}
//               </div>
//               <div className="forum-pagination">
//                 <button className="pagination-button active">1</button>
//                 <button className="pagination-button">2</button>
//                 <button className="pagination-button">3</button>
//                 <button className="pagination-button">Suivant</button>
//               </div>
//             </div>
//           )}
          
//           {activeTab === 'newsletter' && (
//             <div className="newsletter-container">
//               <div className="newsletter-content">
//                 <h3>Abonnez-vous à notre newsletter mensuelle</h3>
//                 <p>
//                   Restez informé des dernières menaces cybernétiques, recevez des conseils de sécurité 
//                   et soyez le premier à accéder à nos nouveaux contenus éducatifs.
//                 </p>
                
//                 <div className="newsletter-features">
//                   <div className="feature">
//                     <div className="feature-icon">🔔</div>
//                     <div className="feature-text">Alertes de sécurité</div>
//                   </div>
//                   <div className="feature">
//                     <div className="feature-icon">📚</div>
//                     <div className="feature-text">Guides exclusifs</div>
//                   </div>
//                   <div className="feature">
//                     <div className="feature-icon">📊</div>
//                     <div className="feature-text">Statistiques locales</div>
//                   </div>
//                 </div>
                
//                 <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
//                   <input 
//                     type="email" 
//                     placeholder="Votre adresse email" 
//                     className="newsletter-input"
//                     value={newsletterEmail}
//                     onChange={(e) => setNewsletterEmail(e.target.value)}
//                     required 
//                   />
//                   <button type="submit" className="newsletter-button">
//                     S'abonner
//                   </button>
//                 </form>
                
//                 {isNewsletterSubmitted && (
//                   <div className="success-message">
//                     Merci pour votre abonnement! Vérifiez votre email pour confirmer.
//                   </div>
//                 )}
                
//                 <div className="newsletter-archives">
//                   <h4>Archives des newsletters précédentes</h4>
//                   <ul className="archives-list">
//                     <li><a href="#">Mai 2025: Nouvelles arnaques financières au Bénin</a></li>
//                     <li><a href="#">Avril 2025: Sécurisez vos appareils mobiles</a></li>
//                     <li><a href="#">Mars 2025: Protection contre la désinformation</a></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           )}
          
//           {activeTab === 'groups' && (
//             <div className="groups-container">
//               <div className="groups-section">
//                 <div className="group-card whatsapp">
//                   <div className="group-icon-container">
//                     <img src={whatsappIcon} alt="WhatsApp" className="group-icon" />
//                   </div>
//                   <h3 className="group-title">Groupe WhatsApp d'Alertes</h3>
//                   <p className="group-description">
//                     Rejoignez notre groupe WhatsApp pour recevoir des alertes en temps réel sur les 
//                     menaces cybernétiques au Bénin et en Afrique de l'Ouest.
//                   </p>
//                   <ul className="group-features">
//                     <li>Plus de 1,200 membres</li>
//                     <li>Alertes vérifiées uniquement</li>
//                     <li>Modération active</li>
//                   </ul>
//                   <a href="#" className="join-button whatsapp-button">
//                     Rejoindre le groupe
//                   </a>
//                 </div>
                
//                 <div className="group-card telegram">
//                   <div className="group-icon-container">
//                     <img src={telegramIcon} alt="Telegram" className="group-icon" />
//                   </div>
//                   <h3 className="group-title">Canal Telegram CyberBenin</h3>
//                   <p className="group-description">
//                     Suivez notre canal Telegram pour des contenus éducatifs réguliers, des tutoriels 
//                     et des analyses plus approfondies des incidents.
//                   </p>
//                   <ul className="group-features">
//                     <li>Contenus exclusifs</li>
//                     <li>Analyses techniques</li>
//                     <li>Ressources téléchargeables</li>
//                   </ul>
//                   <a href="#" className="join-button telegram-button">
//                     S'abonner au canal
//                   </a>
//                 </div>
//               </div>
              
//               <div className="community-guidelines">
//                 <h3>Règles de la communauté</h3>
//                 <ul className="guidelines-list">
//                   <li>Respectez tous les membres et leurs questions</li>
//                   <li>Ne partagez pas d'informations personnelles sensibles</li>
//                   <li>Vérifiez les informations avant de les partager</li>
//                   <li>Pas de promotion commerciale sans autorisation</li>
//                   <li>Signalez tout contenu suspect aux modérateurs</li>
//                 </ul>
//               </div>
//             </div>
//           )}
          
//           {activeTab === 'diagnostic' && (
//             <div className="diagnostic-container">
//               <h3>Diagnostic de Sécurité</h3>
//               <p className="diagnostic-intro">
//                 Évaluez rapidement votre niveau de sécurité numérique en répondant à ces questions simples. 
//                 Recevez ensuite des recommandations personnalisées.
//               </p>
              
//               {!diagnosticCompleted ? (
//                 <div className="diagnostic-questions">
//                   {diagnosticQuestions.map((q, index) => (
//                     <div key={q.id} className="question-card">
//                       <div className="question-number">Question {index + 1}/3</div>
//                       <div className="question-text">{q.question}</div>
//                       <div className="question-options">
//                         {q.options.map((option, optIndex) => (
//                           <button 
//                             key={optIndex}
//                             className={`option-button ${q.answer === optIndex ? 'selected' : ''}`}
//                             onClick={() => answerDiagnosticQuestion(q.id, optIndex)}
//                           >
//                             {option}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="diagnostic-results">
//                   <div className="score-circle">
//                     <svg viewBox="0 0 36 36" className="score-chart">
//                       <path
//                         className="score-circle-bg"
//                         d="M18 2.0845
//                           a 15.9155 15.9155 0 0 1 0 31.831
//                           a 15.9155 15.9155 0 0 1 0 -31.831"
//                       />
//                       <path
//                         className="score-circle-fill"
//                         strokeDasharray={`${diagnosticScore}, 100`}
//                         d="M18 2.0845
//                           a 15.9155 15.9155 0 0 1 0 31.831
//                           a 15.9155 15.9155 0 0 1 0 -31.831"
//                       />
//                       <text x="18" y="20.35" className="score-text">
//                         {diagnosticScore}%
//                       </text>
//                     </svg>
//                   </div>
                  
                  
//                   <h4 className="results-title">
//                     Votre niveau de sécurité: {
//                         (diagnosticScore ?? 0) < 40 ? 'Vulnérable' : 
//                         (diagnosticScore ?? 0) < 70 ? 'Moyen' : 'Bon'
//                     }
//                     </h4>
                  
//                   <div className="recommendations">
//                     <h4>Recommandations personnalisées:</h4>
//                     <ul className="recommendations-list">
//                       {(diagnosticScore ?? 0) < 70 && (
//                         <li>Activez l'authentification à deux facteurs sur tous vos comptes importants</li>
//                       )}
//                       {(diagnosticScore ?? 0) < 50 && (
//                         <li>Utilisez un gestionnaire de mots de passe pour créer des mots de passe uniques</li>
//                       )}
//                       {(diagnosticScore ?? 0) < 90 && (
//                         <li>Configurez les mises à jour automatiques sur tous vos appareils</li>
//                       )}
//                       <li>Consultez notre guide complet sur la sécurité numérique de base</li>
//                     </ul>
//                   </div>
                  
//                   <button className="reset-button" onClick={resetDiagnostic}>
//                     Refaire le diagnostic
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
      
//       {isModalOpen && (
//         <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
//           <div className="modal-content" onClick={e => e.stopPropagation()}>
//             <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
//             <h3>{modalContent}</h3>
//             <div className="modal-body">
//               <p>Cette fonctionnalité sera bientôt disponible.</p>
//             </div>
//           </div>
//         </div>
//       )}
      
//       <div className="chatbot-container">
//         <button 
//           className={`chatbot-toggle ${showChatbot ? 'active' : ''}`}
//           onClick={toggleChatbot}
//         >
//           <img src={chatbotIcon} alt="Chatbot" className="chatbot-icon" />
//           {!showChatbot && <span>Assistant Cyber</span>}
//         </button>
        
//         {showChatbot && (
//           <div className="chatbot-window">
//             <div className="chatbot-header">
//               <h3>Assistant CyberBenin</h3>
//               <button className="close-chat" onClick={toggleChatbot}>×</button>
//             </div>
//             <div className="chat-messages">
//               {chatMessages.map((msg, index) => (
//                 <div key={index} className={`chat-message ${msg.sender}`}>
//                   {msg.text}
//                 </div>
//               ))}
//             </div>
//             <div className="chat-input">
//               <input 
//                 type="text" 
//                 placeholder="Posez une question sur la cybersécurité..." 
//                 value={userMessage}
//                 onChange={(e) => setUserMessage(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
//               />
//               <button onClick={sendChatMessage}>Envoyer</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CommunityInteractivity;






























import React, { useState, useEffect } from 'react';
import './CommunityInteractivity.css';
import { 
  MessageSquare, 
  MessageCircle, 
  Mail, 
  FileText, 
  Send,
  AlertCircle,
  Smartphone,
  Users,
  Bot,
  ThumbsUp,
  BarChart3
} from 'lucide-react';
import ComingSoon from '../../components/ComingSoon.tsx';

const CommunityInteractivity = () => {
  const [activeTab, setActiveTab] = useState('comments');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Bonjour! Comment puis-je vous aider avec la cybersécurité aujourd\'hui?' }
  ]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);
  const [forumTopics, setForumTopics] = useState([
    {
      id: 1,
      title: 'Attention aux arnaques Mobile Money',
      author: 'CyberVigilant',
      date: '16 Mai 2025',
      replies: 24,
      views: 183
    },
    {
      id: 2,
      title: 'Comment sécuriser son compte Facebook',
      author: 'TechSafe',
      date: '14 Mai 2025',
      replies: 16,
      views: 142
    },
    {
      id: 3,
      title: 'Expérience avec le nouveau ransomware',
      author: 'InfoSecBenin',
      date: '10 Mai 2025',
      replies: 31,
      views: 267
    },
    {
      id: 4,
      title: 'Alerte: Nouveau phishing visant les banques locales',
      author: 'CyberAlert',
      date: '08 Mai 2025',
      replies: 19,
      views: 216
    }
  ]);
  
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Kofi Mensah',
      date: '15 Mai 2025',
      content: 'Cette ressource est excellente! J\'ai pu identifier une tentative de phishing grâce à vos conseils.',
      likes: 12,
      replies: []
    },
    {
      id: 2,
      author: 'Aminata Diallo',
      date: '13 Mai 2025',
      content: 'Est-ce que vous pourriez faire un article sur comment protéger les enfants en ligne? C\'est un sujet qui m\'inquiète.',
      likes: 8,
      replies: [
        {
          id: 21,
          author: 'ModérateurCyber',
          date: '14 Mai 2025',
          content: 'Merci pour votre suggestion Aminata! Nous préparons justement un dossier complet sur ce sujet qui sera publié la semaine prochaine.',
          likes: 5
        }
      ]
    }
  ]);

  const [diagnosticQuestions, setDiagnosticQuestions] = useState([
    {
      id: 1,
      question: 'Utilisez-vous le même mot de passe pour plusieurs comptes?',
      options: ['Oui', 'Non', 'Parfois'],
      answer: null
    },
    {
      id: 2,
      question: 'Avez-vous activé l\'authentification à deux facteurs sur vos comptes importants?',
      options: ['Oui', 'Non', 'Sur certains comptes seulement'],
      answer: null
    },
    {
      id: 3,
      question: 'Mettez-vous régulièrement à jour vos appareils et applications?',
      options: ['Oui, automatiquement', 'Oui, manuellement', 'Rarement', 'Jamais'],
      answer: null
    }
  ]);
  
  const [diagnosticScore, setDiagnosticScore] = useState<number | null>(null);
  const [diagnosticCompleted, setDiagnosticCompleted] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleModal = (content) => {
    setModalContent(content);
    setIsModalOpen(!isModalOpen);
  };
  
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };
  
  const sendChatMessage = () => {
    if (userMessage.trim() === '') return;
    
    setChatMessages([...chatMessages, { sender: 'user', text: userMessage }]);
    
    // Simulate bot response
    setTimeout(() => {
      let botResponse = "Je comprends votre préoccupation. Pour plus d'informations sur ce sujet, consultez notre section de ressources ou posez des questions plus spécifiques.";
      
      if (userMessage.toLowerCase().includes('phishing')) {
        botResponse = "Le phishing est une technique frauduleuse pour obtenir vos informations personnelles. Vérifiez toujours l'URL et ne cliquez pas sur des liens suspects. Consultez notre guide complet dans la section Ressources.";
      } else if (userMessage.toLowerCase().includes('mot de passe')) {
        botResponse = "Pour un mot de passe sécurisé, utilisez au moins 12 caractères avec des lettres, chiffres et symboles. Évitez les informations personnelles et utilisez un gestionnaire de mots de passe.";
      } else if (userMessage.toLowerCase().includes('mobile money') || userMessage.toLowerCase().includes('arnaque')) {
        botResponse = "Les arnaques Mobile Money sont fréquentes au Bénin. Ne partagez jamais votre code PIN, ignorez les demandes de transfert inattendues, et vérifiez toujours l'identité du destinataire. Consultez notre investigation sur ce sujet.";
      }
      
      setChatMessages(prevMessages => [...prevMessages, { sender: 'bot', text: botResponse }]);
    }, 1000);
    
    setUserMessage('');
  };
  
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    setIsNewsletterSubmitted(true);
    setTimeout(() => setIsNewsletterSubmitted(false), 3000);
  };
  
  const answerDiagnosticQuestion = (questionId, answerIndex) => {
    setDiagnosticQuestions(prevQuestions => 
      prevQuestions.map(q => 
        q.id === questionId ? { ...q, answer: answerIndex } : q
      )
    );
    
    // Check if all questions are answered
    const updatedQuestions = diagnosticQuestions.map(q => 
      q.id === questionId ? { ...q, answer: answerIndex } : q
    );
    
    const allAnswered = updatedQuestions.every(q => q.answer !== null);
    
    if (allAnswered) {
      // Calculate score (simplified example)
      let score = 0;
      updatedQuestions.forEach(q => {
        if (q.id === 1 && q.answer === 1) score += 33; // "Non" is secure
        if (q.id === 2 && q.answer === 0) score += 33; // "Oui" is secure
        if (q.id === 3 && (q.answer === 0 || q.answer === 1)) score += 34; // Regular updates are secure
      });
      
      setDiagnosticScore(score);
      setDiagnosticCompleted(true);
    }
  };
  
  const resetDiagnostic = () => {
    setDiagnosticQuestions(prevQuestions => 
      prevQuestions.map(q => ({ ...q, answer: null }))
    );
    setDiagnosticScore(null);
    setDiagnosticCompleted(false);
  };

  return (
    // <div className="community-container">
    //   <h2 className="section-title">Communauté & Interactivité</h2>
    //   <p className="section-description">
    //     Rejoignez notre communauté de cybersécurité pour partager vos expériences, 
    //     poser des questions et rester informé des dernières menaces numériques au Bénin.
    //   </p>
      
    //   <div className="tabs-container">
    //     <div className="tabs">
    //       <button 
    //         className={`tab-button ${activeTab === 'comments' ? 'active' : ''}`}
    //         onClick={() => handleTabChange('comments')}
    //       >
    //         <MessageCircle className="tab-icon" size={20} />
    //         Commentaires
    //       </button>
    //       <button 
    //         className={`tab-button ${activeTab === 'forum' ? 'active' : ''}`}
    //         onClick={() => handleTabChange('forum')}
    //       >
    //         <MessageSquare className="tab-icon" size={20} />
    //         Forum
    //       </button>
    //       <button 
    //         className={`tab-button ${activeTab === 'newsletter' ? 'active' : ''}`}
    //         onClick={() => handleTabChange('newsletter')}
    //       >
    //         <Mail className="tab-icon" size={20} />
    //         Newsletter
    //       </button>
    //       <button 
    //         className={`tab-button ${activeTab === 'groups' ? 'active' : ''}`}
    //         onClick={() => handleTabChange('groups')}
    //       >
    //         <Users className="tab-icon" size={20} />
    //         Groupes
    //       </button>
    //       <button 
    //         className={`tab-button ${activeTab === 'diagnostic' ? 'active' : ''}`}
    //         onClick={() => handleTabChange('diagnostic')}
    //       >
    //         <BarChart3 className="tab-icon" size={20} />
    //         Diagnostic
    //       </button>
    //     </div>
        
    //     <div className="tab-content">
    //       {activeTab === 'comments' && (
    //         <div className="comments-container">
    //           <h3>Commentaires récents</h3>
    //           <div className="comments-list">
    //             {comments.map(comment => (
    //               <div key={comment.id} className="comment">
    //                 <div className="comment-header">
    //                   <div className="comment-author">{comment.author}</div>
    //                   <div className="comment-date">{comment.date}</div>
    //                 </div>
    //                 <div className="comment-content">{comment.content}</div>
    //                 <div className="comment-actions">
    //                   <button className="like-button">
    //                     <ThumbsUp className="like-icon" size={16} /> {comment.likes}
    //                   </button>
    //                   <button className="reply-button" onClick={() => toggleModal(`Répondre à ${comment.author}`)}>
    //                     Répondre
    //                   </button>
    //                 </div>
                    
    //                 {comment.replies.length > 0 && (
    //                   <div className="comment-replies">
    //                     {comment.replies.map(reply => (
    //                       <div key={reply.id} className="reply">
    //                         <div className="comment-header">
    //                           <div className="comment-author">{reply.author}</div>
    //                           <div className="comment-date">{reply.date}</div>
    //                         </div>
    //                         <div className="comment-content">{reply.content}</div>
    //                         <div className="comment-actions">
    //                           <button className="like-button">
    //                             <ThumbsUp className="like-icon" size={16} /> {reply.likes}
    //                           </button>
    //                         </div>
    //                       </div>
    //                     ))}
    //                   </div>
    //                 )}
    //               </div>
    //             ))}
    //           </div>
    //           <div className="add-comment">
    //             <h4>Ajouter un commentaire</h4>
    //             <textarea 
    //               placeholder="Partagez votre expérience ou posez une question..." 
    //               className="comment-textarea"
    //             ></textarea>
    //             <button className="submit-button">Publier</button>
    //           </div>
    //         </div>
    //       )}
          
    //       {activeTab === 'forum' && (
    //         <div className="forum-container">
    //           <div className="forum-header">
    //             <h3>Forum de discussion</h3>
    //             <button className="new-topic-button" onClick={() => toggleModal('Créer un nouveau sujet')}>
    //               Nouveau sujet
    //             </button>
    //           </div>
    //           <div className="forum-topics">
    //             <div className="topic-header">
    //               <div className="topic-title-header">Sujet</div>
    //               <div className="topic-author-header">Auteur</div>
    //               <div className="topic-date-header">Date</div>
    //               <div className="topic-replies-header">Réponses</div>
    //               <div className="topic-views-header">Vues</div>
    //             </div>
    //             {forumTopics.map(topic => (
    //               <div key={topic.id} className="topic-row" onClick={() => toggleModal(`Voir le sujet: ${topic.title}`)}>
    //                 <div className="topic-title">{topic.title}</div>
    //                 <div className="topic-author">{topic.author}</div>
    //                 <div className="topic-date">{topic.date}</div>
    //                 <div className="topic-replies">{topic.replies}</div>
    //                 <div className="topic-views">{topic.views}</div>
    //               </div>
    //             ))}
    //           </div>
    //           <div className="forum-pagination">
    //             <button className="pagination-button active">1</button>
    //             <button className="pagination-button">2</button>
    //             <button className="pagination-button">3</button>
    //             <button className="pagination-button">Suivant</button>
    //           </div>
    //         </div>
    //       )}
          
    //       {activeTab === 'newsletter' && (
    //         <div className="newsletter-container">
    //           <div className="newsletter-content">
    //             <h3>Abonnez-vous à notre newsletter mensuelle</h3>
    //             <p>
    //               Restez informé des dernières menaces cybernétiques, recevez des conseils de sécurité 
    //               et soyez le premier à accéder à nos nouveaux contenus éducatifs.
    //             </p>
                
    //             <div className="newsletter-features">
    //               <div className="feature">
    //                 <div className="feature-icon"><AlertCircle size={24} /></div>
    //                 <div className="feature-text">Alertes de sécurité</div>
    //               </div>
    //               <div className="feature">
    //                 <div className="feature-icon"><FileText size={24} /></div>
    //                 <div className="feature-text">Guides exclusifs</div>
    //               </div>
    //               <div className="feature">
    //                 <div className="feature-icon"><BarChart3 size={24} /></div>
    //                 <div className="feature-text">Statistiques locales</div>
    //               </div>
    //             </div>
                
    //             <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
    //               <input 
    //                 type="email" 
    //                 placeholder="Votre adresse email" 
    //                 className="newsletter-input"
    //                 value={newsletterEmail}
    //                 onChange={(e) => setNewsletterEmail(e.target.value)}
    //                 required 
    //               />
    //               <button type="submit" className="newsletter-button">
    //                 S'abonner
    //               </button>
    //             </form>
                
    //             {isNewsletterSubmitted && (
    //               <div className="success-message">
    //                 Merci pour votre abonnement! Vérifiez votre email pour confirmer.
    //               </div>
    //             )}
                
    //             <div className="newsletter-archives">
    //               <h4>Archives des newsletters précédentes</h4>
    //               <ul className="archives-list">
    //                 <li><a href="#">Mai 2025: Nouvelles arnaques financières au Bénin</a></li>
    //                 <li><a href="#">Avril 2025: Sécurisez vos appareils mobiles</a></li>
    //                 <li><a href="#">Mars 2025: Protection contre la désinformation</a></li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       )}
          
    //       {activeTab === 'groups' && (
    //         <div className="groups-container">
    //           <div className="groups-section">
    //             <div className="group-card whatsapp">
    //               <div className="group-icon-container">
    //                 <Smartphone className="group-icon" size={36} />
    //               </div>
    //               <h3 className="group-title">Groupe WhatsApp d'Alertes</h3>
    //               <p className="group-description">
    //                 Rejoignez notre groupe WhatsApp pour recevoir des alertes en temps réel sur les 
    //                 menaces cybernétiques au Bénin et en Afrique de l'Ouest.
    //               </p>
    //               <ul className="group-features">
    //                 <li>Plus de 1,200 membres</li>
    //                 <li>Alertes vérifiées uniquement</li>
    //                 <li>Modération active</li>
    //               </ul>
    //               <a href="#" className="join-button whatsapp-button">
    //                 Rejoindre le groupe
    //               </a>
    //             </div>
                
    //             <div className="group-card telegram">
    //               <div className="group-icon-container">
    //                 <Send className="group-icon" size={36} />
    //               </div>
    //               <h3 className="group-title">Canal Telegram CyberBenin</h3>
    //               <p className="group-description">
    //                 Suivez notre canal Telegram pour des contenus éducatifs réguliers, des tutoriels 
    //                 et des analyses plus approfondies des incidents.
    //               </p>
    //               <ul className="group-features">
    //                 <li>Contenus exclusifs</li>
    //                 <li>Analyses techniques</li>
    //                 <li>Ressources téléchargeables</li>
    //               </ul>
    //               <a href="#" className="join-button telegram-button">
    //                 S'abonner au canal
    //               </a>
    //             </div>
    //           </div>
              
    //           <div className="community-guidelines">
    //             <h3>Règles de la communauté</h3>
    //             <ul className="guidelines-list">
    //               <li>Respectez tous les membres et leurs questions</li>
    //               <li>Ne partagez pas d'informations personnelles sensibles</li>
    //               <li>Vérifiez les informations avant de les partager</li>
    //               <li>Pas de promotion commerciale sans autorisation</li>
    //               <li>Signalez tout contenu suspect aux modérateurs</li>
    //             </ul>
    //           </div>
    //         </div>
    //       )}
          
    //       {activeTab === 'diagnostic' && (
    //         <div className="diagnostic-container">
    //           <h3>Diagnostic de Sécurité</h3>
    //           <p className="diagnostic-intro">
    //             Évaluez rapidement votre niveau de sécurité numérique en répondant à ces questions simples. 
    //             Recevez ensuite des recommandations personnalisées.
    //           </p>
              
    //           {!diagnosticCompleted ? (
    //             <div className="diagnostic-questions">
    //               {diagnosticQuestions.map((q, index) => (
    //                 <div key={q.id} className="question-card">
    //                   <div className="question-number">Question {index + 1}/3</div>
    //                   <div className="question-text">{q.question}</div>
    //                   <div className="question-options">
    //                     {q.options.map((option, optIndex) => (
    //                       <button 
    //                         key={optIndex}
    //                         className={`option-button ${q.answer === optIndex ? 'selected' : ''}`}
    //                         onClick={() => answerDiagnosticQuestion(q.id, optIndex)}
    //                       >
    //                         {option}
    //                       </button>
    //                     ))}
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //           ) : (
    //             <div className="diagnostic-results">
    //               <div className="score-circle">
    //                 <svg viewBox="0 0 36 36" className="score-chart">
    //                   <path
    //                     className="score-circle-bg"
    //                     d="M18 2.0845
    //                       a 15.9155 15.9155 0 0 1 0 31.831
    //                       a 15.9155 15.9155 0 0 1 0 -31.831"
    //                   />
    //                   <path
    //                     className="score-circle-fill"
    //                     strokeDasharray={`${diagnosticScore}, 100`}
    //                     d="M18 2.0845
    //                       a 15.9155 15.9155 0 0 1 0 31.831
    //                       a 15.9155 15.9155 0 0 1 0 -31.831"
    //                   />
    //                   <text x="18" y="20.35" className="score-text">
    //                     {diagnosticScore}%
    //                   </text>
    //                 </svg>
    //               </div>
                  
    //               <h4 className="results-title">
    //                 Votre niveau de sécurité: {
    //                     (diagnosticScore ?? 0) < 40 ? 'Vulnérable' : 
    //                     (diagnosticScore ?? 0) < 70 ? 'Moyen' : 'Bon'
    //                 }
    //               </h4>
                  
    //               <div className="recommendations">
    //                 <h4>Recommandations personnalisées:</h4>
    //                 <ul className="recommendations-list">
    //                   {(diagnosticScore ?? 0) < 70 && (
    //                     <li>Activez l'authentification à deux facteurs sur tous vos comptes importants</li>
    //                   )}
    //                   {(diagnosticScore ?? 0) < 50 && (
    //                     <li>Utilisez un gestionnaire de mots de passe pour créer des mots de passe uniques</li>
    //                   )}
    //                   {(diagnosticScore ?? 0) < 90 && (
    //                     <li>Configurez les mises à jour automatiques sur tous vos appareils</li>
    //                   )}
    //                   <li>Consultez notre guide complet sur la sécurité numérique de base</li>
    //                 </ul>
    //               </div>
                  
    //               <button className="reset-button" onClick={resetDiagnostic}>
    //                 Refaire le diagnostic
    //               </button>
    //             </div>
    //           )}
    //         </div>
    //       )}
    //     </div>
    //   </div>
      
    //   {isModalOpen && (
    //     <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
    //       <div className="modal-content" onClick={e => e.stopPropagation()}>
    //         <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
    //         <h3>{modalContent}</h3>
    //         <div className="modal-body">
    //           <p>Cette fonctionnalité sera bientôt disponible.</p>
    //         </div>
    //       </div>
    //     </div>
    //   )}
      
    //   <div className="chatbot-container">
    //     <button 
    //       className={`chatbot-toggle ${showChatbot ? 'active' : ''}`}
    //       onClick={toggleChatbot}
    //     >
    //       <Bot className="chatbot-icon" size={24} />
    //       {!showChatbot && <span>Assistant Cyber</span>}
    //     </button>
        
    //     {showChatbot && (
    //       <div className="chatbot-window">
    //         <div className="chatbot-header">
    //           <h3>Assistant CyberBenin</h3>
    //           <button className="close-chat" onClick={toggleChatbot}>×</button>
    //         </div>
    //         <div className="chat-messages">
    //           {chatMessages.map((msg, index) => (
    //             <div key={index} className={`chat-message ${msg.sender}`}>
    //               {msg.text}
    //             </div>
    //           ))}
    //         </div>
    //         <div className="chat-input">
    //           <input 
    //             type="text" 
    //             placeholder="Posez une question sur la cybersécurité..." 
    //             value={userMessage}
    //             onChange={(e) => setUserMessage(e.target.value)}
    //             onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
    //           />
    //           <button onClick={sendChatMessage}>Envoyer</button>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>

    <ComingSoon/>


  );
};

export default CommunityInteractivity;