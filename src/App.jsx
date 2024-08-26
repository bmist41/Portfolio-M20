import './App.css';
import React from 'react';
import Navbar from './components/Navbar'; // Import Navbar

const App = ({ children }) => {
  return (
    <div class={container}>
      <Navbar />  {/* Navbar added here to be global */}
      
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
