'use client'
import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">form</Link>
            </div>
            <nav className={open ? styles.navOpen : styles.nav}>
                <ul className={styles.navList} onClick={() => setOpen(false)}>
                    <li><Link href="/">خانه</Link></li>
                    <li><Link href="/menu">منو</Link></li>
                </ul>
            </nav>
            <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="باز کردن منو">
                <span className={open ? styles.burgerLineOpen : styles.burgerLine}></span>
                <span className={open ? styles.burgerLineOpen : styles.burgerLine}></span>
                <span className={open ? styles.burgerLineOpen : styles.burgerLine}></span>
            </button>
        </header>
    )
}
