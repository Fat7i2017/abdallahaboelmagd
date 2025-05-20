import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', overflowY: 'auto', background: '#fefefe' }}>
      <div className="container" style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '6rem 2rem 4rem' }}>
        <Head>
          <title>Abdallah Aboelmagd — Creative Technologist</title>
          <meta name="description" content="Portfolio of Abdallah Aboelmagd — Graphic Designer, Creative Technologist, and Digital Problem Solver." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 style={{ fontSize: '2.75rem', marginBottom: '1.5rem' }}>👋 Hey, I'm Abdallah Aboelmagd</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto 2rem' }}>
            I’m a multidisciplinary designer who blends creativity with technology. I turn ideas into brands,
            and brands into beautiful digital experiences. Welcome to my new personal space on the internet.
          </p>

          <div style={{ marginTop: '3rem' }}>
            <a href="https://wa.me/201025516956" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block',
              padding: '0.9rem 1.7rem',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              color: '#fff',
              borderRadius: '999px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'transform 0.3s ease',
            }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              Let’s Work Together
            </a>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <a href="https://www.hopp.bio/fat7i2017" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block',
              padding: '0.7rem 1.5rem',
              background: 'linear-gradient(135deg, #eee, #ddd)',
              color: '#000',
              borderRadius: '999px',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'transform 0.3s ease',
            }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              Follow Me
            </a>
          </div>

          <section style={{ marginTop: '6rem' }}>
            <h2 style={{ fontSize: '1.85rem', marginBottom: '1.25rem' }}>✨ Featured on Pinterest</h2>
            <p style={{ fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              Some of my original creations are getting love on Pinterest — over <strong>61.4k+ monthly views</strong>!
              Explore the pins I personally crafted here:
            </p>

            <div>
              <a href="https://www.pinterest.com/Fat7i2017/_created/" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block',
                padding: '0.75rem 1.4rem',
                background: 'linear-gradient(135deg, #e60023, #bd081c)',
                color: '#fff',
                borderRadius: '999px',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'transform 0.3s ease',
              }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
                View My Created Pins ↗
              </a>
            </div>
          </section>
        </main>

        <footer style={{ marginTop: '6rem', fontSize: '0.875rem', color: '#777' }}>
          &copy; {new Date().getFullYear()} Abdallah Aboelmagd. All rights reserved.
        </footer>

        <Script async defer src="https://assets.pinterest.com/js/pinit.js" strategy="afterInteractive" />
      </div>
    </div>
  )
}
