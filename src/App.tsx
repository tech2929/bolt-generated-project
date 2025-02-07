import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Industries from './pages/Industries';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Trial from './pages/Trial';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/trial" element={<Trial />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
