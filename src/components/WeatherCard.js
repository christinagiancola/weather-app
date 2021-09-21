import { useState, useEffect } from 'react';
import styles from './WeatherCard.module.css';
import Card from 'react-bootstrap/Card';

function WeatherCard() {
  const [location, setLocation] = useState("Richmond");
  const [weather, setWeather] = useState(["WEATHER"]);

  

  return (
    <div className={styles.card}>
      <Card>
        <h1 className={styles.title}>Today</h1>
        <hr/>
        <p className={styles.text}>Current Temp: 70&deg;F</p>
        <p className={styles.text}>Max Temp: 85&deg;F</p>
        <p className={styles.text}>Testing: {weather}</p>
      </Card>
    </div>
  );
}

export default WeatherCard;