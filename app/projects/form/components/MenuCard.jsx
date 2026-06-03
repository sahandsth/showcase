export default function MenuCard({ title, persianTitle, price, image, protein, carbohydrate, calorie, category }) {
  // Check if this is a meal (has nutritional data)
  const isMeal = protein && carbohydrate && calorie

  if (isMeal) {
    return (
      <div style={{
        border: '1px solid #222',
        borderRadius: '12px',
        padding: '1rem',
        width: '200px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
        background: '#181818',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '1rem',
      }}>
        <div style={{
          width: '140px',
          height: '140px',
          borderRadius: '10px',
          overflow: 'hidden',
          background: '#222',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        
        {/* English Title */}
        <h3 style={{
          margin: '0 0 0.25rem 0', 
          fontSize: '0.9rem', 
          color: '#fff', 
          textAlign: 'center',
          fontWeight: 'normal'
        }}>
          {title}
        </h3>
        
        {/* Persian Title */}
        <h3 style={{
          margin: '0 0 1rem 0', 
          fontSize: '1.1rem', 
          color: '#fff', 
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          {persianTitle}
        </h3>
        
        {/* Nutritional Information */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: '1rem',
          fontSize: '0.75rem',
          color: '#bbb'
        }}>
          <span>Protein: {protein}g</span>
          <span style={{ color: '#666' }}>|</span>
          <span>Carb: {carbohydrate}g</span>
          <span style={{ color: '#666' }}>|</span>
          <span>Cal: {calorie}kcal</span>
        </div>
        
        {/* Price */}
        <p style={{
          margin: 0, 
          color: '#bbb', 
          fontWeight: 600, 
          fontSize: '1rem'
        }}>
          {price} هزار تومان
        </p>
      </div>
    )
  }

  // Default card design for drinks and nutrition (original design)
  return (
    <div style={{
      border: '1px solid #222',
      borderRadius: '12px',
      padding: '1rem',
      width: '200px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
      background: '#181818',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '1rem',
    }}>
      <div style={{
        width: '140px',
        height: '140px',
        borderRadius: '10px',
        overflow: 'hidden',
        background: '#222',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#fff', textAlign: 'center'}}>{persianTitle}</h3>
      <p style={{margin: 0, color: '#bbb', fontWeight: 600, fontSize: '1rem'}}>{price} هزار تومان</p>
    </div>
  )
}
