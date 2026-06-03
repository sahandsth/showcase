'use client'
import Image from 'next/image'
import styles from './MealsCard.module.css'
import { formatPrice } from '../utils/formatNumbers'

export default function NutritionCard({ item }) {
    const imageUrl = item.image || item.picture_url

    return (
        <div className={styles.card}>
            {/* Centered Background Image */}
            <div className={styles.imageContainer}>
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={item.title || item.name_en}
                        className={styles.image}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '20px'
                        }}
                    />
                ) : (
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#2a2a2a', borderRadius: '20px' }} />
                )}
            </div>
            
            {/* Glass Boxes Container - Bottom */}
            <div className={styles.glassContainer}>
                
                {/* Titles Row */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '30% 70%',
                    gap: '8px'
                }}>
                    {/* Empty Grid Cell */}
                    <div style={{
                        visibility: 'hidden'
                    }}>
                    </div>
                    
                    {/* Titles Container */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        alignItems: 'flex-end'
                    }}>
                        {/* English Title Box */}
                        <div className={styles.titleBox}>
                            <div className={styles.titleText}>
                                {item.title}
                            </div>
                        </div>
                        
                        {/* Persian Title Box */}
                        <div className={styles.persianTitleBox}>
                            <div className={styles.persianTitleText}>
                                {item.persianTitle}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Price Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '30% 70%',
                    gap: '8px',
                    rowGap: '4px'
                }}>
                    
                    {/* Empty Grid Cell */}
                    <div style={{
                        visibility: 'hidden'
                    }}>
                    </div>
                    
                    {/* Price Box */}
                    <div className={styles.nutrientBox}>
                        <div className={styles.nutrientContent}>
                            <span className={styles.nutrientLabel}>
                                Price:
                            </span>
                            <span className={`${styles.nutrientValue} ${styles.priceValue}`}>
                                {formatPrice(item.price)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


