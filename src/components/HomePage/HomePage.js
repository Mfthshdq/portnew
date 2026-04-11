import { Link } from "react-router-dom";
import style from "./HomePage.module.css"

function HomePage() {
    return (
        <div className={style.container}>
            <div className={style.hero}>

                <div className={style.herotxt}>
                    <h1>Welcome!</h1>
                    <h2>
                        I Am <span className={style.highlight}>Frontend Developer</span>
                    </h2>
                    <p>
                        I Am a Frontend Developer with extensive experience for over 2 years.
                        My expertise is to create modern websites, UI/UX Design, and more.
                    </p>

                    <div className={style.btns}>
                        <Link to={"/service"} className={`${style.btn} ${style.primary}`}>
                            Hire Me
                        </Link>
                        <Link to={"/portfolio"} className={`${style.btn} ${style.secondary}`}>
                            View Portfolio
                        </Link>
                    </div>
                </div>

                <div className={style.heroimg}>
                    <div className={style.glow}></div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                        alt="shape"
                    />
                </div>
                
            </div>
        </div>
    )
}

export default HomePage;