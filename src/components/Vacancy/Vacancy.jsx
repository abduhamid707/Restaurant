import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const Vacancy = ({ data }) => {
    let { id, orgName, userImg, vacancyType, salary,profileIcon }=data;
    const navigate = useNavigate();

    // Navigate to vacancy detail page with id
    const handleVacancyClick = () => {
        navigate(`/vacancies/detaile/${id}`);
    };

    return (
        <div className="vacancy-card" onClick={handleVacancyClick}>
            {/* Profile Section */}
            <div className="vacancy-card__profile">
                <img src={profileIcon} alt="Organization Icon" className="vacancy-card__profile-icon" />
                <h5 className="vacancy-card__org-name">{orgName}</h5>
            </div>
            <div className="vacancy_detailes_wrapper">
                {/* User Image */}
                <div className="vacancy-card__user-image">
                    <img src={userImg} alt="User" className="vacancy-card__img" />
                </div>

                {/* Vacancy Details */}
                <div className="vacancy-card__details">
                    <p className="vacancy-card__type"> {vacancyType}</p>
                    <p className="vacancy-card__salary"> {salary}</p>
                </div>
            </div>

        </div>
    );
};

export default Vacancy;
