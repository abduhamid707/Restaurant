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
        <div className="category-card" onClick={() => handleImageClick(data.id)}>
            {/* Title */}
            <h3 className="category-title">{data.name}</h3>

            {/* Image */}
            <div className="category-images">
                {data.images.slice(0, 3).map((image, idx) => (
                    <img
                        key={idx}
                        src={image}
                        alt={`${data.name} ${idx + 1}`}
                        className="category-image"
                    />
                ))}
            </div>

            {/* Stars */}
            <div className="rayting_wrap" onClick={(e) => e.stopPropagation()}>
                <Stars />
                <span>Fikrlar: 91</span>
            </div>

            {/* Address */}
            <div className="category-address">
                <p><strong>Address:</strong> {data.address}</p>
            </div>

            {/* Work Hours */}
            <div className="category-hours">
                <p><strong>Work Hours:</strong> {data.workHours}</p>
            </div>

            {/* Contact Button */}
            <div className="category-contact" onClick={(e) => e.stopPropagation()}>
                <a href="tel:+998997867075">
                    <button className="contact-button">Bog'lanish</button>
                </a>
            </div>
        </div>
    );
};

export default CategoryCard;
