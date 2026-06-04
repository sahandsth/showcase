import styles from './HealthyNutrition.module.css';

const screens = [
    {
        name: 'Home',
        ui: '/images/healthy/Home(UI).png',
        result: '/images/healthy/Home(HTML).png'
    },
    {
        name: 'Search',
        ui: '/images/healthy/Search_Result(UI).jpg',
        result: '/images/healthy/Search_Result(HTML).png'
    },
];

export default function HealthyNutritionPage() {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <span className={styles.badge}>Frontend Development</span>

                <h1>Healthy Nutrition</h1>

                <p>
                    Pixel-perfect frontend implementation based on a provided
                    UI/UX design. The goal was to accurately translate the
                    design into responsive HTML and CSS while maintaining visual
                    consistency across devices.
                </p>

                <div className={styles.stats}>
                    <div>
                        <strong>Role</strong>
                        <span>Frontend Developer</span>
                    </div>

                    <div>
                        <strong>Tech</strong>
                        <span>HTML • CSS • JavaScript</span>
                    </div>

                    <div>
                        <strong>Focus</strong>
                        <span>UI Implementation</span>
                    </div>
                </div>
            </section>

            <section className={styles.comparisons}>
                <h2>Design vs Implementation</h2>

                {screens.map((screen) => (
                    <div key={screen.name} className={styles.screenCard}>
                        <h3>{screen.name} Screen</h3>

                        <div className={styles.images}>
                            <div className={styles.imageBlock}>
                                <span>UI Design</span>

                                <img
                                    src={screen.ui}
                                    alt={`${screen.name} UI`}
                                />
                            </div>

                            <div className={styles.imageBlock}>
                                <span>HTML Implementation</span>

                                <img
                                    src={screen.result}
                                    alt={`${screen.name} Implementation`}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}