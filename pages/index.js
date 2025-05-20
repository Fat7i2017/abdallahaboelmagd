import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="container" style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '4rem 2rem' }}>
      <Head>
        <title>Abdallah Aboelmagd — Creative Technologist</title>
        <meta name="description" content="Portfolio of Abdallah Aboelmagd — Graphic Designer, Creative Technologist, and Digital Problem Solver." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👋 Hey, I'm Abdallah Aboelmagd</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          I’m a multidisciplinary designer who blends creativity with technology. I turn ideas into brands,
          and brands into beautiful digital experiences. Welcome to my new personal space on the internet.
        </p>

        <div style={{ marginTop: '2.5rem' }}>
          <a href="mailto:feftyeltayar@gmail.com" style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
            Let’s Work Together
          </a>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <a href="https://www.hopp.bio/fat7i2017" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.6rem 1.2rem',
            backgroundColor: '#f4f4f4',
            color: '#000',
            border: '1px solid #ccc',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            Follow Me
          </a>
        </div>

        <section style={{ marginTop: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>📌 Pinterest Fame – Design That Inspires</h2>
          <p style={{ fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto 1.5rem' }}>
            "Creativity isn't a job. It's a lifestyle."<br />
            Join <strong>61.4k+</strong> monthly viewers who explore my visual inspirations on Pinterest.
            Expect branding boards, UI/UX inspiration, color palettes, AI art experiments, and more.
          </p>

          <div style={{ margin: '2rem auto', maxWidth: '400px' }}>
            <a data-pin-do="embedUser" href="https://www.pinterest.com/Fat7i2017/">Visit my Pinterest</a>
          </div>

          <p style={{ fontSize: '0.95rem', color: '#777' }}>Live stats updated by Pinterest · Currently at <strong>61.4k+</strong> monthly views 🚀</p>
        </section>
      </main>

      <footer style={{ marginTop: '4rem', fontSize: '0.875rem', color: '#777' }}>
        &copy; {new Date().getFullYear()} Abdallah Aboelmagd. All rights reserved.
      </footer>

      <Script async defer src="https://assets.pinterest.com/js/pinit.js" strategy="afterInteractive" />
    </div>
  )
}
