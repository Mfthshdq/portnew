import { Link } from "react-router-dom";
import style from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>MSHDQ</h1>
                <div className={style.nav}>
                    <Link to="/" className={style.link}>HOME</Link>
                    <Link to="/about" className={style.link}>ABOUT</Link>
                    <Link to="/service" className={style.link}>SERVICE</Link>
                    <Link to="/portfolio" className={style.link}>PORTFOLIO</Link>
                    <Link to="/toolsandskills" className={style.link}>TOOLS & SKILLS</Link>
                    <Link to="/contact" className={style.link}>CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;