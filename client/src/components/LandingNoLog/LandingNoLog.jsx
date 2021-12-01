import React, {useState, useEffect} from 'react'
import NavbarNoLog from './navbar/NavbarNoLog';
import s from "./LandingNoLog.module.css"
function LandingNoLog() {
    const [scrollHeight, setScrollHeight] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position);
      }
      
      useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
      }, [scrollHeight])
    
    
    return (
        <div className={s.mainContainer}>
           <NavbarNoLog isScrolling={scrollHeight}/> 
            <div className={s.firstContainer} id='first'>
                <div className={s.text}>
                    <h2>Rocket</h2>
                        <p>Las RocketMeet son herramientas que se pueden usar como conferencias, informes y más. Tienen varias finalidades que las convierten en herramientas poderosas para enseñar.
                        </p>
                </div>
                <div className={s.img}>
                    <img src={require("../../media/1.jpeg")} alt="" width="450px"/>
                </div>
            </div>


            <div className={s.secondContainer} id='second'>
                <h2>TRABAJO EN EQUIPO EFICAZ</h2>
                <div className={s.text}>
                    <p>Los elementos y habilidades que necesitas para un equipo exitoso</p>
                </div>
                <div className={s.img}>
                    <img src={require("../../media/3.jpeg")} alt="" width="850px"/>
                </div>
            </div>


            <div className={s.thirdContainer} id='third'>
                <div className={s.img}>
                    <img src={require("../../media/4.jpeg")} alt="" width="400px"/>
                </div>
                <div className={s.text}>
                    <p>Nuestra experiencia en Henry nos ha dado a entender que el trabajo en equipo facilita el cumplimiento de objetivos, 
                        incrementa la motivación y la creatividad, y favorece las habilidades sociales de cada uno. 
                        El trabajo en equipo es una capacidad altamente valorada en el mercado laboral, 
                        y es una de las características más demandadas por las empresas.
                        Por eso, desarollamos <strong style={{"color":"#FF914D"}}>Rocket</strong>, con el valor de la cooperacion como eje. 
                        El trabajo en equipo responde a una manera organizada y coordinada de trabajar entre varias personas con la finalidad de alcanzar metas comunes.
                        <br/>
                        Nosotros somos la plataforma que permite que esto suceda. 
                        <br/>
                        <br/>

                        "el talento gana partidos, pero el trabajo en equipo y la inteligencia gana campeonatos”.
                        <br/>
                            -Michael Jordan</p>
                </div>
            </div>

            <div className={s.fourthContainer}>
                <div className={s.text}>
                    <h2>CONECTAMOS PERSONAS JUNTO A</h2>
                </div>
                <div className={s.img}>
   
                </div>
            </div>

            <div className={s.fifthContainer} id='team'>
                <h1>QUIENES SOMOS</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum quam sequi adipisci nostrum minima maiores dolores eos ducimus, magni vitae molestias dolorem, dolorum quisquam expedita quo eius necessitatibus itaque corrupti.</p>
            </div>
        </div>
    )
}

export default LandingNoLog
