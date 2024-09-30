import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './layout/Header/Header';
import "./App.css"
import Home from './pages/Home/Home';
import Footer from './layout/Footer/Footer';
import Ads from './pages/Ads/Ads';
import Cafe from './pages/Cafe/Cafe';
import Categories from './pages/Categories/Categories';
import Vacancies from './pages/Vacancies/Vacancies';
import VacancyDetail from './components/VacancyDetails/VacancyDetail';
import AllCategories from './components/AllCategories/AllCategories';
import About from './pages/About/About';
import Promotion from './pages/Promotions/Promotion';
import PromotionDetail from './components/PromotionDetail/PromotionDetail';
import Thoughts from './pages/Thoughts/Thoughts';
const App = () => {

  return (

    <div className="sm-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/category/:id" element={<Categories />} /> 
        <Route path="/promotions" element={<Promotion />} /> 
        <Route path="/promotion/:id" element={<PromotionDetail />} /> 
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/vacancies/detaile/:id" element={<VacancyDetail />} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/nightclubs/:id" element={<Ads />} />
        <Route path="/cafe/:id" element={<Cafe />} />
        <Route path="/thoughts" element={<Thoughts />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
