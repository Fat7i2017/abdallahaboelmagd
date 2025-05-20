import Head from 'next/head'
import Script from 'next/script'
import { useState } from 'react'

export default function Home() {
  const [reviews, setReviews] = useState([])
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    setReviews([{ ...form, date: new Date().toLocaleDateString() }, ...reviews])
    setForm({ name: '', email: '', message: '' })
    setError('')
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0e0e0e', color: '#f0f0f0', padding: '4rem 1rem' }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.05)',
        boxShadow: '0 0 30px rgba(255, 255, 255, 0.05)',
        borderRadius: '24px',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <Head>
          <title>Abdallah Aboelmagd — Creative Technologist</title>
          <meta name="description" content="Portfolio of Abdallah Aboelmagd — Graphic Designer, Creative Technologist, and Digital Problem Solver." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          {/* Existing content above remains unchanged */}

          <section style={{ marginTop: '5rem' }}>
            <h2 style={{ fontSize: '1.85rem', marginBottom: '1.25rem' }}>💬 Reviews</h2>
            <p style={{ fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
              I’d love to hear what you think of working with me. Leave a quick review below — it may appear here on the homepage!
            </p>
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                required
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #444',
                  background: '#111',
                  color: '#f0f0f0'
                }}
              />
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                required
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #444',
                  background: '#111',
                  color: '#f0f0f0'
                }}
              />
              <textarea
                placeholder="Your review"
                value={form.message}
                required
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #444',
                  background: '#111',
                  color: '#f0f0f0'
                }}
              />
              {error && <p style={{ color: '#ff4f4f', marginBottom: '1rem' }}>{error}</p>}
              <button type="submit" style={{
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #00c896, #00795d)',
                color: '#fff',
                border: 'none',
                borderRadius: '999px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
                Submit Review
              </button>
            </form>

            {reviews.length > 0 && (
              <div style={{ marginTop: '3rem', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Recent Reviews</h3>
                {reviews.map((r, i) => (
                  <div key={i} style={{ marginBottom: '1.5rem', padding: '1rem', background: '#1a1a1a', borderRadius: '12px' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{r.name} <span style={{ fontWeight: 'normal', color: '#aaa', fontSize: '0.9rem' }}>({r.date})</span></p>
                    <p style={{ margin: 0 }}>{r.message}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>

        <footer style={{ marginTop: '5rem', fontSize: '0.875rem', color: '#aaa' }}>
          &copy; {new Date().getFullYear()} Abdallah Aboelmagd. All rights reserved.
        </footer>

        <Script async defer src="https://assets.pinterest.com/js/pinit.js" strategy="afterInteractive" />
      </div>
    </div>
  )
}
