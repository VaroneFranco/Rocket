import React from 'react'
import s from "./Register.module.css"
function Register() {
    return (
        <div className={s.mainContainer}>
            <div className={s.container}>
                <div className={s.formContainer}>
                    
                    <form action="">
                        <h2>Sign Up</h2>
                        <input className={s.fullname} type="text" placeholder='Full Name'/>
                        <input className={s.email} type="email" placeholder='E-mail'/>
                        <input className={s.password} type="password" placeholder='Password'/>
                        <input className={s.repeatPass} type="password" placeholder='Repeat your Password'/>
                        <button>SIGN UP</button>
                    </form>

                </div>

                <div className={s.imgContainer}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Creative-Tail-rocket.svg/768px-Creative-Tail-rocket.svg.png" alt="rocket" width="90%"/>
                    <p className={s.parrafo}>
                        <strong>The sky is not the limit <br/>
                        is just the beginning...</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register;
