import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import { motion } from 'framer-motion'; // Import Framer Motion
import 'react-toastify/dist/ReactToastify.css'; // Toastlar uchun CSS
import './style.scss';

const Stars = ({ on, sideRight }) => {
    const [rating, setRating] = useState(0);
    const [isRated, setIsRated] = useState(on ? true : false);
    const [feedback, setFeedback] = useState({
        like: null,
        comment: ''
    });
    const [errors, setErrors] = useState({
        likeError: false,
        commentError: false
    });

    const handleStarClick = (index) => {
        setRating(index);
        setIsRated(true);
    };

    const handleLikeDislike = (type) => {
        setFeedback((prevState) => ({
            ...prevState,
            like: type
        }));
        setErrors((prevState) => ({
            ...prevState,
            likeError: false
        }));
    };

    const handleCommentChange = (e) => {
        setFeedback((prevState) => ({
            ...prevState,
            comment: e.target.value
        }));
        setErrors((prevState) => ({
            ...prevState,
            commentError: false
        }));
    };

    const handleSend = () => {
        const { like, comment } = feedback;
        // let likeError = false;
        let commentError = false;

        // Validation
        // if (!like) {
        //     likeError = true;
        // }
        if (comment.trim() === '') {
            commentError = true;
        }

        setErrors({ commentError });

        // If no errors, submit the form
        if (!commentError) {
            console.log({
                rating,
                // feedback: feedback.like,
                comment: feedback.comment
            });

            // Show success toast
            toast.success("Fikr yuborildi!");

            // Reset states after successful submission
            setIsRated(false);
            setRating(0);
            setFeedback({ like: null, comment: '' });
            setErrors({ likeError: false, commentError: false });
        } else {
            // Show error toast if validation fails
            toast.error("Iltimos, barcha maydonlarni to'ldiring!");
        }
    };

    return (
        <div className="stars-wrapper">
            {/* Toast Container */}
            <ToastContainer />

            <div className="commit_wrap feedback d-flex">
                <div className="stars">
                    {[1, 2, 3, 4, 5].map((star, index) => (
                        <motion.div
                            className='star_bg'
                            key={index}
                            whileHover={{ scale: 1.2 }} // Hover animatsiyasi
                        >
                            <i
                                className={index < rating ? "bi bi-star-fill" : "bi bi-star"}
                                onClick={() => handleStarClick(index + 1)}
                            ></i>
                        </motion.div>
                    ))}
                </div>
                {/* <div className="like-dislike">
                    <i
                        className={feedback.like === 'like' ? "bi bi-hand-thumbs-up-fill" : "bi bi-hand-thumbs-up"}
                        onClick={() => handleLikeDislike('like')}
                        style={errors.likeError ? { border: '2px solid red' } : {}}
                    ></i>
                    <i
                        className={feedback.like === 'dislike' ? "bi bi-hand-thumbs-down-fill" : "bi bi-hand-thumbs-down"}
                        onClick={() => handleLikeDislike('dislike')}
                        style={errors.likeError ? { border: '2px solid red' } : {}}
                    ></i>
                </div> */}
            </div>
            {isRated && (
                <motion.div
                    className="feedback"
                    initial={{ opacity: 0, y: 10 }} // Initial state
                    animate={{ opacity: 1, y: 0 }} // Animate to this state
                    transition={{ duration: 0.3 }} // Transition duration
                >
                    {/* Like/Dislike Icons */}


                    {/* Comment Input */}
                    <div className="comment">
                        <textarea
                            placeholder="Leave a comment"
                            rows="4"
                            className="comment-input"
                            value={feedback.comment}
                            onChange={handleCommentChange}
                            style={errors.commentError ? { border: '2px solid red' } : {}}
                        ></textarea>
                                        {/* Send Button */}
                    <button className="send-button" onClick={handleSend}>
                        Send
                    </button>
                    </div>

    
                </motion.div>
            )}
        </div>
    );
};

export default Stars;
