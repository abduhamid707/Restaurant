import profileIcon from "../../assets/profil.png"; // Adjust the path to your icon
import showImage from "../../assets/maski.png";
import call_img from "../../assets/call.png";
import insta_img from "../../assets/insta.png";
import telegram_img from "../../assets/telegram.png";
import face_img from "../../assets/face.png";
import "./style.scss"
import PromotionCard from "../PromotionCard/PromotionCard";
import Line from "../Line/Line";
import Contact from "../Contacts/Contact";
import Maps from "../Maps/Maps";
const PromotionDetail = () => {
    const nightclubData = {
        id: "1",
        paragrph: "Paragrph",
        profileIcon: profileIcon,
        title: "Katta Kafe",
        showImage: showImage,
        date: "22.09.2024",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum inventore incidunt repellat ducimus reiciendis veritatis facilis quas tempore officiis quisquam, rerum assumenda ",
        paragrphCheck: true,
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
        <>
            <div className="nightclub-page-section">
                <div className="container">
                    <PromotionCard
                        data={nightclubData}
                    />
                </div>
                    <Line />
                    <Contact data={contactData} />

                    <Line />
                    <Maps />
            </div>
        </>
    );
};

export default PromotionDetail;