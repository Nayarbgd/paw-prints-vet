import { Link } from 'react-router-dom'

export default function PageHero({ badge, title, subtitle, breadcrumbs = [], ctas = [], image, imageAlt = '' }) {
  return (
    <section className="page-hero">
      <div className={`container${image ? ' page-hero-split' : ''}`}>
        <div className="page-hero-text">
          {breadcrumbs.length > 0 && (
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} style={{ display: 'contents' }}>
                  <span className="crumb-sep">›</span>
                  {i === breadcrumbs.length - 1 ? (
                    <span className="crumb-current">{crumb.label}</span>
                  ) : (
                    <Link to={crumb.to}>{crumb.label}</Link>
                  )}
                </span>
              ))}
            </nav>
          )}
          {badge && <div className="page-hero-badge">🐾 {badge}</div>}
          <h1>{title}</h1>
          {subtitle && <p className="subtitle">{subtitle}</p>}
          {ctas.length > 0 && (
            <div className="page-hero-ctas">
              {ctas.map((cta, i) =>
                cta.href ? (
                  <a key={i} href={cta.href} className={`btn ${cta.variant || 'btn-primary'}`}>{cta.label}</a>
                ) : (
                  <Link key={i} to={cta.to} className={`btn ${cta.variant || 'btn-primary'}`}>{cta.label}</Link>
                )
              )}
            </div>
          )}
        </div>

        {image && (
          <div className="page-hero-image-wrap" aria-hidden="true">
            <img src={image} alt={imageAlt} className="page-hero-img" loading="lazy" />
            <div className="page-hero-img-fade" />
          </div>
        )}
      </div>
    </section>
  )
}
