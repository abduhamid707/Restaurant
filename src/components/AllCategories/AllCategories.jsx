import React from 'react';
import Card from '../Cards/Card';
import kafe_img from "../../assets/kafe.png"; // Ensure you have the correct path to your images
import res_img from "../../assets/restaurant.png";
import Line from '../Line/Line';
const AllCategories = () => {
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
    return (
        <>
            <Line/>
            <div className="container mt-1">
            {cafes.map(cafe => (
                <Card key={cafe.id} id={cafe.id} title={cafe.title} count={cafe.count} img={cafe.img} />
            ))}
</div>
        </>
    );
};

export default AllCategories;