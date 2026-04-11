import { useState } from "react";
import style from "./PortoWeb.module.css"

function PortoWeb() {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState({ title: "", desc: "" });

    const data = {
        A: {
            title: "Al - Point",
            desc: "Uji Coba"
        },
        B: {
            title: "Al - Market",
            desc: "Uji Coba"
        },
        C: {
            title: "W4Learn",
            desc: "Uji Coba"
        }
    };

    const openModal = (type) => {
        setContent(data[type]);
        setShow(true);
    };

    return (
        <div className={style.container}>
            <h1>My <span style={{color: "#ff4c60"}}>Projects</span></h1>

            <div className={style.marquee}>
                <p>Welcomeee! Brothers and Sisters to My Portfolio Web - HAVE A NICE DAY! ENJOYYY</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
            </div>

            <div className={style.cards}>
                <div className={style.card}>
                    <img src="image/projects/al-point.png" alt="project" className={style.projectimage}></img>
                    <h1>Al - Point</h1>
                    <button className={style.btn} onClick={() => openModal("A")}>Learn More</button>
                </div>

                <div className={style.card}>
                    <img src="image/projects/al-market.png" alt="project" className={style.projectimage}></img>
                    <h1>Al - Market</h1>
                    <button className={style.btn} onClick={() => openModal("B")}>Learn More</button>
                </div>

                <div className={style.card}>
                    <img src="image/projects/w4learn.png" alt="project" className={style.projectimage}></img>
                    <h1>W4Learn</h1>
                    <button className={style.btn} onClick={() => openModal("C")}>Learn More</button>
                </div>
            </div>

            <div className={style.footer}>
                &copy; 2025 MSHDQ. All rights reserved.
            </div>


        </div>
    )
}

export default PortoWeb;