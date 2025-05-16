import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, change, trend, icon }) => {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <h3 className="stat-title">{title}</h3>
        <div className="stat-value">{value}</div>
        <div className={`stat-change ${trend === 'up' ? 'positive' : 'negative'}`}>
          <span className="trend-icon">
            {trend === 'up' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            )}
          </span>
          <span>{change} from last month</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
