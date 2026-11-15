import './App.css'

const menuPosters = [
  {
    image: '/menu/tea.png',
    alt: 'Swirl & Tea menu poster featuring bubble tea and other tea drinks',
    title: 'Tea & Bubble Tea',
  },
  {
    image: '/menu/sundaes.png',
    alt: 'Swirl & Tea menu poster featuring ice cream sundaes',
    title: 'Ice Cream Sundaes',
  },
  {
    image: '/menu/layered-sundaes.png',
    alt: 'Swirl & Tea menu poster featuring layered ice cream sundaes',
    title: 'Layered Sundaes',
  },
  {
    image: '/menu/shakes-and-blends.png',
    alt: 'Swirl & Tea menu poster featuring shakes and blended treats',
    title: 'Shakes & Blends',
  },
]

function App() {
  return (
    <main className="landing">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Swirl and Tea home">
          <span className="wordmark-icon" aria-hidden="true">S</span>
          <span>Swirl &amp; Tea</span>
        </a>
        <span className="header-note">Something lovely is brewing</span>
      </header>

      <section className="announcement" aria-labelledby="page-title">
        <p className="eyebrow">A little pause, steeping soon</p>
        <h1 id="page-title">We’re under construction</h1>
        <p className="message">
          We’re brewing up a fresh home for Swirl &amp; Tea.
          <br />
          Please check back soon for something special.
        </p>
        <div className="treats" aria-label="Swirl & Tea menu posters">
          {menuPosters.map((poster) => (
            <figure className="treat" key={poster.image}>
              <img src={poster.image} alt={poster.alt} loading="lazy" />
              <figcaption>{poster.title}</figcaption>
            </figure>
          ))}
        </div>
        <span className="status">
          <span className="status-dot" />
          Coming soon
        </span>
      </section>

      <footer className="site-footer">
        <span>Take a breath. Enjoy a cup.</span>
      </footer>
    </main>
  )
}

export default App
