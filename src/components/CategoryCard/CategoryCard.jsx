import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import Stars from '../Stars/Stars';
import './style.scss';

const CategoryCard = ({ data }) => {
    const navigate = useNavigate();

    const handleImageClick = (id) => {
        navigate(`/cafe/${id}`); // Navigate to cafe page with id
    };

    return (
        <div className="category-card">
            {/* Title */}
            <h3 className="category-title">{data.name}</h3>

            {/* Image */}
            <div className="category-images">
            {data.images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`${data.name} ${idx + 1}`}
            className="category-image"
            onClick={() => handleImageClick(data.id)} // Navigate to cafe with specific id
          />
        ))}
            </div>

            {/* Stars */}
            <Stars />

            {/* Address */}
            <div className="category-address">
                <p><strong>Address:</strong> {data.address}</p>
            </div>

            {/* Work Hours */}
            <div className="category-hours">
                <p><strong>Work Hours:</strong> {data.workHours}</p>
            </div>

            {/* Contact Button */}
            <div className="category-contact">
                <a href="tel:+998997867075">
                    <button className="contact-button">Bog'lanish</button>
                </a>
            </div>
        </div>
    );
};

export default CategoryCard;
