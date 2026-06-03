'use client'
import Link from 'next/link'

export default function BottomNavigation({ backgroundColor = '#182A2C' }) {
    return (
        <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{
                position: 'fixed',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 400
            }}>
                {/* House icon with blurry background */}
                <div style={{
                    backgroundColor: backgroundColor,
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                }}>
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 18V6L8 0L16 6V18H10V11H6V18H0Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </Link>
    )
} 