import React from 'react';
import profileIcon from "../../assets/profil.png"; // Example profile icon
import userImg from "../../assets/userImg.png"; // Example small user image
import userImgBigger from "../../assets/userImgD.png"; // Example larger user image
import call_img from "../../assets/call.png";
import insta_img from "../../assets/insta.png";
import telegram_img from "../../assets/telegram.png";
import face_img from "../../assets/face.png";
import "./style.scss"; // Assuming you'll create a corresponding style file
import Contact from '../Contacts/Contact';
import Line from '../Line/Line';
import Maps from '../Maps/Maps';

const VacancyDetail = ({ data }) => {
    // Sample vacancy data, replace with actual `data` prop when provided
    const vacancyData = data || {
        id: 1,
        orgName: "Tech Corp",
        profileIcon,
        userImg,
        userImgBigger,
        vacancyType: "Шеф повар керак",
        salary: "$5000",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit minima illo magni odio voluptates quos neque ut quasi blanditiis?"
    };
    const contactData = [
        {
            link: "tel:+998997867075",
            icon: call_img,
            alt: "Call"
        },
        {
            link: "https://www.instagram.com/abduhamid_botirov_",
            icon: insta_img,
            alt: "Instagram"
        },
        {
            link: "https://t.me/AbduhamidBotirov",
            icon: telegram_img,
            alt: "Telegram"
        },
        {
            link: "https://www.facebook.com/",
            icon: face_img,
            alt: "Facebook"
        }
    ];
    return (
        <div className="container">

            <div className="vacancy-detail">
                <div className="vacancy-detail__header">
                    <img src={vacancyData.profileIcon} alt="Organization" className="vacancy-detail__profile-icon" />
                    <h1>{vacancyData.orgName}</h1>
                </div>

                {/* <div className="vacancy-detail__content"> */}
                <div className="vacancy-detail__images">
                    <img src={vacancyData.userImgBigger} alt="Vacancy Image" className="vacancy-detail__img-big" />
                </div>

                <div className="vacancy-detail__info">
                    <h2>{vacancyData.vacancyType}</h2>
                    <p><strong>Salary:</strong> {vacancyData.salary}</p>
                    <p>{vacancyData.about}</p>
                    {/* </div> */}
                </div>
            </div>

            <Line />
            <Contact data={contactData} />
            <Line />
            <div>
                <Maps />
            </div>
        </div>
    );
};

export default VacancyDetail;
