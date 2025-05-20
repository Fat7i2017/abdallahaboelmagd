import Head from 'next/head'

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
      </main>

      <footer style={{ marginTop: '4rem', fontSize: '0.875rem', color: '#777' }}>
        &copy; {new Date().getFullYear()} Abdallah Aboelmagd. All rights reserved.
      </footer>
    </div>
  )
}
