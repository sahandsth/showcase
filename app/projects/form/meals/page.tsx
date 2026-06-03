'use client'

import Image from 'next/image'
import MealsCard from '../components/MealsCard'
import BottomNavigation from '../components/BottomNavigation'

const items = [
    {
        id: 1,
        title: 'Chicken Bowl',
        persianTitle: 'چیکن بول',
        image: '/meals/chicken-bowl.jpg',
        protein: 45,
        calorie: 520,
        carbohydrate: 38,
        price: 2.9
    },
    {
        id: 2,
        title: 'Beef Steak',
        persianTitle: 'استیک گوشت',
        image: '/meals/beef-steak.jpg',
        protein: 52,
        calorie: 610,
        carbohydrate: 22,
        price: 3.8
    },
    {
        id: 3,
        title: 'Salmon Plate',
        persianTitle: 'سالمون پلیت',
        image: '/meals/salmon-plate.jpg',
        protein: 42,
        calorie: 480,
        carbohydrate: 20,
        price: 4.2
    },
    {
        id: 4,
        title: 'Veggie Power',
        persianTitle: 'وجی پاور',
        image: '/meals/veggie-power.jpg',
        protein: 18,
        calorie: 390,
        carbohydrate: 42,
        price: 2.4
    }
]

export default function MealsMenu() {
    return (
        <main
            style={{
                backgroundColor: '#080808',
                minHeight: '100vh',
                width: '100%',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative'
            }}
        >
            {/* Header */}
            <div
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                    width: '100%',
                    padding: '24px 0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Image
                    src="/logos/logo.png"
                    alt="FORM GYM"
                    width={120}
                    height={18}
                    style={{
                        filter: 'brightness(0) invert(1)'
                    }}
                />
            </div>

            {/* Fade Overlay */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '200px',
                    background:
                        'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
                    zIndex: 50,
                    pointerEvents: 'none'
                }}
            />

            {/* Meals */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    width: '100%',
                    maxWidth: '390px',
                    marginBottom: '100px',
                    padding: '10px',
                    alignItems: 'center'
                }}
            >
                {items.map((item) => (
                    <MealsCard
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>

            <BottomNavigation backgroundColor="#142224" />
        </main>
    )
}