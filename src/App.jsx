import './App.css';
import React from 'react';
import Navbar from './components/NavBar'; // Import Navbar
import { Outlet } from 'react-router-dom';

const App = ({ children }) => {
  return (
    <div class={container}>
      <Navbar />  {/* Navbar added here to be global */}
      <Outlet /> {/* Outlet added here to render nested routes */}
      <main class={mainContent}>
        {children}
      </main>

      <footer class={footer}>
        <p>&copy; 2024 Barrett's Portfolio</p>
      </footer>
    </div>
  );
};

export default App;
