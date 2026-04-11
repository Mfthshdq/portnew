import { Link } from "react-router-dom";
import style from "./Portfolio.module.css";
const JPG_FILE_URL = "http://localhost:3000/image/projects/CV Muhammad Miftahusshiddiq.jpg";

function Portfolio() {
    const downloadFileAtURL = (url) => {
        const fileName = url.split('/').pop()
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
        link.remove();
    };

    return (
        <div className={style.container}>
            <div className={style.hero}>
                <h1>Hi, I Am <span>Muhammad Miftahusshiddiq</span></h1>
                <p>Frontend Developer - React Enthusiast</p>
                <button className={style.btn} onClick={() => { downloadFileAtURL(JPG_FILE_URL) }}>Download CV</button>
            </div>

            <div className={style.projects}>
                <h1 className={style.title}>My <span style={{ color: "#ff4c60" }}>Projects</span></h1>

                <div className={style.project_list}>
                    <Link to="/porto-web" className={style.card}>
                        <h3>Portofolio Website</h3>
                        <p>Website portofolio modern dengan React.js</p>
                    </Link>

                    <Link to="/porto-landingpage" className={style.card}>
                        <h3>Landing Page</h3>
                        <p>Landing page responsive untuk bisnis</p>
                    </Link>
                </div>
            </div>

            <div className={style.footer}>
                &copy; 2025 MSHDQ. All rights reserved.
            </div>

        </div>
    )
}

export default Portfolio;