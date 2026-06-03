'use client'

import { useState } from 'react'

const tabStyle = (active) => ({
  padding: '10px 28px',
  borderRadius: '18px',
  border: active ? '2px solid #fff' : '2px solid #444',
  background: active ? 'linear-gradient(90deg,#fff 0%,#eee 100%)' : 'rgba(255,255,255,0.07)',
  color: active ? '#111' : '#fff',
  fontWeight: active ? 700 : 500,
  fontSize: '1.1rem',
  boxShadow: active ? '0 2px 12px 0 rgba(0,0,0,0.10)' : 'none',
  cursor: 'pointer',
  transition: 'all 0.22s',
  outline: 'none',
  margin: '0 2px',
});

export default function CategoryTabs({ categories = ['نوشیدنی‌ها', 'اسنک‌ها'], children }) {
  const [active, setActive] = useState(0)
  return (
    <>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
        {categories.map((cat, idx) => (
          <button
            key={cat}
            style={tabStyle(active === idx)}
            onClick={() => setActive(idx)}
          >
            {cat}
          </button>
        ))}
      </div>
      {Array.isArray(children) ? children[active] : children}
    </>
  )
}
