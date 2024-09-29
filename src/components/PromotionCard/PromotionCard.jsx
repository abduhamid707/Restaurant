import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion
import "./style.scss";

const PromotionCard = ({ data }) => {
    // Destructure the properties from the data object
    const { id, profileIcon, paragrph, title, showImage, description, paragrphCheck } = data;
    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate(`/promotion/${id}`); // Navigate to the specific nightclub page
    };

    return (
        <motion.div
            className="nightclub-container mt-2 border-1"
            initial={{ opacity: 0, scale: 0.95 }} // Initial state
            animate={{ opacity: 1, scale: 1 }} // Animate to this state
            transition={{ duration: 0.3 }} // Duration of animation
        >
            <div className="profile">
                <img src={profileIcon} alt="Profile Icon" className="profile-icon" />
                <h2 className="nightclub-title">{title}</h2>
            </div>
            <div className="show-image-container">
                <img src={showImage} alt="Night Club Show" className="show-image" />
            </div>
            <div className="paragrph mt-1">
                <h1 className='font-bold'>{paragrph}</h1>
            </div>
            <p className="description"><h3>{paragrphCheck !== false && description}</h3></p>
            <div className="details-button">
                {paragrphCheck !== true && (
                    <button className="ml-auto" onClick={handleDetailClick}>
                        Batafsil
                    </button>
                )}
            </div>
        </motion.div>
    );
};

export default PromotionCard;
