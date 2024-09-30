import React from 'react';
import "./style.scss";
import { NavLink } from 'react-router-dom';
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
                        { icon: <i className="bi bi-house-door"></i>, activeIcon: <i className="bi bi-house-door-fill"></i>, path: "/", title: "Home" },
                        { icon: <i className="bi bi-menu-up"></i>, activeIcon: <i className="bi-caret-up-fill"></i>, path: "/categories", title: "Kategoryalar" },
                        { icon: <i className="bi bi-list"></i>, activeIcon: <i className="bi bi-list-check"></i>, path: "/promotions", title: "Aksiyalar" },
                        { icon: <i className="bi bi-chat-left-dots"></i>, activeIcon: <i className="bi bi-chat-left-dots-fill"></i>, path: "/thoughts", title: "Fkirlar" }
                    ].map((item, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 10 }} // Initial state for each item
                            animate={{ opacity: 1, y: 0 }} // Animate to this state for each item
                            transition={{ duration: 0.3, delay: index * 0.1 }} // Duration with staggered delay
                        >
                            <NavLink
                                to={item.path}
                                title={item.title}
                                className={({ isActive }) => isActive ? 'active' : ''}
                            >
                                {/* If link is active, show the filled icon, otherwise, show the regular icon */}
                                {({ isActive }) => isActive ? item.activeIcon : item.icon}
                            </NavLink>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </footer>
    );
};

export default Footer;
