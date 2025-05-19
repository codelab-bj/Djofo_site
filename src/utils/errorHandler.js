// src/utils/errorHandler.js
export const handleApiError = (error) => {
  const errorMap = {
    400: 'Invalid request parameters',
    401: 'Unauthorized access',
    403: 'Forbidden action',
    404: 'Resource not found',
    500: 'Internal server error'
  };

  const errorMessage = errorMap[error.status] || 'An unexpected error occurred';
  
  return {
    type: 'error',
    message: errorMessage,
    details: error.details || null
  };
};