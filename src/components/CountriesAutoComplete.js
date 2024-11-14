import React, { useState, useContext, useEffect } from "react";
import { CountriesContext } from "../CountriesContext";

function CountriesAutoComplete({ selectedCountry }) {
  const { countries } = useContext(CountriesContext);

  const [inputValue, setInputValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isListOpen, setIsListOpen] = useState(false);

  useEffect(() => {
    if (countries && countries.length > 0) {
      setFilteredCountries(countries);
    }
  }, [countries]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleCountryClick = (country) => {
    setInputValue(country.name);
    selectedCountry(country);
    setIsListOpen(false);
  };

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        className="autocomplete-input"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Start typing a country..."
        onFocus={() => setIsListOpen(true)}
      />

      {isListOpen && filteredCountries.length > 0 && (
        <ul className="autocomplete-list">
          {filteredCountries.map((country) => (
            <li
              key={country.name}
              className="autocomplete-list-item"
              onClick={() => handleCountryClick(country)}
            >
              {country.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CountriesAutoComplete;
