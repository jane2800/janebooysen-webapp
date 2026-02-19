import contactStyles from "./Contact.module.css";
import Title from "../components/Title.jsx";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function ContactPage(){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "service_snlas5a",
            "template_s1ks6zo",
            form.current,
            "x-6f223qubZyFfJcd"
        )
        .then(
            () => {
            alert("Message sent!");
            form.current.reset();
            },
            (error) => {
            console.error(error);
            alert("Something went wrong.");
            }
        );
    };

    return(
        <div className={contactStyles.contactPage}>
            <Title text="Contact Me" />
            <div className={contactStyles.contactInfo}>
                <div className={contactStyles.navButtonContainer}>
                    <a
                    href="https://www.linkedin.com/in/jan%C3%A9-booysen-8a0345215/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={contactStyles.navButton}
                    >
                        <BsLinkedin size={20} style={{ marginLeft: "5px" }} /> LinkedIn
                    </a>
                    <a
                    href="https://github.com/jane2800"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={contactStyles.navButton}
                    >
                        <BsGithub size={20} style={{ marginLeft: "5px" }} /> GitHub
                    </a>
                </div>
                <form ref={form} onSubmit={sendEmail} className={contactStyles.form}>
                    <input name="user_email" type="email" className={contactStyles.input} placeholder="Your Email" required />
                    <input name="subject" className={contactStyles.input} placeholder="Subject" required />
                    <textarea name="message" className={contactStyles.textArea} placeholder="Your Message" required />
                    <button type="submit" className={contactStyles.sendButton}>Send</button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;

