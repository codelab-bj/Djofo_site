import React, { useState } from 'react';
import './OnlineTraining.css';
import ComingSoon from '../../components/ComingSoon.tsx';

const OnlineTraining = () => {

  // Training course state
  const [currentCourseFilter, setCourseFilter] = useState('all');
  
  const courses = [
    { 
      id: 1, 
      title: 'Risk Assessment Fundamentals', 
      category: 'compliance',
      duration: '2 hours',
      completionRate: 85,
      description: 'Learn the basics of identifying and evaluating organizational risks.',
      image: '/api/placeholder/400/200'
    },
    { 
      id: 2, 
      title: 'Fraud Detection Workshop', 
      category: 'security',
      duration: '3 hours',
      completionRate: 65,
      description: 'Advanced techniques for detecting financial fraud and reporting procedures.',
      image: '/api/placeholder/400/200'
    },
    { 
      id: 3, 
      title: 'Cyber Security Awareness', 
      category: 'security',
      duration: '1.5 hours',
      completionRate: 92,
      description: 'Essential practices for maintaining digital security in the workplace.',
      image: '/api/placeholder/400/200'
    },
    { 
      id: 4, 
      title: 'Regulatory Compliance Update 2025', 
      category: 'compliance',
      duration: '4 hours',
      completionRate: 40,
      description: 'Stay current with the latest regulatory changes affecting your industry.',
      image: '/api/placeholder/400/200'
    },
    { 
      id: 5, 
      title: 'Crisis Management Protocol', 
      category: 'emergency',
      duration: '2.5 hours',
      completionRate: 78,
      description: 'Develop strategies for effective crisis response and communication.',
      image: '/api/placeholder/400/200'
    },
  ];


  const filteredCourses = currentCourseFilter === 'all' 
    ? courses 
    : courses.filter(course => course.category === currentCourseFilter);

  return (
   
          // <div className="online-training-section">
          //   <div className="section-header">
          //     <h2>Online Training Courses</h2>
          //     <p>Enhance your risk management skills with our comprehensive training programs. Complete required courses and earn certifications.</p>
          //   </div>

          //   <div className="training-filters">
          //     <button 
          //       className={`filter-button ${currentCourseFilter === 'all' ? 'active' : ''}`}
          //       onClick={() => setCourseFilter('all')}
          //     >
          //       All Courses
          //     </button>
          //     <button 
          //       className={`filter-button ${currentCourseFilter === 'compliance' ? 'active' : ''}`}
          //       onClick={() => setCourseFilter('compliance')}
          //     >
          //       Compliance
          //     </button>
          //     <button 
          //       className={`filter-button ${currentCourseFilter === 'security' ? 'active' : ''}`}
          //       onClick={() => setCourseFilter('security')}
          //     >
          //       Security
          //     </button>
          //     <button 
          //       className={`filter-button ${currentCourseFilter === 'emergency' ? 'active' : ''}`}
          //       onClick={() => setCourseFilter('emergency')}
          //     >
          //       Emergency
          //     </button>
          //   </div>

          //   <div className="courses-grid">
          //     {filteredCourses.map(course => (
          //       <div className="course-card" key={course.id}>
          //         <div className="course-image">
          //           <img src={course.image} alt={course.title} />
          //           <span className="course-duration">{course.duration}</span>
          //         </div>
          //         <div className="course-content">
          //           <h3>{course.title}</h3>
          //           <p>{course.description}</p>
          //           <div className="course-completion">
          //             <div className="progress-bar">
          //               <div 
          //                 className="progress-fill" 
          //                 style={{ width: `${course.completionRate}%` }}
          //               ></div>
          //             </div>
          //             <span className="completion-rate">{course.completionRate}% Complete</span>
          //           </div>
          //           <button className="course-button">
          //             {course.completionRate < 100 ? 'Continue' : 'Review'}
          //           </button>
          //         </div>
          //       </div>
          //     ))}
          //   </div>

          //   <div className="training-summary">
          //     <h3>Your Training Summary</h3>
          //     <div className="summary-stats">
          //       <div className="stat-card">
          //         <span className="stat-value">7</span>
          //         <span className="stat-label">Courses Completed</span>
          //       </div>
          //       <div className="stat-card">
          //         <span className="stat-value">3</span>
          //         <span className="stat-label">In Progress</span>
          //       </div>
          //       <div className="stat-card">
          //         <span className="stat-value">2</span>
          //         <span className="stat-label">Certifications</span>
          //       </div>
          //       <div className="stat-card">
          //         <span className="stat-value">82%</span>
          //         <span className="stat-label">Completion Rate</span>
          //       </div>
          //     </div>
              
          //     <div className="required-training-alert">
          //       <h4>Required Training Alert</h4>
          //       <p>You have 2 required courses due within the next 30 days:</p>
          //       <ul>
          //         <li>Annual Compliance Training - Due May 30, 2025</li>
          //         <li>Data Privacy Update - Due June 10, 2025</li>
          //       </ul>
          //     </div>
          //   </div>
          // </div>
          <ComingSoon/>

   );
};

export default OnlineTraining;