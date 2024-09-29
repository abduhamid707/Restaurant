import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion
import "./styles.scss";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedLang, setSelectedLang] = useState('');

    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleRegionChange = (e) => {
        setSelectedRegion(e.target.value);
        console.log('Selected Region:', e.target.value);
    };

    const handleLangChange = (e) => {
        setSelectedLang(e.target.value);
        console.log('Selected Language:', e.target.value);
    };

    // Close sidebar on location change
    useEffect(() => {
        setIsSidebarOpen(false);
    }, [location]);

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        {/* <button className="menu-button" onClick={toggleSidebar}>
                            <i className="bi bi-list"></i>
                        </button> */}

                        <motion.div className="select-region" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                            <div className="select-container">
                                <select onChange={handleRegionChange}>
                                    <option value="">Viloyatni tanlang</option>
                                    <option value="Toshkent">Toshkent</option>
                                    <option value="Samarqand">Samarqand</option>
                                    <option value="Buxoro">Buxoro</option>
                                    <option value="Farg'ona">Farg'ona</option>
                                    <option value="Andijon">Andijon</option>
                                    <option value="Namangan">Namangan</option>
                                </select>
                                <i className="bi bi-caret-down-fill"></i>
                            </div>
                        </motion.div>

                        <motion.div className='langs' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                            <select onChange={handleLangChange}>
                                <option value="uz">UZ</option>
                                <option value="eng">ENG</option>
                                <option value="rus">RUS</option>
                            </select>
                        </motion.div>
                    </div>

                    <motion.div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
                        initial={{ x: '-100%' }}
                        animate={isSidebarOpen ? { x: 0 } : { x: '-100%' }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul>
                            <li><Link to="/about-us">Biz haqimizda</Link></li>
                            <li><Link to="/">Bosh Sahifa</Link></li>
                            <li><Link to="/category">Kategoryalar</Link></li>
                            <li><Link to="/promotions">Aksiyalar</Link></li>
                            <li><Link to="/vacancies">Vakansiyalar</Link></li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Header;
