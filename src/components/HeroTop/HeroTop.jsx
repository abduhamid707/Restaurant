import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper CSS faylini import qilish
import 'swiper/css/autoplay'; // Autoplay stilini import qilish
import { Autoplay } from 'swiper/modules';
import hero_img from "../../assets/hero.png";
import another_img from "../../assets/hero.png"; // Yana bir rasm misoli
import "./style.scss"
const HeroTop = () => {
    return (
        <>
            <div className="hero-container container my-2"> 
                <Swiper
                    modules={[Autoplay]} // Autoplay funksiyasini ishlatish uchun modul
                    autoplay={{ delay: 3000 }} // Rasmlarning avtomatik o'zgarishi, 3 soniyada bir marta
                    loop={true} // Slayder oxiriga yetganda, boshidan qayta boshlash
                >
                    <SwiperSlide>
                        <img src={hero_img} alt="Hero" className="slide-img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={another_img} alt="Another Hero" className="slide-img " />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default HeroTop;
