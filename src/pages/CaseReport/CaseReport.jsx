// src/components/ScamReportForm.jsx
// import React, { useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';
// import { motion } from 'framer-motion';

// const ScamReportForm = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();
//   const [files, setFiles] = useState([]);

//   const onDrop = acceptedFiles => {
//     setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
//   };

//   const onSubmit = async (data) => {
//     // Mock the API call here
//     console.log(data, files);
//     toast.success("Scam reported successfully!");
//     reset();
//     setFiles([]);
//   };

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });

//   return (
//     <motion.div 
//       className="p-4 shadow-md rounded-lg"
//       initial={{ opacity: 0 }} 
//       animate={{ opacity: 1 }} 
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-xl font-bold mb-2">Signaler une arnaque</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <input type="text" placeholder="Nom complet (optionnel)" {...register('fullname')} className="w-full p-2 border rounded" />
//         <input type="text" placeholder="Contact (email ou téléphone)" {...register('contact')} className="w-full p-2 border rounded" />
//         <select {...register('type')} className="w-full p-2 border rounded">
//           <option value="">Type d'arnaque</option>
//           <option value="mobile_money">Mobile Money</option>
//           <option value="fake_news">Fake News</option>
//           <option value="phishing">Phishing</option>
//           <option value="fake_investment">Fake Investment</option>
//         </select>
//         <textarea {...register('description', { required: true })} placeholder="Description" className="w-full p-2 border rounded" />
//         {errors.description && <span className="text-red-500">Description is required</span>}
        
//         <div {...getRootProps()} className="border-dashed border-2 border-gray-400 p-4 rounded cursor-pointer">
//           <input {...getInputProps()} />
//           <p>Drag & drop some files here, or click to select files</p>
//         </div>
//         {files.length > 0 && (
//           <div className="mt-2">
//             {files.map(file => (
//               <p key={file.name}>{file.name}</p>
//             ))}
//           </div>
//         )}

//         <label className="flex items-center">
//           <input type="checkbox" {...register('anonymous')} className="mr-2" />
//           Submit anonymously
//         </label>
        
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
//           Submit Report
//         </button>
//       </form>
//     </motion.div>
//   );
// };

// export default ScamReportForm;

















import React, { useState } from 'react';
import './CaseReport.css';

const CaseReporting = () => {
  // Case reporting form state
  const [reportForm, setReportForm] = useState({
    incidentType: '',
    date: '',
    location: '',
    description: '',
    severity: 'medium',
    witnesses: '',
    attachFile: null,
    anonymous: false
  });

  const handleFormChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setReportForm({
      ...reportForm,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    });
  };

  const handleSubmitReport = (e) => {
    e.preventDefault();
    // Here you would typically send the report data to your backend
    console.log('Report submitted:', reportForm);
    alert('Report submitted successfully!');
    // Reset form after submission
    setReportForm({
      incidentType: '',
      date: '',
      location: '',
      description: '',
      severity: 'medium',
      witnesses: '',
      attachFile: null,
      anonymous: false
    });
  };

  return (
    <div className="case-reporting-page">
      <div className="page-header">
        <h1>Case Reporting System</h1>
        <p className="header-description">Securely report incidents and potential risks to our risk management team</p>
      </div>

      <div className="reporting-container">
        <div className="main-content">
          <div className="section-header">
            <h2>Report a Case or Incident</h2>
            <p>Use this secure form to report incidents, concerns, or potential risks. All reports are confidential and will be reviewed by our risk management team.</p>
          </div>

          <form className="report-form" onSubmit={handleSubmitReport}>
            <div className="form-group">
              <label htmlFor="incidentType">Incident Type</label>
              <select 
                id="incidentType" 
                name="incidentType" 
                value={reportForm.incidentType}
                onChange={handleFormChange}
                required
              >
                <option value="">Select incident type</option>
                <option value="security">Security Breach</option>
                <option value="fraud">Fraud/Financial</option>
                <option value="harassment">Harassment</option>
                <option value="compliance">Compliance Violation</option>
                <option value="safety">Safety Issue</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date of Incident</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date"
                  value={reportForm.date}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location"
                  placeholder="Where did this occur?"
                  value={reportForm.location}
                  onChange={handleFormChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea 
                id="description" 
                name="description"
                placeholder="Please provide details about what happened..."
                value={reportForm.description}
                onChange={handleFormChange}
                rows="4"
                required
              />
            </div>

            <div className="form-group">
              <label>Severity Level</label>
              <div className="severity-selector">
                <label className="severity-option">
                  <input 
                    type="radio" 
                    name="severity" 
                    value="low"
                    checked={reportForm.severity === 'low'}
                    onChange={handleFormChange}
                  /> 
                  <span className="severity-text">Low</span>
                  <span className="severity-indicator low"></span>
                </label>
                <label className="severity-option">  
                  <input 
                    type="radio" 
                    name="severity" 
                    value="medium"
                    checked={reportForm.severity === 'medium'}
                    onChange={handleFormChange}
                  /> 
                  <span className="severity-text">Medium</span>
                  <span className="severity-indicator medium"></span>
                </label>
                <label className="severity-option">
                  <input 
                    type="radio" 
                    name="severity" 
                    value="high"
                    checked={reportForm.severity === 'high'}
                    onChange={handleFormChange}
                  /> 
                  <span className="severity-text">High</span>
                  <span className="severity-indicator high"></span>
                </label>
                <label className="severity-option">
                  <input 
                    type="radio" 
                    name="severity" 
                    value="critical"
                    checked={reportForm.severity === 'critical'}
                    onChange={handleFormChange}
                  /> 
                  <span className="severity-text">Critical</span>
                  <span className="severity-indicator critical"></span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="witnesses">Witnesses (if any)</label>
              <input 
                type="text" 
                id="witnesses" 
                name="witnesses"
                placeholder="Names of any witnesses (optional)"
                value={reportForm.witnesses}
                onChange={handleFormChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="attachFile">Attach Evidence (optional)</label>
              <div className="file-upload">
                <input 
                  type="file" 
                  id="attachFile" 
                  name="attachFile"
                  onChange={handleFormChange}
                />
                <div className="file-upload-label">
                  <svg className="upload-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <span>{reportForm.attachFile ? reportForm.attachFile.name : 'Choose file or drop it here'}</span>
                </div>
              </div>
              <small>Max file size: 10MB. Supported formats: PDF, JPG, PNG</small>
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  name="anonymous" 
                  checked={reportForm.anonymous}
                  onChange={handleFormChange}
                />
                <span className="checkbox-custom"></span>
                <span className="checkbox-label">Submit this report anonymously</span>
              </label>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-button">Submit Report</button>
              <button type="reset" className="reset-button">Reset Form</button>
            </div>
          </form>
        </div>

        <div className="side-content">
          <div className="info-panel">
            <h3>What happens next?</h3>
            <ol>
              <li>Your report is encrypted and securely submitted to our risk management team</li>
              <li>A case number will be assigned and sent to you (unless submitted anonymously)</li>
              <li>Our team will review the details within 24-48 hours</li>
              <li>You may be contacted for additional information if necessary</li>
              <li>Appropriate action will be taken based on investigation findings</li>
            </ol>

            <div className="emergency-contact">
              <h4>Need immediate assistance?</h4>
              <p>For emergencies requiring immediate attention, please contact:</p>
              <p><strong>Emergency Hotline:</strong> (555) 123-4567</p>
              <p><strong>Email:</strong> urgent@riskmanagement.com</p>
            </div>
          </div>

          <div className="reports-history-panel">
            <h3>Your Recent Reports</h3>
            <div className="history-item">
              <div className="history-badge pending">Pending</div>
              <div className="history-details">
                <span className="report-id">ID: #CR-2025-089</span>
                <span className="report-date">Submitted: May 10, 2025</span>
                <span className="report-type">Type: Compliance Issue</span>
              </div>
            </div>
            <div className="history-item">
              <div className="history-badge resolved">Resolved</div>
              <div className="history-details">
                <span className="report-id">ID: #CR-2025-076</span>
                <span className="report-date">Submitted: Apr 24, 2025</span>
                <span className="report-type">Type: Security Breach</span>
              </div>
            </div>
            <div className="history-item">
              <div className="history-badge investigating">Investigating</div>
              <div className="history-details">
                <span className="report-id">ID: #CR-2025-054</span>
                <span className="report-date">Submitted: Apr 17, 2025</span>
                <span className="report-type">Type: Harassment</span>
              </div>
            </div>
            <button className="view-all-button">View All Reports</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseReporting;
