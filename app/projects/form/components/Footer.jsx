export default function Footer() {
    return (
        <>
            <style>{`
        footer {
          background: #111;
          color: #888;
          padding: 1rem 2rem;
          text-align: center;
          font-size: 0.9rem;
          user-select: none;
          box-shadow: inset 0 1px 3px rgba(255,255,255,0.1);
        }
      `}</style>
            <footer>© {new Date().getFullYear()} باشگاه فرم | همه حقوق محفوظ است</footer>
        </>
    )
}
