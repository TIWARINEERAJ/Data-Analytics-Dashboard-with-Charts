import React from 'react';
import StatCard from './StatCard';
import RevenueChart from './charts/RevenueChart';
import SalesChart from './charts/SalesChart';
import TrafficChart from './charts/TrafficChart';
import TopProducts from './TopProducts';
import RecentActivity from './RecentActivity';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h2>Dashboard Overview</h2>
          <div className="dashboard-actions">
            <button className="btn btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>Last 30 days</span>
            </button>
            <button className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Export Report</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-4">
          <StatCard 
            title="Total Revenue" 
            value="$48,254.25" 
            change="+12.5%" 
            trend="up" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            } 
          />
          <StatCard 
            title="Total Orders" 
            value="1,248" 
            change="+8.2%" 
            trend="up" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            } 
          />
          <StatCard 
            title="Conversion Rate" 
            value="3.24%" 
            change="-1.8%" 
            trend="down" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            } 
          />
          <StatCard 
            title="Active Users" 
            value="12,841" 
            change="+24.5%" 
            trend="up" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            } 
          />
        </div>
        
        <div className="grid grid-2">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Revenue Overview</h3>
              <div className="card-actions">
                <button className="btn btn-outline btn-sm">Weekly</button>
                <button className="btn btn-outline btn-sm active">Monthly</button>
                <button className="btn btn-outline btn-sm">Yearly</button>
              </div>
            </div>
            <RevenueChart />
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Sales Analytics</h3>
              <div className="card-actions">
                <button className="btn btn-outline btn-sm">Export</button>
              </div>
            </div>
            <SalesChart />
          </div>
        </div>
        
        <div className="grid grid-3">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Traffic Sources</h3>
              <div className="card-actions">
                <button className="btn btn-outline btn-sm">View All</button>
              </div>
            </div>
            <TrafficChart />
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Top Products</h3>
              <div className="card-actions">
                <button className="btn btn-outline btn-sm">View All</button>
              </div>
            </div>
            <TopProducts />
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Recent Activity</h3>
              <div className="card-actions">
                <button className="btn btn-outline btn-sm">View All</button>
              </div>
            </div>
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
