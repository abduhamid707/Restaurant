import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import './style.scss'; // Ensure you have this file for styling

const ImageGallery = ({ images }) => {
    const [isOpen, setIsOpen] = useState(false); // Modal visibility
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Currently viewed image index

    // Open modal and set the clicked image index
    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    // Close the modal
    const closeModal = () => {
        setIsOpen(false);
    };

    // Go to the next image
    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Go to the previous image
    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="image-gallery">
            <div className="images-container">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Image ${index + 1}`}
                        onClick={() => openModal(index)}
                        className="gallery-image"
                    />
                ))}
            </div>

            {/* Modal with animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="image-modal"
                        initial={{ opacity: 0 }} // Initial state
                        animate={{ opacity: 1 }} // Animate to this state
                        exit={{ opacity: 0 }} // Exit animation
                        transition={{ duration: 0.3 }} // Duration for the animations
                    >
                        <span className="close-modal" onClick={closeModal}>
                            &times;
                        </span>

                        <motion.img
                            src={images[currentImageIndex]}
                            alt="Large View"
                            className="modal-image"
                            key={currentImageIndex} // Ensure the image animates correctly on change
                            initial={{ scale: 0 }} // Initial scale
                            animate={{ scale: 1 }} // Scale to full size
                            exit={{ scale: 0 }} // Exit scale
                            transition={{ duration: 0.3 }} // Duration for the image scale
                        />

                        {/* Previous and Next buttons with animations */}
                        <motion.button
                            className="prev-btn"
                            onClick={goToPreviousImage}
                        >
                            &#10094;
                        </motion.button>
                        <motion.button
                            className="next-btn"
                            onClick={goToNextImage}
                            // whileHover={{ scale: 1.1 }} // Scale effect on hover
                        >
                            &#10095;
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ImageGallery;
