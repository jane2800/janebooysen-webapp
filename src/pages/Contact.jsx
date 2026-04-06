import contactStyles from "./Contact.module.css";
import Title from "../components/Title.jsx";
import { useRef, useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function ContactPage(){

    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [lastSent, setLastSent] = useState(null);
    const [errors, setErrors] = useState({});

    const validate = ({ user_email, subject, message }) => {
        const newErrors = {};
        if (!user_email.trim()) newErrors.user_email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(user_email)) newErrors.user_email = "Enter a valid email address.";
        if (!subject.trim()) newErrors.subject = "Subject is required.";
        if (!message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        const { user_email, subject, message } = form.current;
        const fieldErrors = validate({
            user_email: user_email.value,
            subject: subject.value,
            message: message.value,
        });

        if (Object.keys(fieldErrors).length > 0) {
            setErrors(fieldErrors);
            return;
        }

        if (lastSent && Date.now() - lastSent < 60000) {
            alert("Please wait a minute before sending another message.");
            return;
        }

        setErrors({});
        setIsSending(true);

        try {
            const response = await fetch("/.netlify/functions/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user_email: user_email.value,
                    subject: subject.value,
                    message: message.value,
                }),
            });

            if (response.ok) {
                alert("Message sent!");
                form.current.reset();
                setLastSent(Date.now());
            } else {
                const data = await response.json();
                alert(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSending(false);
        }
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
                <form ref={form} onSubmit={sendEmail} className={contactStyles.form} noValidate>
                    <input name="user_email" type="email" className={contactStyles.input} placeholder="Your Email" />
                    {errors.user_email && <span className={contactStyles.error}>{errors.user_email}</span>}
                    <input name="subject" className={contactStyles.input} placeholder="Subject" />
                    {errors.subject && <span className={contactStyles.error}>{errors.subject}</span>}
                    <textarea name="message" className={contactStyles.textArea} placeholder="Your Message" />
                    {errors.message && <span className={contactStyles.error}>{errors.message}</span>}
                    <button type="submit" className={contactStyles.sendButton} disabled={isSending}>
                        {isSending ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;
