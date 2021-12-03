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
           
                <div className={s.img}>
                
                    <img src={require("../../media/4.jpeg")} alt="" width="400px"/>
                </div>
                <div className={s.text}>
                    <p>Nuestra experiencia en Henry nos ha dado a entender que el trabajo en equipo facilita el cumplimiento de objetivos, 
                        incrementa la motivación y la creatividad, y favorece las habilidades sociales de cada uno. 
                        El trabajo en equipo es una capacidad altamente valorada en el mercado laboral, 
                        y es una de las características más demandadas por las empresas.
                        Por eso, desarollamos <strong style={{"color":"#fff"}}>Rocket</strong>, con el valor de la cooperacion como eje. 
                        El trabajo en equipo responde a una manera organizada y coordinada de trabajar entre varias personas con la finalidad de alcanzar metas comunes.
                        <br/>
                        Nosotros somos la plataforma que permite que esto suceda. 
                        <br/>
                        <br/>

                        "el talento gana partidos, pero el trabajo en equipo y la inteligencia gana campeonatos”.
                        <br/>
                            -Michael Jordan</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFF" fill-opacity="1" d="M0,128L18.5,117.3C36.9,107,74,85,111,112C147.7,139,185,213,222,213.3C258.5,213,295,139,332,122.7C369.2,107,406,149,443,160C480,171,517,149,554,138.7C590.8,128,628,128,665,154.7C701.5,181,738,235,775,229.3C812.3,224,849,160,886,149.3C923.1,139,960,181,997,170.7C1033.8,160,1071,96,1108,101.3C1144.6,107,1182,181,1218,224C1255.4,267,1292,277,1329,256C1366.2,235,1403,181,1422,154.7L1440,128L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
            </div>





            <div className={s.thirdContainer} id='third'>
                
                <div className={s.funcionamiento}>
                    
                    <input type="checkbox" className={s.checkbox} id='verPrecios'/>
                    <div className={s.text}>
                        <h3>¿Cómo Empezar?</h3>
                        <p>
                            Contáctanos para recibir mas información, y... ¿por qué no? registrar tu institucion y comenzar a conectar a tus alumnos a través de la mejor plataforma para ello de todo el universo!
                            <br/>
                            <br/>Arg: +54 3815 957789
                            <br/>Cog: +23 5825 687989
                        </p>
                        <button>Contactanos</button>
                    </div>
                    <div className={s.img}>
                        <img src="https://mazyv.com/wp-content/uploads/2020/02/1-1.png" alt="" width="100%"/>
                        <label for="verPrecios" className={s.boton}>
                            <h4>ver tarifas⮕</h4>
                        </label>
                    </div>

                    <div className={s.preciosPanel}>
                        <div className={s.text}>
                            <h2>TARIFAS</h2>
                            <label for="verPrecios" className={s.boton1}>
                                <h4>volver</h4>
                            </label>
                            <img src="https://balddesign.com.ar/wp-content/uploads/2020/11/paypal.png" alt=""width="95%"/>
                        </div>
                        <div className={s.priceContainer}>
                            <h4>Plan Bronce</h4>
                            <p>
                                <br/>-Admins: <strong>2</strong>
                                <br/>-Estudiantes: <strong>100</strong>max
                                <br/>-Soporte Técnico: <strong>Nunca</strong>
                            </p>
                            <h5>$400usd per month</h5>   
                        </div>
                        <div className={s.priceContainer}>
                            <h4>Plan Silver</h4>
                            <p>
                                <br/>-Admins: <strong>5</strong>
                                <br/>-Estudiantes: <strong>300</strong>max
                                <br/>-Soporte Técnico: <strong>De vez en cuando</strong>
                            </p>
                            <h5>$700usd per month</h5>   
                        </div>
                        <div className={s.priceContainer}>
                            <h4>Plan Gold</h4>
                            <p>
                                <br/>-Admins: <strong>unlimited</strong>
                                <br/>-Estudiantes: <strong>10000</strong>max
                                <br/>-Soporte Técnico: <strong>Si</strong>
                            </p>
                            <h5>$4400usd per month</h5>   
                        </div>
                        
                    </div>

                </div>
                
                
                <div className={s.precios}>
                    
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
