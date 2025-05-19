// src/utils/validationSchemas.js
import * as Yup from 'yup';

export const scamReportSchema = Yup.object().shape({
  contact: Yup.string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$|^[0-9]{10}$/, 'Invalid email or phone number')
    .required('Contact is required'),
  description: Yup.string()
    .min(20, 'Description must be at least 20 characters')
    .max(500, 'Description cannot exceed 500 characters')
    .required('Description is required'),
  type: Yup.string().required('Scam type must be selected')
});