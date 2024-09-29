import { useState } from 'react';
import HeroTop from '../../components/HeroTop/HeroTop';
import Card from '../../components/Cards/Card';
import kafe_img from "../../assets/kafe.png"; // Ensure you have the correct path to your images
import res_img from "../../assets/restaurant.png";

import profileIcon from "../../assets/profil.png"; // Adjust the path to your icon
import showImage from "../../assets/maski.png";
import aksiya from "../../assets/aksiya.png";
import topImg from "../../assets/top10.png"
import "./style.scss"
import NightClub from '../../components/NightClub/NightClub';
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
    let navigate = useNavigate('');
    const cafes = [
        { id: "1", title: "Kafe 1", count: 10, img: kafe_img },
        { id: "2", title: "Kafe 2", count: 5, img: res_img },
        { id: "3", title: "Kafe 3", count: 15, img: kafe_img },
        { id: "4", title: "Kafe 4", count: 7, img: res_img },
        { id: "5", title: "Kafe 5", count: 12, img: kafe_img },
        { id: "6", title: "Kafe 6", count: 3, img: res_img },
        { id: "7", title: "Kafe 7", count: 20, img: kafe_img },
        { id: "8", title: "Kafe 8", count: 8, img: res_img },
    ];


    // Function to toggle showing all cafes
    const handleShowAll = () => {
        navigate("/categories");
    };



    const nightclubs = [
        {
            id: "1",
            profileIcon: profileIcon,
            title: "Katta Kafe",
            paragrph: "Paragrph",
            showImage: showImage,
            dateAt: "22.09.2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse totam dolorem sit temporibus porro laboriosam voluptatibus alias facere ad commodi?"
        },
    ];
    return (
        <div className='home'>
            <HeroTop />
            <div className="container">
                <div className="ads">
                    <div className="ads_content">
                        <div className='card-img' >
                            <img src={topImg} alt="" />
                        </div>
                        <div className='card-img' >
                            <Link to="/promotions" >
                            <img src={aksiya} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                {cafes.slice(0, 4).map(cafe => (
                    <Card key={cafe.id} id={cafe.id} title={cafe.title} count={cafe.count} img={cafe.img} />
                ))}
                <div className="shows_all_cards">
                    <button className="view-all-button_shows" onClick={handleShowAll}>
                        <span>Barchasini ko'rish</span> <i className="bi bi-chevron-compact-right"></i>
                    </button>
                </div>
                {/* <div className="nightclub-page">
                    {nightclubs.map(club => (
                        <NightClub
                            key={club.id}
                            data={club}
                        />
                    ))}
                </div> */}

            </div>
        </div>
    );
};

export default Home;