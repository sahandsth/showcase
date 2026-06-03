'use client'
import styles from './MenuCardNew.module.css'
import { formatNumber, formatPrice } from '../utils/formatNumbers'

export default function MenuCardNew({ item, backgroundColor, textColor, pageBackgroundColor }) {
    // Check if this is a meal (has nutritional data)
    const isMeal = item.protein || item.proteins || item.carbohydrate || item.carbohydrates || item.calorie || item.calories
    const imageUrl = item.image || item.picture_url

    return (
        <div className={styles.card} style={{ backgroundColor: backgroundColor }}>
            <div className={styles.imageWrapper}>
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={item.title || item.name_en}
                        className={styles.image}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                ) : (
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#2a2a2a' }} />
                )}
            </div>
            <div className={styles.textArea}>
                <div className={styles.titleRow}>
                    <div className={styles.englishTitle} style={{ color: textColor }}>
                        {item.title}
                    </div>
                    <div className={styles.persianTitle} style={{ color: textColor }}>
                        {item.persianTitle || item.title}
                    </div>
                </div>
                
                {/* Combined Nutritional Information and Price */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    width: '100%',
                    marginTop: '8px',
                    direction: 'ltr'
                }}>
                    {isMeal && (
                        <>
                            <span style={{
                                backgroundColor: '#080808',
                                padding: '1px 12px',
                                borderRadius: '4px',
                                alignSelf: 'flex-start',
                                fontSize: 'clamp(12px, 3.5vw, 15px)',
                                fontWeight: '800',
                                color: textColor,
                                opacity: 0.8,
                                direction: 'ltr'
                            }}>Protein: {formatNumber(item.protein || item.proteins)}g</span>
                            <span style={{
                                backgroundColor: '#080808',
                                padding: '1px 12px',
                                borderRadius: '4px',
                                alignSelf: 'flex-start',
                                fontSize: 'clamp(12px, 3.5vw, 15px)',
                                fontWeight: '800',
                                color: textColor,
                                opacity: 0.8,
                                direction: 'ltr'
                            }}>Carbohydrate: {formatNumber(item.carbohydrate || item.carbohydrates)}g</span>
                            <span style={{
                                backgroundColor: '#080808',
                                padding: '1px 12px',
                                borderRadius: '4px',
                                alignSelf: 'flex-start',
                                fontSize: 'clamp(12px, 3.5vw, 15px)',
                                fontWeight: '800',
                                color: textColor,
                                opacity: 0.8,
                                direction: 'ltr'
                            }}>Calorie: {formatNumber(item.calorie || item.calories)}kcal</span>
                        </>
                    )}
                    
                    <div className={styles.price} style={{ 
                        color: textColor,
                        backgroundColor: pageBackgroundColor === '#182A2C' ? '#24464A' : (pageBackgroundColor || '#24464A'),
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: 'clamp(16px, 4.5vw, 20px)',
                        opacity: 0.8,
                        alignSelf: 'flex-start'
                    }}>
                        Price: {formatPrice(item.price)}
                    </div>
                </div>
            </div>
        </div>
    )
} 