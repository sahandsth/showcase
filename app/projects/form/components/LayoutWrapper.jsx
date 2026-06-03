'use client'
import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

export default function LayoutWrapper({ children }) {
    const pathname = usePathname()
    const isHomePage = pathname === '/'

    return (
        <>
            {/* Header and Footer removed from all pages */}
            {/* {!isHomePage && <Header />} */}
            <main style={{ flex: 1, padding: isHomePage ? '0' : '0' }}>{children}</main>
            {/* {!isHomePage && <Footer />} */}
        </>
    )
} 