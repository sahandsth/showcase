import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span>Contact</span>
                    <h2>Get In Touch</h2>
                    <p>
                        Whether you have a project, a job opportunity, or just
                        want to connect, feel free to reach out.
                    </p>
                </div>

                <div className={styles.grid}>
                    <a
                        href="mailto:your@email.com"
                        className={styles.card}
                    >
                        <h3>Email</h3>
                        <p>your@email.com</p>
                    </a>

                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                    >
                        <h3>GitHub</h3>
                        <p>github.com/yourusername</p>
                    </a>

                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                    >
                        <h3>LinkedIn</h3>
                        <p>linkedin.com/in/yourusername</p>
                    </a>

                    <a
                        href="/cv/SahandSetoudeh-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                    >
                        <h3>Resume</h3>
                        <p>Download CV</p>
                    </a>
                </div>
            </div>
        </section>
    );
}