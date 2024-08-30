import './App.css';
import React from 'react';
import Navbar from './components/Navbarme'; // Import Navbar
import { Outlet } from 'react-router-dom';

const App = ({ children }) => {
  return (
    <div className="container">
      <Navbar />  {/* Navbar added here to be global */}
      <Outlet /> {/* Outlet added here to render nested routes */}
      <main className="mainContent">
        {children}
      </main>

      <footer className="footer">
        <p>&copy; 2024 Barrett's Portfolio</p>
      </footer>
    </div>
  );
};

export default App;
