// import { useState, useEffect, JSX } from "react";
// import { Search, Book, Video, Headphones, Download, Play, ChevronRight, Info, Shield, DollarSign, User, Mail, Lock, AlertTriangle, Clock, Users } from "lucide-react";

// // Define our content item type
// interface ContentItem {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   type: string;
//   image: string;
//   featured: boolean;
//   date: string;
// }

// export default function ContentHub() {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);
  
//   // Content data
//   const contentData: ContentItem[] = [
//     {
//       id: 1,
//       title: "Comment reconnaître les fausses nouvelles",
//       description: "Un guide pratique pour identifier la désinformation en ligne",
//       category: "disinformation",
//       type: "article",
//       image: "/api/placeholder/400/250",
//       featured: true,
//       date: "2025-05-10"
//     },
//     {
//       id: 2,
//       title: "Se protéger des arnaques Mobile Money",
//       description: "Techniques utilisées par les escrocs et comment les éviter",
//       category: "financial",
//       type: "video",
//       image: "/api/placeholder/400/250",
//       featured: true,
//       date: "2025-05-08"
//     },
//     {
//       id: 3,
//       title: "Que faire si mon compte Facebook est piraté ?",
//       description: "Guide étape par étape pour récupérer votre compte",
//       category: "hacking",
//       type: "guide",
//       image: "/api/placeholder/400/250",
//       featured: false,
//       date: "2025-05-05"
//     },
//     {
//       id: 4,
//       title: "Les arnaques aux cryptomonnaies au Bénin",
//       description: "Analyse d'un faux projet d'investissement récent",
//       category: "financial",
//       type: "investigation",
//       image: "/api/placeholder/400/250",
//       featured: false,
//       date: "2025-04-30"
//     },
//     {
//       id: 5,
//       title: "5 règles pour une utilisation sûre d'Internet à la maison",
//       description: "Protégez votre famille avec ces conseils simples",
//       category: "safety",
//       type: "animation",
//       image: "/api/placeholder/400/250",
//       featured: true,
//       date: "2025-04-28"
//     },
//     {
//       id: 6,
//       title: "Comprendre le phishing et comment l'éviter",
//       description: "Les pièges à reconnaître pour protéger vos données",
//       category: "phishing",
//       type: "podcast",
//       image: "/api/placeholder/400/250",
//       featured: false,
//       date: "2025-04-25"
//     },
//     {
//       id: 7,
//       title: "Protection contre les ransomwares",
//       description: "Guide complet pour protéger vos fichiers personnels",
//       category: "ransomware",
//       type: "article",
//       image: "/api/placeholder/400/250",
//       featured: false,
//       date: "2025-04-20"
//     },
//     {
//       id: 8,
//       title: "Cyberharcèlement au Bénin",
//       description: "Témoignages et solutions pour les victimes",
//       category: "harassment",
//       type: "podcast",
//       image: "/api/placeholder/400/250",
//       featured: false,
//       date: "2025-04-15"
//     }
//   ];

//   // Categories
//   interface Category {
//     id: string;
//     name: string;
//     icon: JSX.Element;
//   }
  
//   const categories: Category[] = [
//     { id: "all", name: "Tout le contenu", icon: <Info /> },
//     { id: "disinformation", name: "Désinformation", icon: <AlertTriangle /> },
//     { id: "hacking", name: "Piratage", icon: <Shield /> },
//     { id: "financial", name: "Arnaques financières", icon: <DollarSign /> },
//     { id: "phishing", name: "Phishing", icon: <Mail /> },
//     { id: "ransomware", name: "Ransomware", icon: <Lock /> },
//     { id: "harassment", name: "Harcèlement en ligne", icon: <Users /> },
//     { id: "safety", name: "Sécurité générale", icon: <Shield /> }
//   ];

//   // Content types with icons
//   const contentTypes: Record<string, JSX.Element> = {
//     article: <Book className="h-5 w-5" />,
//     video: <Video className="h-5 w-5" />,
//     podcast: <Headphones className="h-5 w-5" />,
//     guide: <Book className="h-5 w-5" />,
//     animation: <Play className="h-5 w-5" />,
//     investigation: <Search className="h-5 w-5" />
//   };

//   // Filter content based on active category and search query
//   useEffect(() => {
//     let filtered = contentData;
    
//     if (activeCategory !== "all") {
//       filtered = filtered.filter(item => item.category === activeCategory);
//     }
    
//     if (searchQuery) {
//       const query = searchQuery.toLowerCase();
//       filtered = filtered.filter(
//         item => item.title.toLowerCase().includes(query) || 
//                item.description.toLowerCase().includes(query)
//       );
//     }
    
//     setFilteredContent(filtered);
//   }, [activeCategory, searchQuery]);

//   // Function to get featured content
//   const getFeaturedContent = (): ContentItem[] => {
//     return contentData.filter(item => item.featured);
//   };

//   // Format date
//   const formatDate = (dateString: string): string => {
//     const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('fr-FR', options);
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Hero Section */}
//       <div className="bg-blue-600 text-white">
//         <div className="container mx-auto px-4 py-16 md:py-24">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Centre de Ressources</h1>
//           <p className="text-xl md:text-2xl mb-8 max-w-3xl">
//             Retrouvez tous nos articles, guides et ressources pour vous protéger contre les menaces numériques
//           </p>
//           <div className="relative max-w-xl">
//             <input
//               type="text"
//               placeholder="Rechercher un contenu..."
//               className="w-full px-5 py-4 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute right-4 top-4 text-gray-500" />
//           </div>
//         </div>
//       </div>
      
//       {/* Featured Section */}
//       {(!searchQuery && activeCategory === "all") && (
//         <div className="container mx-auto px-4 py-12">
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Contenu à la une</h2>
//             <button className="flex items-center text-blue-600 font-medium hover:text-blue-800">
//               Voir tout <ChevronRight className="ml-1 h-5 w-5" />
//             </button>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {getFeaturedContent().map(item => (
//               <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                 <div className="relative">
//                   <img 
//                     src={item.image} 
//                     alt={item.title} 
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
//                     {item.type}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center mb-3 text-sm text-gray-500">
//                     <Clock className="h-4 w-4 mr-1" />
//                     <span>{formatDate(item.date)}</span>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
//                   <p className="text-gray-600 mb-4">{item.description}</p>
//                   <button className="text-blue-600 font-medium flex items-center hover:text-blue-800">
//                     Lire plus <ChevronRight className="ml-1 h-5 w-5" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
      
//       {/* Categories and Content */}
//       <div className="container mx-auto px-4 py-8 md:py-12">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Categories Sidebar */}
//           <div className="md:w-1/4">
//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h3 className="text-xl font-bold text-gray-800 mb-6">Catégories</h3>
//               <ul className="space-y-2">
//                 {categories.map(category => (
//                   <li key={category.id}>
//                     <button
//                       onClick={() => setActiveCategory(category.id)}
//                       className={`w-full flex items-center p-3 rounded-lg transition-colors ${
//                         activeCategory === category.id
//                           ? "bg-blue-100 text-blue-700"
//                           : "text-gray-700 hover:bg-gray-100"
//                       }`}
//                     >
//                       <span className="mr-3">{category.icon}</span>
//                       <span className="font-medium">{category.name}</span>
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             <div className="bg-white rounded-xl shadow-md p-6 mt-6">
//               <h3 className="text-xl font-bold text-gray-800 mb-6">Types de contenu</h3>
//               <div className="grid grid-cols-2 gap-3">
//                 <div className="bg-gray-100 rounded-lg p-3 flex flex-col items-center text-center">
//                   <Book className="h-6 w-6 text-blue-600 mb-2" />
//                   <span className="text-sm font-medium">Articles</span>
//                 </div>
//                 <div className="bg-gray-100 rounded-lg p-3 flex flex-col items-center text-center">
//                   <Video className="h-6 w-6 text-blue-600 mb-2" />
//                   <span className="text-sm font-medium">Vidéos</span>
//                 </div>
//                 <div className="bg-gray-100 rounded-lg p-3 flex flex-col items-center text-center">
//                   <Headphones className="h-6 w-6 text-blue-600 mb-2" />
//                   <span className="text-sm font-medium">Podcasts</span>
//                 </div>
//                 <div className="bg-gray-100 rounded-lg p-3 flex flex-col items-center text-center">
//                   <Download className="h-6 w-6 text-blue-600 mb-2" />
//                   <span className="text-sm font-medium">PDF</span>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Content List */}
//           <div className="md:w-3/4">
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//                 {categories.find(c => c.id === activeCategory)?.name || "Tout le contenu"}
//               </h2>
//               <div className="text-gray-600">
//                 {filteredContent.length} ressource{filteredContent.length !== 1 ? 's' : ''}
//               </div>
//             </div>
            
//             {filteredContent.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {filteredContent.map(item => (
//                   <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                     <div className="flex h-full">
//                       <div className="w-1/3">
//                         <img 
//                           src={item.image} 
//                           alt={item.title} 
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="w-2/3 p-5">
//                         <div className="flex items-center space-x-3 mb-3">
//                           <span className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
//                             {contentTypes[item.type]}
//                             <span className="ml-1 capitalize">{item.type}</span>
//                           </span>
//                           <span className="text-xs text-gray-500">{formatDate(item.date)}</span>
//                         </div>
//                         <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
//                         <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
//                         <button className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-800">
//                           Lire plus <ChevronRight className="ml-1 h-4 w-4" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="bg-white rounded-xl shadow-md p-12 text-center">
//                 <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">Aucun résultat trouvé</h3>
//                 <p className="text-gray-600">
//                   Aucun contenu ne correspond à votre recherche. Essayez avec d'autres termes ou catégories.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


















// import { useState, useEffect, JSX } from "react";
// import { Search, Book, Video, Headphones, Play, ChevronRight, Info, Shield, DollarSign, Mail, Lock, AlertTriangle, Clock, Users } from "lucide-react";
// import "./ContentHub.css"; // Import the CSS file
// import image from "../../images/6.jpg";
// import image1 from "../../images/4.jpg";
// import image2 from "../../images/7.jpg";
// import image3 from "../../images/8.jpg";
// import image4 from "../../images/9.jpg";
// import image5 from "../../images/10.jpg";
// import image6 from "../../images/11.jpg";
// import image7 from "../../images/12.jpg";
// import image8 from "../../images/13.jpg";
// import Footer from "../../components/Footer.tsx";

// // Define our content item type
// interface ContentItem {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   type: string;
//   image: string;
//   featured: boolean;
//   date: string;
// }

// export default function ContentHub() {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);
  
//   // Content data
//   const contentData: ContentItem[] = [
//     {
//       id: 1,
//       title: "Comment reconnaître les fausses nouvelles",
//       description: "Un guide pratique pour identifier la désinformation en ligne",
//       category: "disinformation",
//       type: "article",
//       image: image,
//       featured: true,
//       date: "2025-05-10"
//     },
//     {
//       id: 2,
//       title: "Se protéger des arnaques Mobile Money",
//       description: "Techniques utilisées par les escrocs et comment les éviter",
//       category: "financial",
//       type: "video",
//       image: image1,
//       featured: true,
//       date: "2025-05-08"
//     },
//     {
//       id: 3,
//       title: "Que faire si mon compte Facebook est piraté ?",
//       description: "Guide étape par étape pour récupérer votre compte",
//       category: "hacking",
//       type: "guide",
//       image: image2,
//       featured: false,
//       date: "2025-05-05"
//     },
//     {
//       id: 4,
//       title: "Les arnaques aux cryptomonnaies au Bénin",
//       description: "Analyse d'un faux projet d'investissement récent",
//       category: "financial",
//       type: "investigation",
//       image: image3,
//       featured: false,
//       date: "2025-04-30"
//     },
//     {
//       id: 5,
//       title: "5 règles pour une utilisation sûre d'Internet à la maison",
//       description: "Protégez votre famille avec ces conseils simples",
//       category: "safety",
//       type: "animation",
//       image: image4,
//       featured: true,
//       date: "2025-04-28"
//     },
//     {
//       id: 6,
//       title: "Comprendre le phishing et comment l'éviter",
//       description: "Les pièges à reconnaître pour protéger vos données",
//       category: "phishing",
//       type: "podcast",
//       image: image5,
//       featured: false,
//       date: "2025-04-25"
//     },
//     {
//       id: 7,
//       title: "Protection contre les ransomwares",
//       description: "Guide complet pour protéger vos fichiers personnels",
//       category: "ransomware",
//       type: "article",
//       image: image6,
//       featured: false,
//       date: "2025-04-20"
//     },
//     {
//       id: 8,
//       title: "Cyberharcèlement au Bénin",
//       description: "Témoignages et solutions pour les victimes",
//       category: "harassment",
//       type: "podcast",
//       image: image7,
//       featured: false,
//       date: "2025-04-15"
//     }
//   ];

//   // Categories
//   interface Category {
//     id: string;
//     name: string;
//     icon: JSX.Element;
//   }
  
//   const categories: Category[] = [
//     { id: "all", name: "Tout le contenu", icon: <Info /> },
//     { id: "disinformation", name: "Désinformation", icon: <AlertTriangle /> },
//     { id: "hacking", name: "Piratage", icon: <Shield /> },
//     { id: "financial", name: "Arnaques financières", icon: <DollarSign /> },
//     { id: "phishing", name: "Phishing", icon: <Mail /> },
//     { id: "ransomware", name: "Ransomware", icon: <Lock /> },
//     { id: "harassment", name: "Harcèlement en ligne", icon: <Users /> },
//     { id: "safety", name: "Sécurité générale", icon: <Shield /> }
//   ];

//   // Content types with icons
//   const contentTypes: Record<string, JSX.Element> = {
//     article: <Book className="icon-small" />,
//     video: <Video className="icon-small" />,
//     podcast: <Headphones className="icon-small" />,
//     guide: <Book className="icon-small" />,
//     animation: <Play className="icon-small" />,
//     investigation: <Search className="icon-small" />
//   };

//   // Filter content based on active category and search query
//   useEffect(() => {
//     let filtered = contentData;
    
//     if (activeCategory !== "all") {
//       filtered = filtered.filter(item => item.category === activeCategory);
//     }
    
//     if (searchQuery) {
//       const query = searchQuery.toLowerCase();
//       filtered = filtered.filter(
//         item => item.title.toLowerCase().includes(query) || 
//                item.description.toLowerCase().includes(query)
//       );
//     }
    
//     setFilteredContent(filtered);
//   }, [activeCategory, searchQuery]);

//   // Function to get featured content
//   const getFeaturedContent = (): ContentItem[] => {
//     return contentData.filter(item => item.featured);
//   };

//   // Format date
//   const formatDate = (dateString: string): string => {
//     const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('fr-FR', options);
//   };
//   // 

//   return (
//     <div className="content-hub">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="container">
//           <h1 className="hero-title">Centre de Ressources</h1>
//           <p className="hero-subtitle">
//             Retrouvez tous nos articles, guides et ressources pour vous protéger contre les menaces numériques
//           </p>
//           <div className="search-container">
//             <input
//               type="text"
//               placeholder="Rechercher un contenu..."
//               className="search-input"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="search-icon" />
//           </div>
//         </div>
//       </div>
      
//       {/* Featured Section */}
//       {(!searchQuery && activeCategory === "all") && (
//         <div className="container section">
//           <div className="section-header">
//             <h2 className="section-title">Contenu à la une</h2>
//             <button className="view-all-button">
//               Voir tout <ChevronRight className="icon-small" />
//             </button>
//           </div>
          
//           <div className="featured-grid">
//             {getFeaturedContent().map(item => (
//               <div key={item.id} className="featured-card">
//                 <div className="featured-image-container">
//                   <img 
//                     src={item.image} 
//                     alt={item.title} 
//                     className="featured-image"
//                   />
//                   <div className="content-type-badge">
//                     {item.type}
//                   </div>
//                 </div>
//                 <div className="featured-content">
//                   <div className="date-info">
//                     <Clock className="icon-tiny" />
//                     <span>{formatDate(item.date)}</span>
//                   </div>
//                   <h3 className="featured-title">{item.title}</h3>
//                   <p className="featured-description">{item.description}</p>
//                   <button className="read-more-link">
//                     Lire plus <ChevronRight className="icon-tiny" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
      
//       {/* Categories and Content */}
//       <div className="container section">
//         <div className="main-content">
//           {/* Categories Sidebar */}
//           <div className="sidebar">
//             <div className="sidebar-widget">
//               <h3 className="widget-title">Catégories</h3>
//               <ul className="category-list">
//                 {categories.map(category => (
//                   <li key={category.id}>
//                     <button
//                       onClick={() => setActiveCategory(category.id)}
//                       className={`category-button ${
//                         activeCategory === category.id
//                           ? "category-button-active"
//                           : ""
//                       }`}
//                     >
//                       <span className="category-icon">{category.icon}</span>
//                       <span className="category-name">{category.name}</span>
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             {/* <div className="sidebar-widget">
//               <h3 className="widget-title">Types de contenu</h3>
//               <div className="content-types-grid">
//                 <div className="content-type-item">
//                   <Book className="content-type-icon" />
//                   <span className="content-type-label">Articles</span>
//                 </div>
//                 <div className="content-type-item">
//                   <Video className="content-type-icon" />
//                   <span className="content-type-label">Vidéos</span>
//                 </div>
//                 <div className="content-type-item">
//                   <Headphones className="content-type-icon" />
//                   <span className="content-type-label">Podcasts</span>
//                 </div>
//                 <div className="content-type-item">
//                   <Download className="content-type-icon" />
//                   <span className="content-type-label">PDF</span>
//                 </div>
//               </div>
//             </div> */}
//           </div>
          
//           {/* Content List */}
//           <div className="content-area">
//             <div className="content-header">
//               <h2 className="content-title">
//                 {categories.find(c => c.id === activeCategory)?.name || "Tout le contenu"}
//               </h2>
//               <div className="content-count">
//                 {filteredContent.length} ressource{filteredContent.length !== 1 ? 's' : ''}
//               </div>
//             </div>
            
//             {filteredContent.length > 0 ? (
//               <div className="content-grid">
//                 {filteredContent.map(item => (
//                   <div key={item.id} className="content-card">
//                     <div className="content-card-layout">
//                       <div className="content-image-container">
//                         <img 
//                           src={item.image} 
//                           alt={item.title} 
//                           className="content-image"
//                         />
//                       </div>
//                       <div className="content-details">
//                         <div className="content-meta">
//                           <span className="content-type-tag">
//                             {contentTypes[item.type]}
//                             <span className="content-type-name">{item.type}</span>
//                           </span>
//                           <span className="content-date">{formatDate(item.date)}</span>
//                         </div>
//                         <h3 className="content-item-title">{item.title}</h3>
//                         <p className="content-item-description">{item.description}</p>
//                         <button className="content-read-more">
//                           Lire plus <ChevronRight className="icon-tiny" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="no-results">
//                 <Search className="no-results-icon" />
//                 <h3 className="no-results-title">Aucun résultat trouvé</h3>
//                 <p className="no-results-message">
//                   Aucun contenu ne correspond à votre recherche. Essayez avec d'autres termes ou catégories.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       {/* Footer */}
//         <Footer />
//     </div>
//   );
// }


















import { useState, useEffect, JSX } from "react";
import { Search, Book, Video, Headphones, Play, ChevronRight, Info, Shield, DollarSign, Mail, Lock, AlertTriangle, Clock, Users, Loader, ArrowLeft } from "lucide-react";
import "./ContentHub.css";
import Footer from "../../components/Footer.tsx";
import { useNavigate } from "react-router-dom";
import { ContentItem, fetchCybersecurityContent } from "../../services/contentAPI.ts";

export default function ContentHub() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [contentData, setContentData] = useState<ContentItem[]>([]);
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  
  // Categories
  interface Category {
    id: string;
    name: string;
    icon: JSX.Element;
  }
  
  const categories: Category[] = [
    { id: "all", name: "Tout le contenu", icon: <Info /> },
    { id: "disinformation", name: "Désinformation", icon: <AlertTriangle /> },
    { id: "hacking", name: "Piratage", icon: <Shield /> },
    { id: "financial", name: "Arnaques financières", icon: <DollarSign /> },
    { id: "phishing", name: "Phishing", icon: <Mail /> },
    { id: "ransomware", name: "Ransomware", icon: <Lock /> },
    { id: "harassment", name: "Harcèlement en ligne", icon: <Users /> },
    { id: "safety", name: "Sécurité générale", icon: <Shield /> }
  ];

  // Content types with icons
  const contentTypes: Record<string, JSX.Element> = {
    article: <Book className="icon-small" />,
    video: <Video className="icon-small" />,
    podcast: <Headphones className="icon-small" />,
    guide: <Book className="icon-small" />,
    animation: <Play className="icon-small" />,
    investigation: <Search className="icon-small" />
  };

  // Fetch content
  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Using our new cybersecurity content API service
        const data = await fetchCybersecurityContent();
        setContentData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        console.error('Error fetching content:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchContent();
  }, []);

  // Filter content based on active category and search query
  useEffect(() => {
    let filtered = contentData;
    
    if (activeCategory !== "all") {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        item => item.title.toLowerCase().includes(query) || 
               item.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredContent(filtered);
  }, [activeCategory, searchQuery, contentData]);

  // Function to get featured content
  const getFeaturedContent = (): ContentItem[] => {
    return contentData.filter(item => item.featured);
  };

  // Format date
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="content-hub">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <h1 className="hero-title">Centre de Ressources</h1>
          <p className="hero-subtitle">
            Retrouvez tous nos articles, guides et ressources pour vous protéger contre les menaces numériques
          </p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Rechercher un contenu..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="search-icon" />
          </div>
        </div>
      </div>
      
      {/* Loading State */}
      {isLoading && (
        <div className="loading-container">
          <Loader className="loading-spinner" size={40} />
          <p className="loading-text">Chargement des ressources...</p>
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
      
      {/* Content is loaded successfully */}
      {!isLoading && !error && (
        <>
          {/* Featured Section */}
          {(!searchQuery && activeCategory === "all" && getFeaturedContent().length > 0) && (
            <div className="container section">
              <div className="section-header">
                <h2 className="section-title">Contenu à la une</h2>
                <button className="view-all-button">
                  Voir tout <ChevronRight className="icon-small" />
                </button>
              </div>
              
              <div className="featured-grid">
                {getFeaturedContent().map(item => (
                  <div key={item.id} className="featured-card">
                    <div className="featured-image-container">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="featured-image"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = `https://source.unsplash.com/random/800x600/?cybersecurity&sig=${item.id}`;
                        }}
                      />
                      <div className="content-type-badge">
                        {item.type}
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="date-info">
                        <Clock className="icon-tiny" />
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <h3 className="featured-title">{item.title}</h3>
                      <p className="featured-description">{item.description}</p>
                      <button 
                        className="read-more-link"
                        onClick={() => navigate(`/content/${item.id}`)}
                      >
                        Lire plus <ChevronRight className="icon-tiny" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Categories and Content */}
          <div className="container section">
            <div className="main-content">
              {/* Categories Sidebar */}
              <div className="sidebar">
                <div className="sidebar-widget">
                  <h3 className="widget-title">Catégories</h3>
                  <ul className="category-list">
                    {categories.map(category => (
                      <li key={category.id}>
                        <button
                          onClick={() => setActiveCategory(category.id)}
                          className={`category-button ${
                            activeCategory === category.id
                              ? "category-button-active"
                              : ""
                          }`}
                        >
                          <span className="category-icon">{category.icon}</span>
                          <span className="category-name">{category.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Content List */}
              <div className="content-area">
                <div className="content-header">
                  <h2 className="content-title">
                    {categories.find(c => c.id === activeCategory)?.name || "Tout le contenu"}
                  </h2>
                  <div className="content-count">
                    {filteredContent.length} ressource{filteredContent.length !== 1 ? 's' : ''}
                  </div>
                </div>
                
                {filteredContent.length > 0 ? (
                  <div className="content-grid">
                    {filteredContent.map(item => (
                      <div key={item.id} className="content-card">
                        <div className="content-card-layout">
                          <div className="content-image-container">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="content-image"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = `https://source.unsplash.com/random/800x600/?cybersecurity&sig=${item.id}`;
                              }}
                            />
                          </div>
                          <div className="content-details">
                            <div className="content-meta">
                              <span className="content-type-tag">
                                {contentTypes[item.type] || <Book className="icon-small" />}
                                <span className="content-type-name">{item.type}</span>
                              </span>
                              <span className="content-date">{formatDate(item.date)}</span>
                            </div>
                            <h3 className="content-item-title">{item.title}</h3>
                            <p className="content-item-description">{item.description}</p>
                            <button 
                              className="content-read-more"
                              onClick={() => navigate(`/content/${item.id}`)}
                            >
                              Lire plus <ChevronRight className="icon-tiny" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="no-results">
                    <Search className="no-results-icon" />
                    <h3 className="no-results-title">Aucun résultat trouvé</h3>
                    <p className="no-results-message">
                      Aucun contenu ne correspond à votre recherche. Essayez avec d'autres termes ou catégories.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      
      {/* Footer */}
      <Footer />
    </div>
  );
};