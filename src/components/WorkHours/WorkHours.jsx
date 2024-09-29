import React from 'react';
import { motion } from 'framer-motion'; // Import motion

const WorkHours = ({ hours }) => {
  return (
    <div className="work-hours">
      <h3 className="fs-1 mt-3 mx-3">Ish vaqti:</h3>
      <motion.ul
        className="work-hours-list mx-3"
        initial={{ opacity: 0, y: -20 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Animate to this state
        transition={{ duration: 0.5 }} // Duration of animation
      >
        {hours.map((day, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }} // Initial state for each item
            animate={{ opacity: 1, x: 0 }} // Animate to this state for each item
            transition={{ duration: 0.3, delay: index * 0.1 }} // Duration with staggered delay
          >
            <strong>{day.day}:</strong> {day.time}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default WorkHours;
