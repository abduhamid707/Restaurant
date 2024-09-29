import Stars from "../../components/Stars/Stars";
import "./style.scss";
import { motion } from "framer-motion"; // Framer Motion import qilamiz

const Thoughts = () => {
    const userFeedbacks = [
        {
            id: 1,
            text: "Kafe juda yoqdi! Taomlari ajoyib.",
            stars: 5,
            type: "yaxshi"
        },
        {
            id: 2,
            text: "Xizmat tezligi yomon edi. Kutilganidan ko'ra uzoq davom etdi.",
            stars: 2,
            type: "yomon"
        },
        {
            id: 3,
            text: "Muvozanatli taomlar va ajoyib muhit.",
            stars: 4,
            type: "yaxshi"
        },
        {
            id: 4,
            text: "Ichimliklar unchalik yaxshi emasdi, lekin salatlar juda ajoyib.",
            stars: 3,
            type: "yomon"
        },
        {
            id: 5,
            text: "Menga taomlar juda yoqdi, xususan, lag'mon.",
            stars: 5,
            type: "yaxshi"
        },
        {
            id: 6,
            text: "Sizlarning xizmat ko'rsatishingiz yomon, bir necha marta shikoyat qildim.",
            stars: 1,
            type: "yomon"
        }
    ];

    return (
        <div className="thoughts">
            <h3 className="thoughts-title">Fikri bildirish  </h3>
            <Stars on={ true} sideRight={true} />
            <div className="feedback-list">
                {userFeedbacks.map(feedback => (
                    <motion.div
                        key={feedback.id}
                        className={`feedback-item ${feedback.type}`}
                        initial={{ opacity: 0, y: 20 }} // Boshlanish holati
                        animate={{ opacity: 1, y: 0 }} // Animatsiya holati
                        exit={{ opacity: 0, y: 20 }} // Chiqish holati
                        transition={{ duration: 0.5 }} // Animatsiya davomiyligi
                    >
                        <p className="feedback-text">{feedback.text}</p>
                        <div className="feedback-stars">
                            {Array.from({ length: feedback.stars }, (_, index) => (
                                <span key={index} className="star">⭐</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Thoughts;
