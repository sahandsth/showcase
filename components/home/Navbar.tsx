'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (
        e: React.MouseEvent<HTMLAnchorElement>,
        id: string
    ) => {
        e.preventDefault();

        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        setIsOpen(false);
    };

    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                <a
                    href="#home"
                    className={styles.logo}
                    onClick={(e) => scrollToSection(e, 'home')}
                >
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
                    <a
                        href="#about"
                        onClick={(e) => scrollToSection(e, 'about')}
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        onClick={(e) => scrollToSection(e, 'skills')}
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        onClick={(e) => scrollToSection(e, 'projects')}
                    >
                        Projects
                    </a>

                    <a
                        href="#experience"
                        onClick={(e) => scrollToSection(e, 'experience')}
                    >
                        Experience
                    </a>

                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, 'contact')}
                    >
                        Contact
                    </a>

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