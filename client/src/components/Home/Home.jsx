import React from 'react';
import style from "./Home.module.css";

const Home =()=> {
    return (
        <div className={style.home__container}>
            <div className={style.home__mesa}>
                <div className={style.myteam}>
                    <h2>My Team</h2>
                </div>
                <div className={style.home__mesa__child}>
                    
                </div>
            </div>
            <div className={style.home__chat}>
                <h4>CHAT</h4>
            </div>
        </div>
    );
};

export default Home;