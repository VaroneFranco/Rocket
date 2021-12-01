import React from 'react';
import style from './Loading.module.css';

const Loading =()=> {
    return (
        <div>
            <div className={style.loading__spinner}>
                <span className={style.loading__rocket} role="rocket" aria-label="rocket"><h4>🚀</h4></span>
            </div>
            <h5 className={style.loading__spinner_h5}>Loading...</h5>
        </div>
    );
};

export default Loading;