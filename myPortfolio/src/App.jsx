import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './assets/js/Header';
import Home from './assets/js/Pages/HomePage';
import Skills from './assets/js/Pages/SkillsPage';
import AboutMe from './assets/js/Pages/AboutMePage';
import Contacts from './assets/js/Pages/ContactsPage';
import Footer from './assets/js/Footer';
import './App.scss';

function App() {

  const [currentMenu, setCurrentMenu] = useState('Main');

  useEffect(() => {
      localStorage.setItem('currentMenu', currentMenu);
  }, [currentMenu]);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;