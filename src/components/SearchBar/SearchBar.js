import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import styles from './SearchBar.module.css';

function SearchBar({ defaultForecastLocation, setForecast }) {
  const WEATHER_API_KEY = 'e684477a6ce04c44b0c180151212009';
  const [inputText, setInputText] = useState("");
  const [location, setLocation] = useState(defaultForecastLocation);

  // when user submits form(enters a location), location is updated
  // this will trigger useEffect to run again
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(inputText);
  };

  useEffect(() => {
    setLocation(defaultForecastLocation)    
  }, [defaultForecastLocation])
  // runs once when page is first rendered, then again every time user submits form
  // updates forecast state in App, causing all components to rerender with new location forecast
  useEffect(() => {
    const getForecast = async () => {
      let response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=3&aqi=yes&alerts=yes`);
      setForecast(response.data);
    };
    getForecast();
  }, [location]); 

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