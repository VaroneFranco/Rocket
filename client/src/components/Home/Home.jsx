import React from 'react';
import style from "./Home.module.css";
import Silla from '../Silla/Silla.jsx';
import Loading from '../Loading/Loading.jsx';

const arr = [
    // {name: "José",surname: "Perez",img: "https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/05/peinado-hacia-atraxxs-hombre4-300x300.jpg"},
    // {name: "Alberto",surname: "Gonzalez",img: "https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/05/peinado-hacia-atraxxs-hombre4-300x300.jpg"},
    // {name: "Jorge",surname: "Martinez",img: "https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/05/peinado-hacia-atraxxs-hombre4-300x300.jpg"},
    // {name: "Carlos",surname: "Costa",img: "https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/05/peinado-hacia-atraxxs-hombre4-300x300.jpg"}
];

const Home =()=> {
    return (
        <div className={style.home__container}>
            <div className={style.home__mesa}>
                <div>
                    <h2>My Team</h2>
                </div>
                <div className={style.home__mesa__child}>
                   {
                       arr.length 
                       ? 
                       arr.map(user => (
                           <Silla
                           name = {user.name}
                           surname = {user.surname}
                           img = {user.img}
                           />
                       ))
                       :
                       <Loading />
                   }
                </div>
            </div>
            <div className={style.home__chat}>
                <h4>CHAT</h4>
            </div>
        </div>
    );
};

export default Home;