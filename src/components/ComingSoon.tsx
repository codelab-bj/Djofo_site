// ComingSoon.jsx
import React, { useState, useEffect } from 'react';
import '../styles/ComingSoon.css';

const ComingSoon = ({ 
  title = "Coming Soon", 
  subtitle = "We're working hard to bring you something amazing",
  date = "2025-12-31", 
  backgroundColor = "linear-gradient(135deg, #2a2a72 0%, #009ffd 100%)",
  textColor = "#ffffff",
  buttonColor = "#ffffff",
  buttonTextColor = "#009ffd",
  showCountdown = true,
  showSubscribe = true,
  socials = {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com"
  }
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  useEffect(() => {
    if (!showCountdown) return;
    
    const targetDate = new Date(date).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [date, showCountdown]);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend or email service
    console.log("Subscribed with email:", email);
    setSubscribed(true);
    setEmail('');
    
    // Reset subscribed message after 3 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };
  
  // Apply dynamic styles based on props
  const containerStyle = {
    background: backgroundColor,
    color: textColor
  };
  
  const buttonStyle = {
    backgroundColor: buttonColor,
    color: buttonTextColor
  };
  
  return (
    <div className="coming-soon-container" style={containerStyle}>
      <div className="coming-soon-content">
        <h1 className="coming-soon-title">{title}</h1>
        <p className="coming-soon-subtitle">{subtitle}</p>
        
        {/* {showCountdown && (
          <div className="countdown-container">
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.days}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.hours}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.minutes}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.seconds}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        )}
        
        {showSubscribe && (
          <div className="subscribe-container">
            <p>Be the first to know when we launch</p>
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <button type="submit" style={buttonStyle}>Notify Me</button>
            </form>
            {subscribed && (
              <div className="subscribe-message">
                Thank you! We'll keep you updated.
              </div>
            )}
          </div>
        )}
        
        <div className="social-container">
          {socials.twitter && (
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          )}
          {socials.instagram && (
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          )}
          {socials.facebook && (
            <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default ComingSoon;