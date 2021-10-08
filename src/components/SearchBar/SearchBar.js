import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import styles from './SearchBar.module.css';

function SearchBar({ setForecast }) {
  const API_KEY = 'e684477a6ce04c44b0c180151212009';
  const [inputText, setInputText] = useState(null);
  const [location, setLocation] = useState("Richmond");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`handleSubmit(): location set from inputText`);
    setLocation(inputText);
  };

  useEffect(() => {
    const getForecast = async () => {
      console.log(`getForecast() triggered`);
      let response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3&aqi=yes&alerts=yes`);
      console.log(`new forecast set after axios call`);
      setForecast(response.data);
    };
    getForecast();
  }, [location]); 

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          City:
          <input 
            type="text" 
            value={inputText} 
            onChange={e => setInputText(e.target.value)}
            className={styles.input}
          />
        </label>
        <Button type="submit" variant="outline-dark" size="sm">Get Forecast</Button>
      </form>
    </div>
  );
}

export default SearchBar;