import React, { useState } from "react";
import CountriesAutoComplete from "./CountriesAutoComplete";
import CountryDetails from "./CountryDetails";

function HomePage() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const selectedOneCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="home-page">
      <CountriesAutoComplete selectedCountry={selectedOneCountry} />
      <CountryDetails country={selectedCountry} />
    </div>
  );
}
export default HomePage;
