import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <span className={styles.label}>About</span>

                    <h2>
                        Building modern web experiences with
                        Laravel and Next.js.
                    </h2>
                </div>

                <div className={styles.right}>
                    <p>
                        I'm Sahand Setoudeh, a Full Stack Web Developer
                        focused on creating scalable, responsive, and
                        user-friendly web applications.
                    </p>

                    <p>
                        My primary stack includes Laravel, Next.js,
                        TypeScript, PHP, MySQL, JavaScript, HTML, and CSS.
                        I enjoy turning ideas into production-ready products,
                        whether it's a business platform, a product showcase,
                        or a custom web application.
                    </p>

                    <p>
                        Recently I've worked on projects such as Form,
                        a digital menu experience for a café and gym,
                        and Luisant, a multilingual product showcase website.
                    </p>

                    <div className={styles.stats}>
                        <div>
                            <h3>2+</h3>
                            <span>Major Projects</span>
                        </div>

                        <div>
                            <h3>5+</h3>
                            <span>Technologies</span>
                        </div>

                        <div>
                            <h3>100%</h3>
                            <span>Responsive Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}