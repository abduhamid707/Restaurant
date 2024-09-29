import React from "react";
import profileIcon from "../../assets/profil.png"; // Adjust the path to your icon
import showImage from "../../assets/maski.png";
import "./style.scss";
import PromotionCard from '../../components/PromotionCard/PromotionCard';
import { motion } from 'framer-motion'; // Import motion

const Promotion = () => {
    const nightclubData = [
        {
            id: "1",
            paragrph: "Paragrph",
            profileIcon: profileIcon,
            title: "Katta Kafe",
            showImage: showImage,
            date: "22.09.2024",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum inventore incidunt repellat ducimus reiciendis veritatis facilis quas tempore officiis quisquam, rerum assumenda ",
            paragrphCheck: false,
        },
        {
            id: "2",
            paragrph: "Paragrph",
            profileIcon: profileIcon,
            title: "Katta Kafe",
            showImage: showImage,
            date: "22.09.2024",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum inventore incidunt repellat ducimus reiciendis veritatis facilis quas tempore officiis quisquam, rerum assumenda ",
            paragrphCheck: false,
        },
    ];

    return (
        <section className='promotion'>
            <div className="container">
                <div className="nightclub-page-section">
                    {nightclubData.map((promotion) => (
                        <motion.div
                            key={promotion.id}
                            initial={{ opacity: 0, y: 20 }} // Initial state
                            animate={{ opacity: 1, y: 0 }} // Animate to this state
                            transition={{ duration: 0.5 }} // Duration of animation
                        >
                            <PromotionCard data={promotion} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Promotion;
