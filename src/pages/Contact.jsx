import styles from "./Contact.module.css";
import { useRef, useState } from "react";
import cvData from "../data/cv";

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
            const response = await fetch("/api/send-email", {
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

    const { links } = cvData;

    return (
        <section id="contact" className="section" aria-labelledby="contact-title">
            <div className={`container ${styles.grid}`}>
                <div className={styles.intro}>
                    <h2 id="contact-title" className={styles.title}>Say hi!</h2>
                    <p className={styles.text}>
                        Open to internships, collaborations, or a chat about code over coffee.
                    </p>
                    <ul className={styles.links}>
                        <li>
                            <a className={styles.pill} href={links.linkedin} target="_blank" rel="noopener noreferrer">
                                LinkedIn <span aria-hidden="true">↗</span>
                                <span className="visually-hidden"> (opens in a new tab)</span>
                            </a>
                        </li>
                        <li>
                            <a className={styles.pill} href={links.github} target="_blank" rel="noopener noreferrer">
                                GitHub <span aria-hidden="true">↗</span>
                                <span className="visually-hidden"> (opens in a new tab)</span>
                            </a>
                        </li>
                        <li>
                            <a className={styles.pill} href={links.cv} download>
                                CV <span aria-hidden="true">↓</span>
                                <span className="visually-hidden"> (PDF download)</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <form ref={form} onSubmit={sendEmail} className={`card ${styles.form}`} noValidate>
                    <Field id="user_email" label="Your email" error={errors.user_email}>
                        <input
                            id="user_email"
                            name="user_email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            className={styles.input}
                            aria-invalid={!!errors.user_email}
                            aria-describedby={errors.user_email ? "user_email-error" : undefined}
                        />
                    </Field>
                    <Field id="subject" label="Subject" error={errors.subject}>
                        <input
                            id="subject"
                            name="subject"
                            placeholder="Coffee chat?"
                            className={styles.input}
                            aria-invalid={!!errors.subject}
                            aria-describedby={errors.subject ? "subject-error" : undefined}
                        />
                    </Field>
                    <Field id="message" label="Message" error={errors.message}>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Hi Jané, ..."
                            className={`${styles.input} ${styles.textArea}`}
                            aria-invalid={!!errors.message}
                            aria-describedby={errors.message ? "message-error" : undefined}
                        />
                    </Field>
                    <button type="submit" className={`btn btn--filled ${styles.send}`} disabled={isSending}>
                        {isSending ? "Sending…" : <>Send it <span aria-hidden="true">✦</span></>}
                    </button>
                </form>
            </div>
        </section>
    );
}

function Field({ id, label, error, children }) {
    return (
        <div className={styles.field}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            {children}
            {error && (
                <span id={`${id}-error`} className={styles.error} role="alert">
                    {error}
                </span>
            )}
        </div>
    );
}

export default ContactPage;
