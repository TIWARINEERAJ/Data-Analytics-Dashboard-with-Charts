import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app">
      <Sidebar isOpen={sidebarOpen} />
      <div className={`main-content ${sidebarOpen ? '' : 'expanded'}`}>
        <Header toggleSidebar={toggleSidebar} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
