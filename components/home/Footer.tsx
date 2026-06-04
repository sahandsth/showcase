import styles from './Footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h2 className={styles.title}>
                        Let&#39;s Build Something Great
                    </h2>

                    <p className={styles.description}>
                        Available for full-time positions, contract work, and full-stack web development projects.
                    </p>

                    <div className={styles.links}>
                        <a
                            href="mailto:your@email.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Email
                        </a>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="/cv/SahandSetoudeh-CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {year} Sahand Setoudeh</p>
                    <p>Laravel • Next.js • Video Edit</p>
                </div>
            </div>
        </footer>
    );
}