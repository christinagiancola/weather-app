import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import styles from './SearchBar.module.css';

function SearchBar({ defaultLocation, setForecast }) {
  const WEATHER_API_KEY = 'e684477a6ce04c44b0c180151212009';
  const hasSetDefaultLocation = useRef(false);
  const [inputText, setInputText] = useState("");
  const [inputLocation, setInputLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputLocation(inputText);
  };

  useEffect(() => {
    if (!hasSetDefaultLocation.current && defaultLocation) {
      setInputLocation(defaultLocation);
      hasSetDefaultLocation.current = true;
    }
    if (inputLocation !== "") {
      const getForecast = async () => {
        let response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${inputLocation}&days=3&aqi=yes&alerts=yes`);
        setForecast(response.data);
      };
      getForecast();
    }
  }, [setForecast, inputLocation, defaultLocation]); 

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <input 
            type="text" 
            value={inputText} 
            onChange={e => setInputText(e.target.value)}
            className={styles.input}
          />
        </label>
        <Button className={styles.button} type="submit" variant="outline-dark" size="sm">Get Forecast</Button>
      </form>
    </div>
  );
}

export default SearchBar;