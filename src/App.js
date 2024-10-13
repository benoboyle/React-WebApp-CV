import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';  // Import the sidebar component
import Home from './Home';
import Projects from './Projects';
import TechStack from './TechStack';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/TechStack" element={<TechStack />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
