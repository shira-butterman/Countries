import React from "react";
import { useNavigate } from "react-router-dom";

function CountryDetails({ country }) {
  const navigate = useNavigate();

  if (!country) {
    return null;
  }

  const handleCountryClick = () => {
    navigate(`/country/${country.name}`);
  };

  return (
    <div className="country-details">
      <img
        src={country.flag}
        alt={country.name}
        className="small-country-flag"
      />
      <h3 className="country-name" onClick={handleCountryClick}>
        {country.name}
      </h3>
      <p className="country-capital">
        <strong>Capital:</strong> {country.capital}
      </p>
    </div>
  );
}

export default CountryDetails;
