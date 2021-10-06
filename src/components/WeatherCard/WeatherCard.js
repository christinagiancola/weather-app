import styles from './WeatherCard.module.css';
import Card from 'react-bootstrap/Card';

function WeatherCard({ location, forecast }) {
  console.log(`weatherCard rendered`);
  console.log(`weatherCard received location: ${location}`);
  console.log(`weatherCard received forecast for ${forecast.location.name}`);

  return (
    <Card className={styles.card}>
      <h1 className={styles.title}>Today</h1>
      <h2 className={styles.text}>Location: {location}</h2>
      <hr/>
      <p className={styles.text}>Current Temp:{forecast.current.temp_f}</p>
      <p className={styles.text}>Max Temp: 85&deg;F</p>
    </Card>
  );
};


export default WeatherCard;