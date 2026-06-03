'use client'
import Image from 'next/image'
import Link from 'next/link'
import './form.css';

export default function HomePage() {
    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100vw',
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            gap:'0.5rem'
        }}>
            {/* Top Section - Meals */}
            <Link href="/projects/form/meals" style={{marginTop:'7vh', textDecoration: 'none', color: 'inherit' }}>
                <section style={{
                    backgroundColor: 'black',
                    height: '30vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    justifySelf:'center',
                    borderRadius:'30px',
                    width:'80%',
                    margin: 0,
                    padding: 0,
                    cursor: 'pointer',
                    flexDirection:'column',
                    flexWrap:'wrap',
                    alignContent:'center',
                    gap: '0.2rem'
                }}>
                    {/* FORM GYM Logo positioned higher */}
                    <div style={{
                        position: 'absolute',
                        top: '2vh',
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}>
                        <Image
                            src="/logos/logo.png"
                            alt="FORM GYM"
                            width={83}
                            height={12}
                            style={{
                                filter: 'brightness(0) invert(1)'
                            }}
                        />
                    </div>

                    {/* Meals text centered in section */}
                    <h2 style={{
                        fontSize: 'clamp(2rem, 8vw, 4rem)',
                        fontWeight: 'normal',
                        fontFamily: 'Francy, serif',
                        color: 'white',
                        margin: 0,
                        lineHeight: '1'
                    }}>
                        Meals

                        <Image
                            src="/logos/food-logo.png"
                            alt="Drinks Logo"
                            width={40} // adjust size as needed
                            height={40}
                            style={{
                                marginRight: '0.5rem',
                                width: '0.8em', height: '0.8em'}}
                        />
                    </h2>
                    <span className={'persian'}>خوراک</span>
                </section>
            </Link>

            {/* Middle Section - Drinks */}
            <Link href="/projects/form/drinks" style={{ textDecoration: 'none', color: 'inherit' }}>
                <section style={{
                    backgroundColor: 'black',
                    height: '30vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    margin: 0,
                    padding: 0,
                    justifySelf:'center',
                    borderRadius:'30px',
                    width:'80%',
                    cursor: 'pointer',
                    flexDirection:'column',
                    flexWrap:'wrap',
                    alignContent:'center',
                    gap: '0.2rem'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 8vw, 4rem)',
                        fontWeight: 'normal',
                        fontFamily: 'Francy, serif',
                        color: 'white',
                        margin: 0,
                        lineHeight: '1'
                    }}>
                        Drinks

                        <Image
                            src="/logos/drink-logo.png"
                            alt="Drinks Logo"
                            width={40}
                            height={40}
                            style={{
                                marginRight: '0.5rem',
                                width: '0.8em', height: '0.8em'}}
                        />
                    </h2>
                    <span className={'persian'}>نوشیدنی ها</span>
                </section>
            </Link>

            {/* Bottom Section - Nutrition */}
            <Link href="/projects/form/nutrition" style={{ textDecoration: 'none', color: 'inherit' }}>
                <section style={{
                    backgroundColor: 'black',
                    height: '30vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    margin: 0,
                    padding: 0,
                    justifySelf:'center',
                    borderRadius:'30px',
                    width:'80%',
                    cursor: 'pointer',
                    flexDirection:'column',
                    flexWrap:'wrap',
                    alignContent:'center',
                    gap: '0.2rem'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 8vw, 4rem)',
                        fontWeight: 'normal',
                        fontFamily: 'Francy, serif',
                        color: 'white',
                        margin: 0,
                        lineHeight: '1'
                    }}>
                        Others
                        <Image
                            src="/logos/others-logo.png"
                            alt="Drinks Logo"
                            width={40}
                            height={40}
                            style={{
                                marginRight: '0.5rem',
                                width: '0.8em', height: '0.8em'}}
                        />

                    </h2>
                    <span className={'persian'}>موارد دیگر</span>
                </section>
            </Link>
        </main>
    )
}
