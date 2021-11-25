import React from 'react';
import style from './Loading.module.css';

const Loading =()=> {
    return (
        <div>
            <div className={style.loading__spinner}>
                <h4></h4>
            </div>
            <h5 className={style.loading__spinner_h5}>Loading...</h5>
        </div>
    );
};

export default Loading;