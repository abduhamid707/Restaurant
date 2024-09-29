import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <motion.ul
                    initial={{ opacity: 0 }} // Initial state for the list
                    animate={{ opacity: 1 }} // Animate to this state
                    transition={{ duration: 0.5 }} // Duration of the animation
                >
                    {[
                        { name: "Bosh Sahifa", path: "/" },
                        { name: "Katigoryalar", path: "/categories" },
                        { name: "Aksiyalar", path: "/promotions" },
                        // { name: "Vakansiyalar", path: "/vacancies" },
                        { name: "Fkirlar", path: "/thoughts" }
                    ].map((item, index) => (
                        <motion.li 
                            key={index}
                            initial={{ opacity: 0, y: 10 }} // Initial state for each item
                            animate={{ opacity: 1, y: 0 }} // Animate to this state for each item
                            transition={{ duration: 0.3, delay: index * 0.1 }} // Duration with staggered delay
                        >
                            <Link to={item.path}>{item.name}</Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </footer>
    );
};

export default Footer;
