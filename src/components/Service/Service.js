import { Link } from "react-router-dom";
import style from "./Service.module.css"

function Service() {
    return (
        <div className={style.container}>
            <div className={style.service}>
                <h1>My <span className={style.highlight}>Services</span></h1>

                <div className={style.service_list}>

                    <div className={style.service_cards}>

                        <div className={style.service_card}>
                            <h3>Website Development</h3>
                            <p>Membuat website modern menggunakan React.js dan teknologi terbaru.</p>
                        </div>

                        <div className={style.service_card}>
                            <h3>UI/UX Design</h3>
                            <p>Design tampilan website yang clean, modern, dan user-friendly.</p>
                        </div>

                        <div className={style.service_card}>
                            <h3>Landing Page</h3>
                            <p>Landign page cepat dan optimal untuk meningkatkan konversi.</p>
                        </div>

                        <div className={style.service_card}>
                            <h3>Website Maintenance</h3>
                            <p>Perbaikan bug, update fitur, dan optimasi performa website.</p>
                        </div>

                    </div>

                    <Link to="/contact" className={style.order_btn}>
                        Order Now
                    </Link>

                </div>

                <div className={style.footer}>
                    &copy; 2025 MSHDQ. All rights reserved.
                </div>

            </div>
        </div>
    )
}

export default Service;