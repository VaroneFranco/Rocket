import React from 'react';
import rocket from './Rocket2.mp4';
import style from './TrueLandingPage.module.css';

const TrueLandingPage =()=> {

    return (
        <div className={style.TLP_container}>
            <video autoPlay loop muted className={style.TLP_video}>
                <source type="video/mp4" src={rocket} />
            </video>
        </div>
    );
};

export default TrueLandingPage;