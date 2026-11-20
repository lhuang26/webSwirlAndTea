import { useState } from 'react'
import './App.css'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Cakes', href: '#cakes' },
  { label: 'Specials', href: '#specials' },
  { label: 'Feedback', href: '#feedback' },
  { label: 'Visit Us', href: '#visit' },
]

const categories = [
  {
    title: 'Ice Cream',
    image: '/images/home/ice-cream.jpg',
    alt: 'Scoops of ice cream with a selection of flavors',
    href: '#menu',
    className: 'category-ice-cream',
  },
  {
    title: 'Tea',
    image: '/images/home/tea.jpg',
    alt: 'Colorful bubble tea drinks',
    href: '#menu',
    className: 'category-tea',
  },
  {
    title: 'Cakes',
    image: '/images/home/cakes.jpg',
    alt: 'Celebration cake decorated with frosting and sprinkles',
    href: '#cakes',
    className: 'category-cakes',
  },
  {
    title: 'Novelties',
    image: '/images/home/novelties.jpg',
    alt: 'Assorted novelty ice cream treats',
    href: '#menu',
    className: 'category-novelties',
  },
]

const specials = [
  {
    day: 'Tuesday',
    offer: 'All Tea Half Price',
    image: '/images/home/tuesday-tea.jpg',
    alt: 'Iced bubble tea',
    icon: <CalendarIcon />,
  },
  {
    day: 'Wednesday',
    offer: 'Sundae',
    detail: 'Buy One, Get One Free',
    image: '/images/home/wednesday-sundae.jpg',
    alt: 'Ice cream sundae with whipped cream and a cherry',
    icon: <CalendarIcon />,
  },
  {
    day: 'Daily',
    offer: 'Birthday Treat',
    detail: 'Free Ice Cream or Tea',
    image: '/images/home/daily-birthday.jpg',
    alt: 'Birthday cupcake topped with frosting and sprinkles',
    icon: <GiftIcon />,
  },
]

function CartIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M3 4h2l2.2 11h10.9l2.1-7.5H6" />
      <circle cx="9" cy="19" r="1.4" />
      <circle cx="17" cy="19" r="1.4" />
    </svg>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13H4V6a1 1 0 0 1 1-1Z" />
      <path d="M8 13h2v2H8zm6 0h2v2h-2z" />
    </svg>
  )
}

function GiftIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M3 10h18v11H3zM2 7h20v3H2zM12 7v14" />
      <path d="M12 7H8.5a2.5 2.5 0 1 1 2.3-3.5L12 7Zm0 0h3.5a2.5 2.5 0 1 0-2.3-3.5L12 7Z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="Swirl & Tea home">
          <img src="/images/logo.png" alt="Swirl & Tea — Ice Cream, Tea, Cakes & Novelties" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon open={menuOpen} />
        </button>

        <nav
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item, index) => (
            <a
              className={index === 0 ? 'nav-link is-active' : 'nav-link'}
              href={item.href}
              aria-current={index === 0 ? 'page' : undefined}
              key={item.label}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="order-button header-order" href="#ordering">
          <CartIcon />
          <span>Order Online</span>
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <img
        className="hero-desktop-scene"
        src="/images/home/hero-desktop.jpg"
        alt="Guests enjoying tea and ice cream together inside Swirl & Tea."
      />
      <div className="hero-mobile">
        <div className="hero-copy">
          <h1 id="hero-title">Your Neighborhood Dessert &amp; Tea Shop</h1>
          <span className="hero-flourish" aria-hidden="true">
            <span />
            <b>♥</b>
            <span />
          </span>
          <p className="hero-subtitle">Bubble Tea, Traditional Chinese Tea &amp; Ice Cream</p>
          <p className="hero-description">
            A cozy, welcoming place for friends, families,
            <br className="desktop-break" /> and tea lovers of all ages.
          </p>
        </div>
        <img
          className="hero-mobile-scene"
          src="/images/home/hero-mobile.jpg"
          alt="Friends and families sharing treats around the shop's blue and red seating."
        />
      </div>
    </section>
  )
}

function PromotionBanner() {
  return (
    <section className="promotion" aria-labelledby="promotion-title">
      <img
        className="promotion-image"
        src="/images/home/treats-promo.jpg"
        alt="Soft-serve ice cream, bubble tea, green tea, and traditional hot tea"
        loading="lazy"
      />
      <div className="promotion-copy">
        <h2 id="promotion-title">Ice Cream, Tea, Cakes &amp; Novelties</h2>
        <p className="location-prompt">
          <PinIcon />
          <span>Your Local Treat Shop in Ridgefield, CT</span>
        </p>
        <a className="order-button pickup-button" href="#ordering">
          <CartIcon />
          <span>Order Online for Pickup</span>
          <span aria-hidden="true" className="button-chevron">›</span>
        </a>
      </div>
    </section>
  )
}

function CategorySection() {
  return (
    <section className="category-section content-width" id="menu" aria-label="Product menu">
      <div className="category-grid">
        {categories.map((category) => (
          <a
            className={`category-card ${category.className}`}
            href={category.href}
            key={category.title}
          >
            <img src={category.image} alt={category.alt} loading="lazy" />
            <span className="category-label">
              {category.title}
              <span aria-hidden="true">›</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

function SectionHeading({ children }: { children: string }) {
  return (
    <div className="section-heading">
      <span aria-hidden="true" />
      <h2>{children}</h2>
      <span aria-hidden="true" />
    </div>
  )
}

function SpecialsSection() {
  return (
    <section className="specials-section content-width" id="specials">
      <SectionHeading>Weekly Specials</SectionHeading>
      <div className="specials-grid">
        {specials.map((special) => (
          <article className="special-card" key={special.day}>
            <div className="special-day">
              {special.icon}
              <h3>{special.day}</h3>
            </div>
            <img className="special-image" src={special.image} alt={special.alt} loading="lazy" />
            <div className="special-copy">
              <p>{special.offer}</p>
              {special.detail && <p className="special-detail">{special.detail}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ComingSoonSection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: string
}) {
  return (
    <section className="coming-soon-card" id={id}>
      <h2>{title}</h2>
      <p>{children}</p>
      <span>Coming soon</span>
    </section>
  )
}

function InformationSections() {
  return (
    <div className="more-information content-width">
      <ComingSoonSection id="cakes" title="Cake Gallery">
        Our cake gallery is not available yet. Please check back soon.
      </ComingSoonSection>
      <ComingSoonSection id="feedback" title="Customer Feedback">
        Customer feedback is not available on this site yet.
      </ComingSoonSection>
      <ComingSoonSection id="ordering" title="Online Pickup Ordering">
        Online ordering is not available yet. No orders or payments are processed here.
      </ComingSoonSection>
    </div>
  )
}

function VisitSection() {
  return (
    <section className="visit-section" id="visit">
      <div className="visit-inner content-width">
        <div className="visit-address">
          <p className="footer-eyebrow">Come see us</p>
          <h2>Swirl &amp; Tea</h2>
          <address>
            113 Danbury Road, Unit 01
            <br />
            Ridgefield, CT 06877
          </address>
          <a className="phone-link" href="tel:+12034387424">
            203-438-7424
          </a>
          <a
            className="directions-link"
            href="https://www.google.com/maps/dir/?api=1&destination=113+Danbury+Road%2C+Unit+01%2C+Ridgefield%2C+CT+06877"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PinIcon />
            Get directions
          </a>
        </div>
        <div className="hours-card">
          <h3>Store Hours</h3>
          <dl>
            <div>
              <dt>Sunday–Thursday</dt>
              <dd>11:00 AM–9:30 PM</dd>
            </div>
            <div>
              <dt>Friday–Saturday</dt>
              <dd>11:00 AM–10:00 PM</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Take a breath. Enjoy a cup.</p>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <PromotionBanner />
        <CategorySection />
        <SpecialsSection />
        <InformationSections />
      </main>
      <VisitSection />
    </div>
  )
}

export default App
