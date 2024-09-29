import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.scss";

const NightClub = ({ data }) => {
    // Destructure the properties from the data object
    const { id, profileIcon, paragrph, title, showImage, dateAt, description, paragrphCheck } = data;
    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate(`/nightclubs/${id}`); // Navigate to the specific nightclub page
    };

    return (
        <div className="nightclub-container">
            <div className="profile">
                <img src={profileIcon} alt="Profile Icon" className="profile-icon" />
                <h2 className="nightclub-title">{title}</h2>
            </div>
            <div className="show-image-container">
                <img src={showImage} alt="Night Club Show" className="show-image" />
                {/* <div className="overlay">
                    <h3 className="overlay-text">MASKI SHOU</h3>
                    <p className="overlay-date">{dateAt}</p>
                </div> */}
            </div>
            <div className="paragrph mt-4">
                <h1 className='font-bold'>{paragrph}</h1>
            </div>
            <p className="description"><h3>{description}</h3></p>
            <div className="details-button">

                {paragrphCheck != true &&
                    <button className="ml-auto" onClick={handleDetailClick}>
                        Batafsil
                    </button>
                }
            </div>
        </div>
    );
};

export default NightClub;
