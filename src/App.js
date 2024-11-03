import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Projects from './Projects';
import TechStack from './TechStack';
import Welcome from './Welcome';
import Languages from './Languages';
import CV from './CV';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/TechStack" element={<TechStack />} />
            <Route path="/Welcome" element={<Welcome />} />
            <Route path="/CV" element={<CV />} />  
            <Route path="/Languages" element={<Languages />}/>
          </Routes>
        </div>
      </div>
      <div>
      </div>
    </Router>
  );
}

export default App;
