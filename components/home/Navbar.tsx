'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                <a href="#home" className={styles.logo}>
                    Sahand
                </a>

                <button
                    className={styles.menuButton}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    ☰
                </button>

                <nav className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>

                    <a
                        href="/cv/SahandSetoudeh-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.resumeBtn}
                    >
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
}