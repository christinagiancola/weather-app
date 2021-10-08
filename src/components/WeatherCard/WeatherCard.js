import styles from './WeatherCard.module.css';
import Card from 'react-bootstrap/Card';

function WeatherCard({ forecast }) {
  console.log(`weatherCard rendered`);
  // console.log(`weatherCard received location: ${location}`);
  // console.log(`weatherCard received forecast for ${forecast.location.name}`);

  return (
    <Card className={styles.card}>
      <h1 className={styles.title}>Today</h1>
      {forecast && <h2 className={styles.text}>Location: {forecast.location.name}</h2>}
      <hr/>
      {forecast && <p className={styles.text}>Current Temp:{forecast.current.temp_f}&deg;F</p>}
    </Card>
  );
};


export default WeatherCard;