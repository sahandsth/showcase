import styles from "../../styles/hero.module.css";

export default function Hero() {
    return (
        <div className={`${styles.topBanner} ${styles.banner} ${styles.bannerMain}`}>

            <div className={styles.topBannerGroup}>

                <img
                    src="/images/background_main3.png"
                    className={styles.bannerImg}
                    alt="banner"
                />

                <h1 id={styles.luisantText}>LUISANT</h1>

                <h1 id={styles.shine}>THE SHINE YOU DESERVE</h1>

                <p id={styles.topBannerText}>
                    Luisant is more than just a collection of appliances; it's a philosophy of living.
                    We believe your home should be a sanctuary that reflects your style and inspires joy.
                </p>

            </div>

        </div>
    );
}