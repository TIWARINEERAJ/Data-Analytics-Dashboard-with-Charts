import React from 'react';
import { format } from 'date-fns';
import './RecentActivity.css';

const activities = [
  {
    id: 1,
    type: 'order',
    title: 'New order placed',
    description: 'Order #12345 was placed by John Doe',
    time: new Date(Date.now() - 25 * 60 * 1000)
  },
  {
    id: 2,
    type: 'user',
    title: 'New user registered',
    description: 'Jane Smith created a new account',
    time: new Date(Date.now() - 2 * 60 * 60 * 1000)
  },
  {
    id: 3,
    type: 'payment',
    title: 'Payment received',
    description: 'Payment of $1,250 received from Customer #7',
    time: new Date(Date.now() - 5 * 60 * 60 * 1000)
  },
  {
    id: 4,
    type: 'refund',
    title: 'Refund processed',
    description: 'Refund of $349 processed for Order #10932',
    time: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
  }
];

const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <ul className="activity-list">
        {activities.map(activity => (
          <li key={activity.id} className="activity-item">
            <div className={`activity-icon ${activity.type}`}>
              {activity.type === 'order' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              )}
              {activity.type === 'user' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              )}
              {activity.type === 'payment' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              )}
              {activity.type === 'refund' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <polyline points="1 20 1 14 7 14"></polyline>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                </svg>
              )}
            </div>
            <div className="activity-content">
              <div className="activity-header">
                <h4 className="activity-title">{activity.title}</h4>
                <span className="activity-time">{format(activity.time, 'h:mm a')}</span>
              </div>
              <p className="activity-description">{activity.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
