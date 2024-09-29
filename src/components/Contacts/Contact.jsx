import React from "react";
import { motion } from "framer-motion"; // Import motion for animations
import "./style.scss"; // Ensure you have this file for styling

const Contact = ({ data }) => {
  return (
    <section className="contact">
      <div className="container">
        <h3 className="fs-1 mt-3">Biz bilan bog’lanish:</h3>
        <ul className="contact-list">
          {data.map((contact, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: 20 }} // Initial state for animation
              animate={{ opacity: 1, y: 0 }} // Animate to this state
              exit={{ opacity: 0, y: 20 }} // Exit animation
              transition={{ duration: 0.3 }} // Duration for the animations
            >
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <img src={contact.icon} alt={contact.alt} className="contact-icon" />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
