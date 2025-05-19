// src/services/analyticsService.js
import ReactGA from 'react-ga4';

export const initializeAnalytics = () => {
  ReactGA.initialize('YOUR_GOOGLE_ANALYTICS_ID');
};

export const trackScamReport = (reportData) => {
  ReactGA.event({
    category: 'Scam Reporting',
    action: 'Submit Report',
    label: reportData.type,
    value: 1
  });
};