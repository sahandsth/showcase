import styles from "../../styles/hero.module.css";

export default function Hero() {
    return (
        <div className={styles.banner}>
            <div className={styles.topBanner}>

                <img
                    src="/images/background_main3.png"
                    className={styles.bannerImg}
                    alt=""
                />

                <div className={styles.overlay}>

                    <h1 className={styles.title}>LUISANT</h1>

                    <h2 className={styles.subtitle}>
                        THE SHINE YOU DESERVE
                    </h2>

                    <p className={styles.description}>
                        Luisant is more than just a collection of appliances; it's a philosophy of living.
                        We believe your home should be a sanctuary that reflects your style and inspires joy.
                    </p>

                </div>

            </div>
        </div>
    );
}