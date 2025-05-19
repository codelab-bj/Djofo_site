// src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HomePage from './pages/HomePage';
// import ScamReportForm from './components/ScamReportForm';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <main className="container mx-auto mt-4">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/report" element={<ScamReportForm />} />
//           {/* Other routes can be added here */}
//         </Routes>
//       </main>
//       <ToastContainer />
//     </Router>
//   );
// };

// export default App;









// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import './App.css'; // Assuming you have a global CSS file for styles
//import { ToastContainer } from 'react-toastify';
import './index.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const ScamReportForm = lazy(() => import('./pages/CaseReport/CaseReport.jsx'));
const ContentHub = lazy(() => import('./pages/ContentHub/ContentHub.tsx'));
const Community = lazy(() => import('./pages/Community/Community_and_Inactivity.tsx'));
const SecureFileUpload = lazy(() => import('./components/SecureFileUpload'));
const OnlineTraining = lazy(() => import('./pages/OnlineTraining/OnlineTraining.tsx'));
const Investigation = lazy(() => import('./pages/Investigation/investigation.tsx'));
const ContentDetail = lazy(() => import('./pages/ContentHub/ContentDetail.tsx'));
// const Navbar = lazy(() => import('./components/Navbar'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='loading-container'>
        Loading...
        <span className='loading-spinner'></span>
        </div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/content" element={<ContentHub />} />
          <Route path="/reportcourse" element={<OnlineTraining/>} />
          <Route path="/report" element={<ScamReportForm />} />
          <Route path="/community" element={<Community />} />
          <Route path="/investigation" element={<Investigation />} />
          <Route path="/content/:id" element={<ContentDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;