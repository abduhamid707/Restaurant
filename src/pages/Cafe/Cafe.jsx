import { useState } from "react";
import CafeTopSlider from "../../components/CafeTopSlider/CafeTopSlider";
import Line from "../../components/Line/Line";
import Stars from "../../components/Stars/Stars";
import res_img_1 from "../../assets/cat1.png"
import res_img_2 from "../../assets/cat2.png"
import res_img_3 from "../../assets/cat3.png"
import "./style.scss"
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import call_img from "../../assets/call.png";
import insta_img from "../../assets/insta.png";
import telegram_img from "../../assets/telegram.png";
import face_img from "../../assets/face.png";
import Contact from "../../components/Contacts/Contact";
import Maps from "../../components/Maps/Maps";
import WorkHours from "../../components/WorkHours/WorkHours";
const Cafe = () => {
    const [activeCategory, setActiveCategory] = useState('home'); // Default active category

    const categories = [
        { id: 'home', label: 'Бош сахифа' },
        { id: 'menu', label: 'Меню' },
        { id: 'offers', label: 'Акциялар' },
        // { id: 'vacancies', label: 'Ваканциялар' },
    ];
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
    const workHoursData = [
        { day: 'Dushanba', time: '09:00 - 22:00' },
        { day: 'Seshanba', time: '09:00 - 22:00' },
        { day: 'Chorshanba', time: '09:00 - 22:00' },
        { day: 'Payshanba', time: '09:00 - 22:00' },
        { day: 'Juma', time: '09:00 - 22:00' },
        { day: 'Shanba', time: '09:00 - 22:00' },
        { day: 'Yakshanba', time: 'Dam olish kuni' } 
    ];
    const images = [res_img_1, res_img_2, res_img_3];
    return (
        <section className="cafe">
            <CafeTopSlider />
            <div className="container">
                <div className="mb-1">
                    <div className=" comment_wrapper">
                        <div className="comments">
                            <span>Fikrlar</span>
                            <span>|  38</span>
                        </div>
                        <div className=" stars_wrapper ">
                            <Stars />
                        </div>
                    </div>
                </div>
                <Line />

                <div className="restaurant_categories">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
                <Line />
                <div className="restaurant-images mt-4 mb-4">
                    <ImageGallery images={images} /> {/* Pass the images array to the component */}
                </div>
                <Line />
                <div>
                    <Line />
                    <Contact data={contactData} />
                    <Line />
                </div>
                <div className="res_rules">
                    <div className="container">
                        <p>ISHONCH sizga ishonadi — daromadingiz muhim emas! </p>
                        <p>Muddatli to‘lov yanada osonlashdi. Endi ISHONCH do‘konlaridan 10 000 dan ortiq mahsulotlarni tez va qulay muddatli to‘lovga barchangiz xarid qilishingiz mumkin. </p>
                        <p>Qolaversa, quyidagi qo‘shimcha qulayliklarni taklif etamiz:
                            — Avtomobil egalari va pensionerlarga muddatli to‘lov uchun pasport kifoya;
                            — Davlat organlari va davlat tashkiloti xodimlari uchun qulay muddatli to‘lov shartlari.</p>
                        <p>
                            ▶️ Foydali xaridlar qilish uchun ISHONCH do‘konlariga tashrif buyuring!
                        </p>
                    </div>
                </div>
                <div>
                    <Maps />
                </div>
                <div>
                    <WorkHours hours={workHoursData} />
                </div>
            </div>
        </section>
    );
};

export default Cafe;