import React from 'react';
import "./style.scss"
const Maps = () => {
    return (
        <div className='map_wrapper'>
            <div className="container">
                <h3 className="fs-1 mt-3">Manzilimiz:</h3>
                <p className='fs-3'>Navoiy.sh I.Karimov 103a-13</p>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95887.2606326998!2d69.26252450821619!3d41.320242190870424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1727361643891!5m2!1sen!2s"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Our location"
                        className='map_direct'
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Maps;
