// src/components/SecureFileUpload.jsx
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

const SecureFileUpload = ({ onFileUpload }) => {
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState([]);

  const validateFiles = (acceptedFiles) => {
    const validFiles = [];
    const fileErrors = [];

    acceptedFiles.forEach(file => {
      if (!ALLOWED_TYPES.includes(file.type)) {
        fileErrors.push(`Unsupported file type: ${file.name}`);
      }
      if (file.size > MAX_FILE_SIZE) {
        fileErrors.push(`File too large: ${file.name}`);
      }
      validFiles.push(file);
    });

    setErrors(fileErrors);
    setFiles(validFiles);
    onFileUpload(validFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: validateFiles,
    multiple: true
  });

  return (
    <motion.div 
      {...getRootProps()}
      className="border-2 border-dashed p-4 rounded-lg"
      whileHover={{ scale: 1.02 }}
    >
      <input {...getInputProps()} />
      <p>Drag & drop files or click to select</p>
      {errors.length > 0 && (
        <div className="text-red-500 mt-2">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default SecureFileUpload;