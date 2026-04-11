import style from "./Contact.module.css"

function Contact() {
    return (
        <div className={style.container}>
            <div className={style.contact}>
                <h1>Contact Me</h1>
                <p>If you like to collaborate or just say hi, feel free to send a message!</p>

                <form className={style.contact_form} action="https://formspree.io/f/mzzgnbjg" method="POST">
                    <input type="text" name="Name" placeholder="Your Name" required />
                    <input type="email" name="Email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>

            <div className={style.footer}>
                &copy; 2025 MSHDQ. All rights reserved.
            </div>
        </div>
    )
}

export default Contact;