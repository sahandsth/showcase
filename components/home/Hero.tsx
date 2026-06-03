import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.content}>
                <span className={styles.tag}>
                    Full Stack Developer
                </span>

                <h1 className={styles.title}>
                    Sahand Setoudeh
                </h1>

                <h2 className={styles.subtitle}>
                    Laravel & Next.js Developer
                </h2>

                <p className={styles.description}>
                    I build modern web applications with Laravel,
                    Next.js, TypeScript, and JavaScript. Passionate about
                    creating fast, scalable, and user-focused digital experiences.
                </p>

                <div className={styles.actions}>
                    <a href="#projects" className={styles.primaryBtn}>
                        View Projects
                    </a>

                    <a
                        href="/cv/SahandSetoudeh-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondaryBtn}
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
}