import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import styles from './SearchBar.module.css';

function SearchBar({ defaultLocation, setForecast }) {
  const WEATHER_API_KEY = 'e684477a6ce04c44b0c180151212009';
  const [inputText, setInputText] = useState("");
  const [inputLocation, setInputLocation] = useState("");

  const handleSubmit = (e) => {
    console.log(`SearchBar handleSubmit triggered`);
    // when user submits SearchBar form, inputLocation is updated which should trigger a new forecastAPI call
    e.preventDefault();
    setInputLocation(inputText);
  };

  useEffect(() => {
    console.log(`SearchBar useEffect triggered`);
    console.log(`inputLocation: ${inputLocation}`);
    setInputLocation(defaultLocation);
    if (inputLocation !== "") {
      console.log(`SearchBar useEffect triggered`);
      const getForecast = async () => {
        console.log(`SearchBar getForecast called`);
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