import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CountriesContext } from '../CountriesContext';

function CountryDetailsPage() {
  const { countryName } = useParams(); 
  const navigate = useNavigate();
  const { countries } = React.useContext(CountriesContext);

  const [country, setCountry] = useState(null);

  useEffect(() => {
    const selectedCountry = countries.find(c => c.name === countryName);
    setCountry(selectedCountry);
  }, [countryName, countries]);

  if (!country) return <div>Loading...</div>;

  return (
    <div className="country-details-page">
      <div className="country-details-info">
        <h1>{country.name}</h1>
        <img src={country.flag} alt={country.name} className="country-flag" />
        <p><strong>Capital:</strong> {country.capital}</p>
        <p><strong>Currency:</strong> {country.currencies ? country.currencies[0].name : 'N/A'}</p>
      </div>

      <button onClick={() => navigate(-1)} className="back-button">Back</button>
    </div>
  );
}

export default CountryDetailsPage;
