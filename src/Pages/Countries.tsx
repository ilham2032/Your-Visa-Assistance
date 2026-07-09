import React from 'react'
import { Link } from 'react-router'
import PageHero from '../Components/PageHero'
import countries, { getFlagUrl } from '../data/countries'

const Countries: React.FC = () => {
  return (
    <main>
      <PageHero
        title="Countries We Serve"
        subtitle="Visa assistance for every destination on the map — no country is beyond our reach."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Countries' }]}
      />

      <section className="page-content">
        <div className="container">
          <div className="countries-banner">
            <h2>We Help With Every Country</h2>
            <p>
              Your Visa Assistance provides expert visa support for all <strong>195 countries</strong> worldwide.
              The countries shown below are a selection of popular destinations — but regardless of where you're traveling,
              our team has the knowledge and experience to guide your application from start to finish.
            </p>
          </div>

          <div className="countries-grid">
            {countries.map((country) => (
              <div key={country.code} className="country-card">
                <img src={getFlagUrl(country.code)} alt={`${country.name} flag`} loading="lazy" />
                <span>{country.name}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <p style={{ fontSize: 16, color: 'var(--gray-600)', marginBottom: 24, lineHeight: 1.7 }}>
              Don't see your destination? We cover every country in the world.
            </p>
            <Link to="/contact" className="btn btn-primary">Contact Us About Your Destination</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Countries
