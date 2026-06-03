'use client';

import { useEffect, useState } from "react";
import styles from "../../styles/hero.module.css";
import BottomNavigation from "@/app/projects/form/components/BottomNavigation";

export default function Hero() {
    const [loading, setLoading] = useState(true);
    const [hideLoading, setHideLoading] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {


        const timer1 = setTimeout(() => {
            setHideLoading(true);
        }, 3000);


        const timer2 = setTimeout(() => {
            setLoading(false);
            setShowContent(true);
        }, 3800);

        const timer3 = setTimeout(() => {
            setShowNav(true);
        }, 4200);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };

    }, []);

    return (
        <>
            {loading && (
                <div className={`${styles.loadingOuter} ${hideLoading ? styles.fadeOut : ""}`}>
                    <div className={styles.loadingOverlay}>
                        <video
                            className={styles.loadingVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/images/transparent_luisant.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}

            <div className={`${styles.topBanner} ${styles.banner} ${styles.bannerMain}`}>
                <div className={styles.topBannerGroup}>

                    <img
                        src="/images/background_main3.png"
                        className={`${styles.bannerImg} ${showContent ? styles.show : ""}`}
                        alt="banner"
                    />

                    <h1
                        id={styles.luisantText}
                        className={showContent ? styles.show : ""}
                    >
                        LUISANT
                    </h1>

                    <h1
                        id={styles.shine}
                        className={showContent ? styles.show2 : ""}
                    >
                        THE SHINE YOU DESERVE
                    </h1>

                    <span id={styles.topBannerTextSpan}>
                        <p
                            id={styles.topBannerText}
                            className={showContent ? styles.show3 : ""}
                        >
                            Luisant is more than just a collection of appliances; it&#39;s a philosophy of living.
                            We believe your home should be a sanctuary that reflects your style and inspires joy.
                        </p>
                    </span>

                </div>
            </div>
            <div
                style={{
                    position: "fixed",
                    bottom: 0,
                    width: "100%",
                    opacity: showNav ? 1 : 0,
                    transform: showNav ? "translateY(0)" : "translateY(30px)",
                    transition: "all 1s ease",
                    zIndex: 9999
                }}
            >
                <BottomNavigation backgroundColor="#142224" />
            </div>
        </>
    );
}