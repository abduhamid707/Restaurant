import React, { useState } from 'react';
import "./style.scss"
import Vacancy from '../../components/Vacancy/Vacancy';
import userImg from "../../assets/userImg.png";
import profileIcon from "../../assets/profil.png"; // Example profile icon

const Vacancies = () => {
    const vacanciesData = [
        {
            id: 1,
            orgName: "Tech Corp",
            profileIcon,
            userImg: userImg, // Replace with actual user image
            vacancyType: "Шеф повар керак",
            salary: "$5000",
            about: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit minima illo magni odio voluptates quos neque ut quasi blanditiis?"
        },
        {
            id: 2,
            orgName: "Design Studio",
            profileIcon,
            userImg: userImg, // Replace with actual user image
            vacancyType: "Шеф повар керак",
            salary: "$3000",
            about: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit minima illo magni odio voluptates quos neque ut quasi blanditiis?"
        }
        // Add more vacancies here
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    // Filter vacancies based on search term
    const filteredVacancies = vacanciesData.filter((vacancy) =>
        vacancy.orgName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="container">
            <div className="vacancies">
                {/* Search Bar with Filter Icon */}
                <div className="vacancies__filter">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search vacancies..."
                    />
                    <i className="bi bi-filter"></i>
                    {/* <img src={filterIcon} alt="Filter Icon" className="filter-icon" /> */}
                </div>

                {/* Vacancy List */}
                <div className="vacancies__list">
                    {filteredVacancies.map((vacancy) => (
                        <Vacancy
                            key={vacancy.id}
                            data={vacancy}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Vacancies;