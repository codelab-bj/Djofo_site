// // src/pages/HomePage.jsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const HomePage = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0 }} 
//       animate={{ opacity: 1 }} 
//       transition={{ duration: 0.5 }}
//       className="p-4"
//     >
//       <h1 className="text-4xl font-bold mb-4">Welcome to the Cybersecurity Awareness Platform</h1>
//       <p className="mb-6">Learn how to stay safe online and report scams effectively.</p>
//       <div className="flex space-x-4">
//         <button className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600">Report a Scam</button>
//         <button className="bg-green-500 text-white p-3 rounded hover:bg-green-600">Start Learning</button>
//       </div>
//     </motion.div>
//   );
// };

// export default HomePage;















// import React, { useState, useEffect } from "react";
// import { Bell, ChevronRight, Shield, BookOpen, FileText, Video, MessageCircle, AlertTriangle } from "lucide-react";
// import "../App.css"; // Assuming you have a global CSS file for styles
// export default function CyberSecurityHomepage() {
//   const [activeAlert, setActiveAlert] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Simulated latest content data
//   const latestContent = [
//     {
//       type: "article",
//       title: "Comment reconnaître les fausses nouvelles en ligne",
//       category: "Désinformation",
//       image: "/api/placeholder/600/400",
//       date: "15 Mai 2025"
//     },
//     {
//       type: "investigation",
//       title: "Analyse d'une arnaque Mobile Money à Cotonou",
//       category: "Arnaque Financière",
//       image: "/api/placeholder/600/400",
//       date: "10 Mai 2025"
//     },
//     {
//       type: "video",
//       title: "5 règles pour sécuriser votre compte Facebook",
//       category: "Protection de Compte",
//       image: "/api/placeholder/600/400",
//       date: "5 Mai 2025"
//     }
//   ];

//   // Active cyber threats data
//   const activeThreats = [
//     {
//       title: "Alerte: Campagne de phishing ciblant les utilisateurs MTN",
//       description: "Une nouvelle vague d'emails frauduleux prétendant provenir de MTN Bénin circule actuellement. Ne cliquez pas sur les liens demandant de mettre à jour vos informations.",
//     },
//     {
//       title: "Arnaque WhatsApp: Fausse promotion de recharge mobile",
//       description: "Des messages frauduleux offrant des recharges téléphoniques gratuites se propagent. Ne partagez jamais vos codes ou informations personnelles.",
//     },
//     {
//       title: "Attention: Faux site de l'administration fiscale",
//       description: "Un site imitant le portail des impôts du Bénin circule. Vérifiez toujours l'URL officielle avant de saisir vos identifiants.",
//     }
//   ];

//   // Categories for the thematic section
//   const categories = [
//     { name: "Désinformation", icon: <FileText size={24} />, color: "bg-blue-100 text-blue-600" },
//     { name: "Piratage", icon: <Shield size={24} />, color: "bg-red-100 text-red-600" },
//     { name: "Arnaques Financières", icon: <Bell size={24} />, color: "bg-yellow-100 text-yellow-600" },
//     { name: "Vol de Données", icon: <AlertTriangle size={24} />, color: "bg-purple-100 text-purple-600" },
//     { name: "Harcèlement en Ligne", icon: <MessageCircle size={24} />, color: "bg-green-100 text-green-600" },
//     { name: "Formation", icon: <BookOpen size={24} />, color: "bg-orange-100 text-orange-600" }
//   ];

//   // Auto-rotate alerts
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveAlert((prev) => (prev + 1) % activeThreats.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [activeThreats.length]);

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       {/* Navigation */}
//       <nav className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <div className="flex-shrink-0 flex items-center">
//                 <Shield className="h-8 w-8 text-indigo-600" />
//                 <span className="ml-2 text-xl font-bold text-gray-800">CyberSécurité Bénin</span>
//               </div>
//               <div className="hidden md:ml-8 md:flex md:space-x-8">
//                 <a href="#" className="text-indigo-600 border-b-2 border-indigo-600 px-1 pt-1 inline-flex items-center text-sm font-medium">
//                   Accueil
//                 </a>
//                 <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pt-1 inline-flex items-center text-sm font-medium">
//                   Articles
//                 </a>
//                 <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pt-1 inline-flex items-center text-sm font-medium">
//                   Formations
//                 </a>
//                 <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pt-1 inline-flex items-center text-sm font-medium">
//                   Enquêtes
//                 </a>
//                 <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pt-1 inline-flex items-center text-sm font-medium">
//                   Signalement
//                 </a>
//                 <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pt-1 inline-flex items-center text-sm font-medium">
//                   Communauté
//                 </a>
//               </div>
//             </div>
//             <div className="md:hidden flex items-center">
//               <button 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)} 
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
//               >
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="pt-2 pb-3 space-y-1">
//               <a href="#" className="bg-indigo-50 border-l-4 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 text-base font-medium">
//                 Accueil
//               </a>
//               <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
//                 Articles
//               </a>
//               <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
//                 Formations
//               </a>
//               <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
//                 Enquêtes
//               </a>
//               <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
//                 Signalement
//               </a>
//               <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
//                 Communauté
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <div className="relative bg-indigo-700">
//         <div className="absolute inset-0">
//           <img className="w-full h-full object-cover" src="/api/placeholder/1920/600" alt="Cybersecurity" />
//           <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply opacity-90" aria-hidden="true"></div>
//         </div>
//         <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
//           <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Protégez-vous en ligne</h1>
//           <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
//             Informez-vous, formez-vous et protégez-vous contre les risques numériques adaptés au contexte béninois et ouest-africain.
//           </p>
//           <div className="mt-10 flex flex-col sm:flex-row gap-4">
//             <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50">
//               Explorer nos ressources
//             </a>
//             <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 bg-opacity-60 hover:bg-opacity-70">
//               Signaler un incident
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Alert Banner */}
//       <div className="bg-red-500 text-white">
//         <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between flex-wrap">
//             <div className="w-0 flex-1 flex items-center">
//               <span className="flex p-2 rounded-lg bg-red-600">
//                 <AlertTriangle className="h-6 w-6 text-white" />
//               </span>
//               <p className="ml-3 font-medium truncate">
//                 <span>{activeThreats[activeAlert].title}</span>
//               </p>
//             </div>
//             <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
//               <a href="#alerts" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-600 bg-white hover:bg-red-50">
//                 En savoir plus
//               </a>
//             </div>
//             <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
//               <div className="flex -space-x-1 overflow-hidden">
//                 {activeThreats.map((_, idx) => (
//                   <div 
//                     key={idx} 
//                     className={`inline-block h-2 w-2 rounded-full ${idx === activeAlert ? "bg-white" : "bg-red-300"} cursor-pointer mx-1`}
//                     onClick={() => setActiveAlert(idx)}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
//         {/* Mission Section */}
//         <section className="mb-16">
//           <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
//             <div className="px-6 py-8 sm:p-10">
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                   <p className="text-lg text-gray-600">
//                     Notre plateforme est dédiée à la sensibilisation, l'information et la formation aux divers risques
//                     liés à l'utilisation d'Internet, adaptée au contexte béninois et ouest-africain.
//                   </p>
//                   <div className="mt-6">
//                     <a href="#" className="text-indigo-600 font-medium flex items-center">
//                       En savoir plus sur nous
//                       <ChevronRight className="ml-1 h-4 w-4" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="bg-indigo-50 rounded-lg p-4 flex flex-col items-center justify-center text-center">
//                     <Shield className="h-10 w-10 text-indigo-600 mb-2" />
//                     <h3 className="font-medium text-gray-900">Protection</h3>
//                     <p className="text-sm text-gray-500">Sécurité en ligne</p>
//                   </div>
//                   <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center justify-center text-center">
//                     <BookOpen className="h-10 w-10 text-blue-600 mb-2" />
//                     <h3 className="font-medium text-gray-900">Éducation</h3>
//                     <p className="text-sm text-gray-500">Formation pratique</p>
//                   </div>
//                   <div className="bg-green-50 rounded-lg p-4 flex flex-col items-center justify-center text-center">
//                     <FileText className="h-10 w-10 text-green-600 mb-2" />
//                     <h3 className="font-medium text-gray-900">Information</h3>
//                     <p className="text-sm text-gray-500">Contenu adapté</p>
//                   </div>
//                   <div className="bg-yellow-50 rounded-lg p-4 flex flex-col items-center justify-center text-center">
//                     <MessageCircle className="h-10 w-10 text-yellow-600 mb-2" />
//                     <h3 className="font-medium text-gray-900">Communauté</h3>
//                     <p className="text-sm text-gray-500">Entraide locale</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Latest Content Section */}
//         <section className="mb-16" id="latest-content">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">Contenu Récent</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {latestContent.map((content, index) => (
//               <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                 <div className="relative">
//                   <img className="h-48 w-full object-cover" src={content.image} alt={content.title} />
//                   <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 m-2 rounded-full text-xs font-medium">
//                     {content.type === "article" ? "Article" : content.type === "investigation" ? "Enquête" : "Vidéo"}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">{content.category}</div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">{content.title}</h3>
//                   <p className="text-sm text-gray-500 mb-4">{content.date}</p>
//                   <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
//                     Lire la suite
//                     <ChevronRight className="ml-1 h-4 w-4" />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-8 text-center">
//             <a href="#" className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
//               Voir tout notre contenu
//             </a>
//           </div>
//         </section>

//         {/* Active Threats Section */}
//         <section className="mb-16" id="alerts">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">Alertes Actuelles</h2>
//           <div className="space-y-4">
//             {activeThreats.map((threat, index) => (
//               <div key={index} className="bg-white overflow-hidden shadow-md rounded-lg border-l-4 border-red-500">
//                 <div className="px-4 py-5 sm:p-6">
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0">
//                       <AlertTriangle className="h-6 w-6 text-red-500" />
//                     </div>
//                     <div className="ml-3 w-0 flex-1">
//                       <h3 className="text-lg font-medium text-gray-900">{threat.title}</h3>
//                       <p className="mt-2 text-base text-gray-500">{threat.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Categories Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">Explorez par Thématique</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {categories.map((category, index) => (
//               <a 
//                 key={index} 
//                 href="#" 
//                 className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col items-center py-6"
//               >
//                 <div className={`rounded-full ${category.color} p-4`}>
//                   {category.icon}
//                 </div>
//                 <h3 className="mt-4 font-medium text-gray-900">{category.name}</h3>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* Training Section */}
//         <section className="mb-16">
//           <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl overflow-hidden shadow-xl">
//             <div className="px-6 py-12 sm:px-12 lg:px-16">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 <div>
//                   <h2 className="text-3xl font-bold text-white mb-4">Formez-vous gratuitement</h2>
//                   <p className="text-indigo-100 mb-6">
//                     Accédez à nos modules de formation sur la protection des données, la détection des fausses nouvelles, 
//                     la sécurité mobile, et bien plus encore.
//                   </p>
//                   <a 
//                     href="#" 
//                     className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
//                   >
//                     Découvrir nos formations
//                   </a>
//                 </div>
//                 <div className="hidden md:block">
//                   <img src="/api/placeholder/600/400" alt="Formation cybersécurité" className="rounded-lg shadow-lg" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Community Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">Rejoignez notre communauté</h2>
//           <div className="bg-white shadow-md rounded-xl overflow-hidden">
//             <div className="p-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-4">Pourquoi rejoindre ?</h3>
//                   <ul className="space-y-3">
//                     <li className="flex items-start">
//                       <div className="flex-shrink-0">
//                         <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       <p className="ml-3 text-base text-gray-700">Entraide et partage d'expériences</p>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="flex-shrink-0">
//                         <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       <p className="ml-3 text-base text-gray-700">Alertes en temps réel sur les menaces</p>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="flex-shrink-0">
//                         <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       <p className="ml-3 text-base text-gray-700">Accès à des ressources exclusives</p>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="flex-shrink-0">
//                         <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       <p className="ml-3 text-base text-gray-700">Webinaires et sessions de questions-réponses</p>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="bg-gray-50 rounded-lg p-6">
//                   <h3 className="text-xl font-semibold text-gray-900 mb-4">Inscrivez-vous à la newsletter</h3>
//                   <p className="text-gray-600 mb-4">
//                     Recevez les dernières actualités sur la cybersécurité au Bénin et en Afrique de l'Ouest.
//                   </p>
//                   <form className="mt-2">
//                     <div className="flex flex-col sm:flex-row gap-3">
//                       <input
//                         type="email"
//                         className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:flex-1 rounded-md border-gray-300 px-4 py-3"
//                         placeholder="Votre adresse email"
//                       />
//                       <button
//                         type="submit"
//                         className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
//                       >
//                         S'abonner
//                       </button>
//                     </div>
//                     <p className="mt-2 text-sm text-gray-500">
//                       Nous respectons votre vie privée. Désabonnez-vous à tout moment.
//                     </p>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Partners Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">Nos Partenaires</h2>
//           <div className="bg-white shadow-sm rounded-xl p-8">
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//               {[...Array(5)].map((_, i) => (
//                 <div key={i} className="flex justify-center items-center p-4">
//                   <div className="h-12 w-full bg-gray-200 rounded-md flex items-center justify-center">
//                     <span className="text-gray-400 font-medium">Partenaire {i+1}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-900">
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center">
//                 <Shield className="h-8 w-8 text-indigo-400" />
//                 <span className="ml-2 text-xl font-bold text-white">CyberSécurité Bénin</span>
//               </div>
//               <p className="mt-4 text-gray-300">
//                 Sensibiliser, informer et former aux risques liés à l'utilisation d'Internet.
//               </p>
//               <div className="mt-6 flex space-x-4">
//                 <a href="#" className="text-gray-400 hover:text-gray-300">
//                   <span className="sr-only">Facebook</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-gray-300">
//                   <span className="sr-only">Instagram</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3
//                                                .398.748.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.1 3.1 0 00-.748-1.15 3.1 3.1 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.882 0 1.44 1.44 0 012.882 0z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <div>
//               <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Ressources</h4>
//               <ul className="mt-4 space-y-2">
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Articles</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Formations</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Enquêtes</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Alertes</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">À propos</h4>
//               <ul className="mt-4 space-y-2">
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Notre mission</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Partenaires</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Équipe</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h4>
//               <ul className="mt-4 space-y-2">
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Aide</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Confidentialité</a></li>
//                 <li><a href="#" className="text-base text-gray-300 hover:text-white">Conditions d'utilisation</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
//             &copy; 2025 CyberSécurité Bénin. Tous droits réservés.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
// // export default CyberSecurityHomepage;












































// import React, { useState, useEffect } from "react";
// import { Bell, ChevronRight, Shield, BookOpen, FileText, Video, MessageCircle, AlertTriangle, Menu } from "lucide-react";
// import "../App.css"; // Import the CSS file
// import logoImage from '../images/Logo.png';
// import logoImage2 from '../images/Logo2.png';
// import Image1 from '../images/1.png';
// import Image2 from '../images/2.png';
// import Image3 from '../images/3.png';

// export default function CyberSecurityHomepage() {
//   const [activeAlert, setActiveAlert] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Simulated latest content data
//   const latestContent = [
//     {
//       type: "article",
//       title: "Comment reconnaître les fausses nouvelles en ligne",
//       category: "Désinformation",
//       image: {Image1},
//       date: "15 Mai 2025",
//     },
//     {
//       type: "investigation",
//       title: "Analyse d'une arnaque Mobile Money à Cotonou",
//       category: "Arnaque Financière",
//       image: {Image2},
//       date: "10 Mai 2025",
//     },
//     {
//       type: "video",
//       title: "5 règles pour sécuriser votre compte Facebook",
//       category: "Protection de Compte",
//       image: {Image3},
//       date: "5 Mai 2025",
//     },
//   ];

//   // Active cyber threats data
//   const activeThreats = [
//     {
//       title: "Alerte: Campagne de phishing ciblant les utilisateurs MTN",
//       description:
//         "Une nouvelle vague d'emails frauduleux prétendant provenir de MTN Bénin circule actuellement. Ne cliquez pas sur les liens demandant de mettre à jour vos informations.",
//     },
//     {
//       title: "Arnaque WhatsApp: Fausse promotion de recharge mobile",
//       description:
//         "Des messages frauduleux offrant des recharges téléphoniques gratuites se propagent. Ne partagez jamais vos codes ou informations personnelles.",
//     },
//     {
//       title: "Attention: Faux site de l'administration fiscale",
//       description:
//         "Un site imitant le portail des impôts du Bénin circule. Vérifiez toujours l'URL officielle avant de saisir vos identifiants.",
//     },
//   ];

//   // Categories for the thematic section
//   const categories = [
//     { name: "Désinformation", icon: <FileText size={24} />, color: "blue" },
//     { name: "Piratage", icon: <Shield size={24} />, color: "red" },
//     { name: "Arnaques Financières", icon: <Bell size={24} />, color: "yellow" },
//     { name: "Vol de Données", icon: <AlertTriangle size={24} />, color: "purple" },
//     { name: "Harcèlement en Ligne", icon: <MessageCircle size={24} />, color: "green" },
//     { name: "Formation", icon: <BookOpen size={24} />, color: "orange" },
//   ];

//   // Auto-rotate alerts
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveAlert((prev) => (prev + 1) % activeThreats.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [activeThreats.length]);

//   return (
//     <div className="min-h-screen">
//       {/* Navigation */}
//       <nav className="nav">
//         <div className="nav-container">
//           <div className="nav-content">
//             <div className="nav-logo">
//               <img src={logoImage2} className="feature-icon" alt="Cybersecurity" />
//               <span className="nav-logo-text">CyberSécurité Bénin</span>
//             </div>
//             <div className="nav-links">
//               <a href="/" className="active">
//                 Accueil
//               </a>
//               <a href="/content">Centre de contenu</a>
//               <a href="/reportcourse">Formation en ligne</a>
//               <a href="/community">Communauté</a>
//               <a href="/investigation">Enquêtes</a>
//             </div>
//             <div className="nav-mobile-toggle">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="nav-mobile-toggle"
//               >
//                 {/* <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg> */}
//                 <Menu />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="nav-mobile-menu">
//             <div className="nav-mobile-menu">
//               <a href="/" className="active">
//                 Accueil
//               </a>
//               <a href="/content">Centre de contenu</a>
//               <a href="/reportcourse">Formation en ligne</a>
//               <a href="/community">Communauté</a>
//               <a href="/investigation">Enquêtes</a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <div className="hero">
//         <div className="hero-overlay">
//           <img src={logoImage} alt="Cybersecurity" />
//           <div className="hero-overlay-dark" aria-hidden="true"></div>
//         </div>
//         <div className="hero-content">
//           <h1 className="hero-title">Protégez-vous en ligne</h1>
//           <p className="hero-text">
//             Informez-vous, formez-vous et protégez-vous contre les risques
//             numériques adaptés au contexte béninois et ouest-africain.
//           </p>
//           <div className="hero-buttons">
//             <a href="#" className="hero-button hero-button-primary">
//               Explorer nos ressources
//             </a>
//             <a href="/report" className="hero-button hero-button-secondary">
//               Signaler un incident
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Alert Banner */}
//       {/* <div className="alert-banner">
//         <div className="alert-container">
//           <div className="alert-content">
//             <div className="alert-icon">
//               <AlertTriangle className="h-6 w-6 text-white" />
//             </div>
//             <p className="alert-text">
//               <span>{activeThreats[activeAlert].title}</span>
//             </p>
//             <div className="alert-button">
//               <a href="#alerts" className="alert-button">
//                 En savoir plus
//               </a>
//             </div>
//             <div className="alert-dots">
//               {activeThreats.map((_, idx) => (
//                 <div
//                   key={idx}
//                   className={`alert-dot ${idx === activeAlert ? "active" : "inactive"}`}
//                   onClick={() => setActiveAlert(idx)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div> */}

//       {/* Main Content */}
//       <main className="main">
//         {/* Mission Section */}
//         <section className="mission-section">
//           <div className="mission-card">
//             <div className="mission-content">
//               <h2 className="mission-title">Notre Mission</h2>
//               <div className="mission-grid">
//                 <div>
//                   <p className="mission-text">
//                     Notre plateforme est dédiée à la sensibilisation, l'information
//                     et la formation aux divers risques liés à l'utilisation
//                     d'Internet, adaptée au contexte béninois et ouest-africain.
//                   </p>
//                   <div className="mission-link">
//                     <a href="#" className="mission-link">
//                       En savoir plus sur nous
//                       <ChevronRight className="mission-link-icon" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="mission-features">
//                   <div className="feature-card indigo">
//                     <Shield className="feature-icon indigo" />
//                     <h3 className="feature-title">Protection</h3>
//                     <p className="feature-text">Sécurité en ligne</p>
//                   </div>
//                   <div className="feature-card blue">
//                     <BookOpen className="feature-icon blue" />
//                     <h3 className="feature-title">Éducation</h3>
//                     <p className="feature-text">Formation pratique</p>
//                   </div>
//                   <div className="feature-card green">
//                     <FileText className="feature-icon green" />
//                     <h3 className="feature-title">Information</h3>
//                     <p className="feature-text">Contenu adapté</p>
//                   </div>
//                   <div className="feature-card yellow">
//                     <MessageCircle className="feature-icon yellow" />
//                     <h3 className="feature-title">Communauté</h3>
//                     <p className="feature-text">Entraide locale</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Latest Content Section */}
//         <section className="latest-content" id="latest-content">
//           <h2 className="latest-title">Contenu Récent</h2>
//           <div className="content-grid">
//             {latestContent.map((content, index) => (
//               <div key={index} className="content-card">
//                 <div className="content-image">
//                   <img src={Image1} alt={content.title} />
//                   <div className="content-badge">
//                     {content.type === "article"
//                       ? "Article"
//                       : content.type === "investigation"
//                       ? "Enquête"
//                       : "Vidéo"}
//                   </div>
//                 </div>
//                 <div className="content-body">
//                   <div className="content-category">{content.category}</div>
//                   <h3 className="content-title">{content.title}</h3>
//                   <p className="content-date">{content.date}</p>
//                   <a href="#" className="content-link">
//                     Lire la suite
//                     <ChevronRight className="content-link-icon" />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="content-more">
//             <a href="#" className="content-more-button">
//               Voir tout notre contenu
//             </a>
//           </div>
//         </section>

//         {/* Active Threats Section */}
//         <section className="threats-section" id="alerts">
//           <h2 className="threats-title">Alertes Actuelles</h2>
//           <div className="threats-list">
//             {activeThreats.map((threat, index) => (
//               <div key={index} className="threat-card">
//                 <div className="threat-content">
//                   <div className="threat-inner">
//                     <div className="threat-icon">
//                       <AlertTriangle className="threat-icon" />
//                     </div>
//                     <div className="threat-body">
//                       <h3 className="threat-title">{threat.title}</h3>
//                       <p className="threat-description">{threat.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Categories Section */}
//         <section className="categories-section">
//           <h2 className="categories-title">Explorez par Thématique</h2>
//           <div className="categories-grid">
//             {categories.map((category, index) => (
//               <a key={index} href="#" className="category-card">
//                 <div className={`category-icon ${category.color}`}>
//                   {category.icon}
//                 </div>
//                 <h3 className="category-title">{category.name}</h3>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* Training Section */}
//         <section className="training-section">
//           <div className="training-card">
//             <div className="training-content">
//               <div className="training-grid">
//                 <div>
//                   <h2 className="training-title">Formez-vous gratuitement</h2>
//                   <p className="training-text">
//                     Accédez à nos modules de formation sur la protection des
//                     données, la détection des fausses nouvelles, la sécurité
//                     mobile, et bien plus encore.
//                   </p>
//                   <a href="#" className="training-button">
//                     Découvrir nos formations
//                   </a>
//                 </div>
//                 <div className="training-image">
//                   <img
//                     src={"/api/placeholder/600/400"}
//                     alt="Formation cybersécurité"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Community Section */}
//         <section className="community-section">
//           <h2 className="community-title">Rejoignez notre communauté</h2>
//           <div className="community-card">
//             <div className="community-content">
//               <div className="community-grid">
//                 <div>
//                   <h3 className="community-subtitle">Pourquoi rejoindre ?</h3>
//                   <ul className="community-list">
//                     <li className="community-item">
//                       <div className="community-item-icon">
//                         <svg
//                           className="h-6 w-6 text-green-500"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                       <p className="community-item-text">
//                         Entraide et partage d'expériences
//                       </p>
//                     </li>
//                     <li className="community-item">
//                       <div className="community-item-icon">
//                         <svg
//                           className="h-6 w-6 text-green-500"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                       <p className="community-item-text">
//                         Alertes en temps réel sur les menaces
//                       </p>
//                     </li>
//                     <li className="community-item">
//                       <div className="community-item-icon">
//                         <svg
//                           className="h-6 w-6 text-green-500"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                       <p className="community-item-text">
//                         Accès à des ressources exclusives
//                       </p>
//                     </li>
//                     <li className="community-item">
//                       <div className="community-item-icon">
//                         <svg
//                           className="h-6 w-6 text-green-500"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                       <p className="community-item-text">
//                         Webinaires et sessions de questions-réponses
//                       </p>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="newsletter-card">
//                   <h3 className="community-subtitle">
//                     Inscrivez-vous à la newsletter
//                   </h3>
//                   <p className="newsletter-text">
//                     Recevez les dernières actualités sur la cybersécurité au Bénin
//                     et en Afrique de l'Ouest.
//                   </p>
//                   <form className="newsletter-form">
//                     <div className="newsletter-input-group">
//                       <input
//                         type="email"
//                         className="newsletter-input"
//                         placeholder="Votre adresse email"
//                       />
//                       <button type="submit" className="newsletter-button">
//                         S'abonner
//                       </button>
//                     </div>
//                     <p className="newsletter-note">
//                       Nous respectons votre vie privée. Désabonnez-vous à tout
//                       moment.
//                     </p>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Partners Section */}
//         <section className="partners-section">
//           <h2 className="partners-title">Nos Partenaires</h2>
//           <div className="partners-card">
//             <div className="partners-grid">
//               {[...Array(5)].map((_, i) => (
//                 <div key={i} className="partner-logo">
//                   <div className="partner-placeholder">
//                     <span>Partenaire {i + 1}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-grid">
//             <div>
//               <div className="footer-logo">
//                 <Shield className="footer-logo-icon" />
//                 <span className="footer-logo-text">CyberSécurité Bénin</span>
//               </div>
//               <p className="footer-text">
//                 Sensibiliser, informer et former aux risques liés à l'utilisation
//                 d'Internet.
//               </p>
//               <div className="footer-social">
//                 <a href="#" className="footer-social-link">
//                   <span className="sr-only">Facebook</span>
//                   <svg
//                     className="h-6 w-6"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </a>
//                 <a href="#" className="footer-social-link">
//                   <span className="sr-only">Instagram</span>
//                   <svg
//                     className="h-6 w-6"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v-.468c0-2.456.011-2.784.058-3.807-.045-.975-.207-1.504-.344-1.857a3.1 3.1 0 00-.748-1.15 3.1 3.1 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.882 0 1.44 1.44 0 012.882 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <div>
//               <h4 className="footer-section-title">Ressources</h4>
//               <ul className="footer-links">
//                 <li>
//                   <a href="#">Articles</a>
//                 </li>
//                 <li>
//                   <a href="#">Formations</a>
//                 </li>
//                 <li>
//                   <a href="#">Enquêtes</a>
//                 </li>
//                 <li>
//                   <a href="#">Alertes</a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="footer-section-title">À propos</h4>
//               <ul className="footer-links">
//                 <li>
//                   <a href="#">Notre mission</a>
//                 </li>
//                 <li>
//                   <a href="#">Partenaires</a>
//                 </li>
//                 <li>
//                   <a href="#">Équipe</a>
//                 </li>
//                 <li>
//                   <a href="#">Contact</a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="footer-section-title">Support</h4>
//               <ul className="footer-links">
//                 <li>
//                   <a href="#">Aide</a>
//                 </li>
//                 <li>
//                   <a href="#">Confidentialité</a>
//                 </li>
//                 <li>
//                   <a href="#">Conditions d'utilisation</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="footer-bottom">
//             © 2025 CyberSécurité Bénin. Tous droits réservés.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }











































import "../App.css"; // Import the CSS file
import Hero from "../components/Hero"
import Mission from '../components/Mission.tsx'
import Podcast from '../components/Podcast.tsx'
import LatestContent from '../components/Latest_Content.tsx'
import ActiveThreats from '../components/ActiveThreats.tsx'
import Categories from '../components/Categories.tsx'
import Training from '../components/Training.tsx'
import Community from '../components/Community.tsx'
import Partners from '../components/Partners.tsx'
import Footer from '../components/Footer.tsx'
import ComingSoon from "../components/ComingSoon.tsx";


export default function CyberSecurityHomepage() {
 return (
    <div className="homepage">
       <Hero/>

      {/* Main Content */}
      <main className="main-content">
        {/* Mission Section */}
        <Mission />

        {/* Podcast Section */}
        <Podcast />
        

        {/* Latest Content Section */}
        <LatestContent />
        
        
        {/* Active Threats Section */}
        <ActiveThreats />
        

        {/* Categories Section */}
        <Categories />
        

        <ComingSoon/>

        {/* Training Section */}
        {/* <Training /> */}
        

        {/* Community Section */}
        {/* <Community /> */}
        

        {/* Partners Section */}
        {/* <Partners/> */}
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}