import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.scss";


const Card = ({ id, title, count, img }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/category/${id}`); // Adjust the path as needed
    };

    return (
        <div className="card-kafe" onClick={handleCardClick}>
            <div className="card-kafe-img">
                <img src={img} alt={title} className="card-image" />
            </div>
            <div className="card-kafe-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-count">{count} ta</p>
            </div>
        </div>
    );
};

export default Card;
