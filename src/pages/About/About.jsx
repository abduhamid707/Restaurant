import "./style.scss";
import { motion } from 'framer-motion'; // Import motion

const About = () => {
    // Animation variants for the main container and individual items
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <motion.div
            className="about"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ duration: 0.5 }}
        >
            <motion.h1 className="about-title" variants={itemVariants} transition={{ duration: 0.3 }}>
                Biz Haqimizda
            </motion.h1>
            <motion.p className="about-description" variants={itemVariants} transition={{ duration: 0.3 }}>
                Bizning kafe o'z mijozlariga eng yaxshi xizmat va ajoyib taomlarni taklif qilishga bag'ishlangan.
                Har bir taomimiz sifatli ingredientlardan tayyorlanadi va bizning maqsadimiz sizni har safar xursand qilishdir.
            </motion.p>
            <motion.h2 className="about-mission" variants={itemVariants} transition={{ duration: 0.3 }}>
                Missiyamiz
            </motion.h2>
            <motion.p className="about-mission-description" variants={itemVariants} transition={{ duration: 0.3 }}>
                Bizning missiyamiz - har bir mehmonimiz uchun unutilmas tajriba yaratish.
                Bizning jamoamiz mijozlarimizning talablarini qondirish uchun har doim tayyordir.
            </motion.p>
            <motion.h2 className="about-team" variants={itemVariants} transition={{ duration: 0.3 }}>
                Bizning Jamoamiz
            </motion.h2>
            <motion.div className="team-members" initial="hidden" animate="visible" variants={containerVariants} transition={{ duration: 0.5 }}>
                {[
                    {
                        name: "Ali Karimov",
                        role: "Oshpaz",
                        description: "Ali, 10 yillik tajribaga ega, eng yaxshi milliy taomlarimizni tayyorlaydi.",
                        image: "https://picsum.photos/200/300"
                    },
                    {
                        name: "Sara Tashkentova",
                        role: "Menejer",
                        description: "Sara, jamoani boshqaradi va xizmat ko'rsatish sifatini ta'minlaydi.",
                        image: "https://picsum.photos/200/300"
                    },
                    {
                        name: "Timur Rakhimov",
                        role: "Ofitsiant",
                        description: "Timur, mijozlarimizga eng yaxshi xizmatni taklif qilish uchun har doim tayyordir.",
                        image: "https://picsum.photos/200/300"
                    },
                ].map((member, index) => (
                    <motion.div
                        className="team-member"
                        key={index}
                        variants={itemVariants}
                        transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered animation for team members
                    >
                        <img src={member.image} alt={member.role} className="team-member-image" />
                        <h3 className="team-member-name">{member.name}</h3>
                        <p className="team-member-role">{member.role}</p>
                        <p className="team-member-description">{member.description}</p>
                    </motion.div>
                ))}
            </motion.div>
            <motion.h2 className="about-values" variants={itemVariants} transition={{ duration: 0.3 }}>
                Qadriyatlarimiz
            </motion.h2>
            <motion.ul className="values-list" initial="hidden" animate="visible" variants={containerVariants} transition={{ duration: 0.5 }}>
                <motion.li variants={itemVariants} transition={{ duration: 0.3 }}>✨ Sifatli taomlar</motion.li>
                <motion.li variants={itemVariants} transition={{ duration: 0.3 }}>🌟 Mijozlarga xizmat ko'rsatish</motion.li>
                <motion.li variants={itemVariants} transition={{ duration: 0.3 }}>🤝 Halollik va ishonch</motion.li>
                <motion.li variants={itemVariants} transition={{ duration: 0.3 }}>🌍 Ijtimoiy mas'uliyat</motion.li>
            </motion.ul>
        </motion.div>
    );
};

export default About;
