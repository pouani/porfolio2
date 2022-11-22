import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './pages/Layout';
import Experience from './pages/Experience';
import Works from './pages/Works';

import { motion, useScroll } from "framer-motion";

function App() {

  const { scrollYProgress } = useScroll();

  return (
    <Router>
        <div className="">
            <Navbar />
            <motion.div
              className="progress-bar"
              style={{ scaleX: scrollYProgress }}
            />
            <Routes>
              <Route index element={<Layout />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/works" element={<Works />} />
            </Routes>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
