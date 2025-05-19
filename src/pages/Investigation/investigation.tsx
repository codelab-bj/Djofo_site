import React, { useState, useEffect } from 'react';
import './investigation.css';
import ComingSoon from '../../components/ComingSoon.tsx';

// Mock data for case studies - replace with actual API calls in production
// const caseStudies = [
//   {
//     id: 1,
//     title: "Banking Fraud Scheme Targeting Mobile Money Users",
//     thumbnail: "/api/placeholder/600/400",
//     date: "April 15, 2025",
//     category: "Financial Fraud",
//     excerpt: "How cybercriminals exploited vulnerabilities in mobile money systems to defraud hundreds of users in Cotonou.",
//     readTime: "8 min read",
//     impact: "High",
//   },
//   {
//     id: 2,
//     title: "Phishing Campaign Against Government Officials",
//     thumbnail: "/api/placeholder/600/400",
//     date: "March 3, 2025",
//     category: "Phishing",
//     excerpt: "Analysis of sophisticated phishing attacks targeting high-ranking officials in Benin's public administration.",
//     readTime: "12 min read",
//     impact: "Critical",
//   },
//   {
//     id: 3,
//     title: "E-Commerce Scam Network Exposed",
//     thumbnail: "/api/placeholder/600/400",
//     date: "February 22, 2025",
//     category: "Online Scams",
//     excerpt: "How investigators uncovered a network of fake online stores defrauding consumers across Benin.",
//     readTime: "10 min read",
//     impact: "Medium",
//   },
//   {
//     id: 4,
//     title: "SIM Swapping Attacks on Telecommunications Networks",
//     thumbnail: "/api/placeholder/600/400",
//     date: "January 17, 2025",
//     category: "Identity Theft",
//     excerpt: "Investigation into how criminals compromised mobile network operators to perform SIM swapping attacks.",
//     readTime: "15 min read",
//     impact: "High",
//   },
//   {
//     id: 5,
//     title: "Ransomware Attack on Healthcare Provider",
//     thumbnail: "/api/placeholder/600/400",
//     date: "December 10, 2024",
//     category: "Ransomware",
//     excerpt: "Case study of a major ransomware attack that temporarily disabled services at a hospital in Porto-Novo.",
//     readTime: "14 min read",
//     impact: "Critical",
//   },
//   {
//     id: 6,
//     title: "Social Engineering Campaign Targeting Students",
//     thumbnail: "/api/placeholder/600/400",
//     date: "November 5, 2024",
//     category: "Social Engineering",
//     excerpt: "How cybercriminals exploited social media to target university students in a credential harvesting operation.",
//     readTime: "9 min read",
//     impact: "Medium",
//   }
// ];

// const ImpactIndicator = ({ level }) => {
//   const getColor = () => {
//     switch(level.toLowerCase()) {
//       case 'low': return '#4caf50';
//       case 'medium': return '#ff9800';
//       case 'high': return '#f44336';
//       case 'critical': return '#9c27b0';
//       default: return '#757575';
//     }
//   };

//   return (
//     <div className="impact-indicator" style={{ backgroundColor: getColor() }}>
//       {/* <span>{level}</span> */}
//       <ComingSoon />
//     </div>
//   );
// };

// const CaseStudyCard = ({ study }) => {
//   return (
//     <div className="case-study-card">
//       <div className="card-image">
//         <img src={study.thumbnail} alt={study.title} />
//         <div className="card-category">{study.category}</div>
//       </div>
//       <div className="card-content">
//         <div className="card-meta">
//           <span className="card-date">{study.date}</span>
//           <span className="card-read-time">{study.readTime}</span>
//         </div>
//         <h3 className="card-title">{study.title}</h3>
//         <p className="card-excerpt">{study.excerpt}</p>
//         <div className="card-footer">
//           <ImpactIndicator level={study.impact} />
//           <button className="read-more-btn">Read Full Case Study</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FeaturedCase = ({ study }) => {
//   return (
//     <div className="featured-case">
//       <div className="featured-image">
//         <img src={study.thumbnail} alt={study.title} />
//         <div className="featured-overlay">
//           <div className="featured-badge">Featured Investigation</div>
//         </div>
//       </div>
//       <div className="featured-content">
//         <div className="featured-meta">
//           <span className="featured-category">{study.category}</span>
//           <span className="featured-date">{study.date}</span>
//         </div>
//         <h2 className="featured-title">{study.title}</h2>
//         <p className="featured-excerpt">{study.excerpt}</p>
//         <div className="featured-footer">
//           <ImpactIndicator level={study.impact} />
//           <span className="featured-read-time">{study.readTime}</span>
//           <button className="featured-read-btn">Read Full Investigation</button>
//         </div>
//       </div>
//     </div>
   
//   );
// };

// const FilterBar = ({ categories, activeFilter, setActiveFilter }) => {
//   return (
//     <div className="filter-bar">
//       <button 
//         className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
//         onClick={() => setActiveFilter('all')}
//       >
//         All Cases
//       </button>
//       {categories.map(category => (
//         <button 
//           key={category} 
//           className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
//           onClick={() => setActiveFilter(category)}
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// };

// const SearchBar = ({ searchTerm, setSearchTerm }) => {
//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Search case studies..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button className="search-btn">
//         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="11" cy="11" r="8"></circle>
//           <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//         </svg>
//       </button>
//     </div>
//   );
// };

// const Investigations = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredCases, setFilteredCases] = useState<typeof caseStudies>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // Extract unique categories from case studies
//   const categories = [...new Set(caseStudies.map(study => study.category))];

//   // Filter case studies based on active filter and search term
//   useEffect(() => {
//     setIsLoading(true);
    
//     // Simulate loading delay
//     const timer = setTimeout(() => {
//       let filtered = caseStudies;
      
//       if (activeFilter !== 'all') {
//         filtered = filtered.filter(study => study.category === activeFilter);
//       }
      
//       if (searchTerm) {
//         filtered = filtered.filter(study => 
//           study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           study.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           study.category.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//       }
      
//       setFilteredCases(filtered);
//       setIsLoading(false);
//     }, 500);
    
//     return () => clearTimeout(timer);
//   }, [activeFilter, searchTerm]);

//   return (
//     <div className="investigations-container">
//       <div className="investigations-header">
//         <h1>Cybercrime Investigations in Benin</h1>
//         <p className="header-description">
//           In-depth case studies analyzing real cybercrime incidents that have affected individuals, 
//           businesses, and government entities in Benin. Learn about attack vectors, techniques, 
//           impacts, and the lessons learned from each investigation.
//         </p>
//       </div>

//       {/* Featured case study */}
//       <FeaturedCase study={caseStudies[0]} />

//       <div className="filter-section">
//         <FilterBar 
//           categories={categories} 
//           activeFilter={activeFilter} 
//           setActiveFilter={setActiveFilter} 
//         />
//         <SearchBar 
//           searchTerm={searchTerm} 
//           setSearchTerm={setSearchTerm} 
//         />
//       </div>

//       {isLoading ? (
//         <div className="loading-spinner">
//           <div className="spinner"></div>
//           <p>Loading investigations...</p>
//         </div>
//       ) : (
//         <div className="case-studies-grid">
//           {filteredCases.length > 0 ? (
//             filteredCases.map(study => (
//               <CaseStudyCard key={study.id} study={study} />
//             ))
//           ) : (
//             <div className="no-results">
//               <h3>No case studies found</h3>
//               <p>Try adjusting your search criteria or filter selection.</p>
//             </div>
//           )}
//         </div>
//       )}

//       <div className="pagination">
//         <button className="pagination-btn prev-btn" disabled>Previous</button>
//         <div className="pagination-numbers">
//           <button className="pagination-number active">1</button>
//           <button className="pagination-number">2</button>
//           <button className="pagination-number">3</button>
//         </div>
//         <button className="pagination-btn next-btn">Next</button>
//       </div>

//       <div className="contribute-section">
//         <h2>Have information about a cybercrime case?</h2>
//         <p>
//           If you have information about a cybercrime incident in Benin that could be valuable for our 
//           investigations section, please submit details through our secure reporting system.
//         </p>
//         <button className="contribute-btn">Submit Case Information</button>
//       </div>
//     </div>
//   );
//};

const Investigations = () => {
  return(
    <ComingSoon/>
  )
}

export default Investigations;