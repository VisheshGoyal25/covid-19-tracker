import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    
    fetchAPI();
  }, []);

  return (
    <div className={styles.formControl}>
      <select defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} >
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country.name}>{country.name}</option>)}
      </select>
      
    </div>
  );
};

export default Countries;
