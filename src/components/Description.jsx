import styles from "./Description.module.css";

// A project description is either a paragraph (string) or bullet points (string[]).
export default function Description({ text, className = "" }) {
    if (Array.isArray(text)) {
        return (
            <ul className={`${styles.bullets} ${className}`}>
                {text.map((point) => (
                    <li key={point}>{point}</li>
                ))}
            </ul>
        );
    }
    return <p className={className}>{text}</p>;
}
