import React from 'react'

const AnimatedBackground: React.FC = () => {
  const countries = [
    { code: 'us', name: 'United States' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'ca', name: 'Canada' },
    { code: 'au', name: 'Australia' },
    { code: 'de', name: 'Germany' },
    { code: 'fr', name: 'France' },
    { code: 'it', name: 'Italy' },
    { code: 'es', name: 'Spain' },
    { code: 'jp', name: 'Japan' },
    { code: 'in', name: 'India' },
    { code: 'br', name: 'Brazil' },
    { code: 'az', name: 'Azerbaijan' },
    { code: 'nl', name: 'Netherlands' },
    { code: 'se', name: 'Sweden' },
    { code: 'ch', name: 'Switzerland' },
    { code: 'ae', name: 'United Arab Emirates' },
    { code: 'sg', name: 'Singapore' },
    { code: 'nz', name: 'New Zealand' },
    { code: 'kr', name: 'South Korea' },
    { code: 'mx', name: 'Mexico' },
    { code: 'za', name: 'South Africa' },
    { code: 'th', name: 'Thailand' },
    { code: 'pl', name: 'Poland' },
    { code: 'tr', name: 'Turkey' },
    { code: 'cn', name: 'China' },
    { code: 'ru', name: 'Russia' },
    { code: 'no', name: 'Norway' },
    { code: 'dk', name: 'Denmark' },
    { code: 'be', name: 'Belgium' },
    { code: 'at', name: 'Austria' },
    { code: 'pt', name: 'Portugal' },
    { code: 'gr', name: 'Greece' },
    { code: 'cz', name: 'Czech Republic' },
    { code: 'il', name: 'Israel' },
    { code: 'sa', name: 'Saudi Arabia' },
    { code: 'ph', name: 'Philippines' },
    { code: 'my', name: 'Malaysia' },
    { code: 'id', name: 'Indonesia' },
    { code: 'vn', name: 'Vietnam' },
    { code: 'pk', name: 'Pakistan' },
    { code: 'bd', name: 'Bangladesh' },
    { code: 'ng', name: 'Nigeria' },
    { code: 'eg', name: 'Egypt' },
    { code: 'ke', name: 'Kenya' },
    { code: 'ar', name: 'Argentina' },
    { code: 'cl', name: 'Chile' },
    { code: 'co', name: 'Colombia' },
    { code: 'ie', name: 'Ireland' },
    { code: 'fi', name: 'Finland' },
    { code: 'hk', name: 'Hong Kong' },
  ]
  
  // Create 4 rows of countries - now with more countries
  const rows = Array.from({ length: 4 }, (_, rowIndex) => {
    return Array.from({ length: 20 }, (_, colIndex) => ({
      id: `${rowIndex}-${colIndex}`,
      code: countries[colIndex % countries.length].code,
      name: countries[colIndex % countries.length].name,
      row: rowIndex,
      duration: 35 + (rowIndex % 2) * 5,
    }))
  })

  const getFlagUrl = (countryCode: string) => {
    return `https://cdn.jsdelivr.net/npm/flag-icons@6.11.0/flags/4x3/${countryCode}.svg`
  }

  return (
    <div className="animated-background">
      <div className="background-gradient"></div>
      <div className="countries-container">
        {rows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="countries-row" style={{ '--row-duration': `${row[0].duration}s` } as React.CSSProperties & { '--row-duration': string }}>
            {row.map((country) => (
              <div key={country.id} className="country-item">
                <img src={getFlagUrl(country.code)} alt={country.name} loading="lazy" />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {row.map((country) => (
              <div key={`${country.id}-dup`} className="country-item">
                <img src={getFlagUrl(country.code)} alt={country.name} loading="lazy" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default AnimatedBackground
