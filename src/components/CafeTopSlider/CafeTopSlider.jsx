import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import novvat_img from '../../assets/novvatTop.png';
import novvat_img_2 from '../../assets/hero.png';
import './style.scss';

const CafeTopSlider = () => {
    // Local data for the slider
    const sliderData = [
        { id: 1, title: 'Novvat Cafe', img: novvat_img, description: 'The best coffee in town!' },
        { id: 2, title: 'Hero Cafe', img: novvat_img_2, description: 'A great place to relax!' },
        { id: 3, title: 'Cozy Corner', img: novvat_img, description: 'Comfort and taste combined!' },
        { id: 4, title: 'Sunset Café', img: novvat_img_2, description: 'Enjoy a cup with a view!' },
    ];

    return (
        <div className="cafe-top-slider container">
            <h3 className='cafe_title'>NAVVAT RESTORAUNT</h3>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="swiper-container"
            >
                {sliderData.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <div className="slide-content">
                            <img src={slide.img} alt={slide.title} />
                            {/* <div className="slide-overlay">
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                            </div> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CafeTopSlider;
