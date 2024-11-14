import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { CountriesProvider } from "./CountriesContext";
import CountryDetailsPage from "./components/CountryDetailsPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <CountriesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/country/:countryName"
            element={<CountryDetailsPage />}
          />
        </Routes>
      </Router>
    </CountriesProvider>
  );
}

export default App;
