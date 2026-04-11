import style from "./ToolAndSkill.module.css"

function ToolAndSkill() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Tools And <span style={{color: "#ff4c60"}}>Skills</span></h1>

            <div className={style.toolsandskillslist}>

                <div className={style.toolskill}>
                    <div className={style.tool}>
                        <img src="image/toolsandskills/canva.png" alt="canva" className={style.image}></img>
                    </div>
                    <h1><span style={{color: "#ff4c60"}}>C</span>anva</h1>
                </div>

                <div className={style.toolskill}>
                    <div className={style.tool}>
                        <img src="image/toolsandskills/html.png" alt="html" className={style.image}></img>
                    </div>
                    <h1><span style={{color: "#ff4c60"}}>H</span>TML</h1>
                </div>

                <div className={style.toolskill}>
                    <div className={style.tool}>
                        <img src="image/toolsandskills/react.png" alt="react" className={style.image}></img>
                    </div>
                    <h1>R<span style={{color: "#ff4c60"}}>E</span>ACT</h1>
                </div>

                <div className={style.toolskill}>
                    <div className={style.tool}>
                        <img src="image/toolsandskills/laravel.png" alt="laravel" className={style.image}></img>
                    </div>
                    <h1><span style={{color: "#ff4c60"}}>L</span>aravel</h1>
                </div>

                <div className={style.toolskill}>
                    <div className={style.tool}>
                        <img src="image/toolsandskills/css.png" alt="css" className={style.image}></img>
                    </div>
                    <h1>CS<span style={{color: "#ff4c60"}}>S</span></h1>
                </div>

                <div className={style.toolskill}>
                    <div className={style.tool}>
                        <img src="image/toolsandskills/figma.png" alt="figma" className={style.image}></img>
                    </div>
                    <h1>Figm<span style={{color: "#ff4c60"}}>A</span></h1>
                </div>

            </div>

            <div className={style.marquee}>
                <p>GG GA CELLL</p>
                <p>GG KANNN</p>
                <p>GASI B AJA WKWKWKWK</p>
            </div>

        </div>
    )
}

export default ToolAndSkill;