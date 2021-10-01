import styles from './WeatherCard.module.css';
import Card from 'react-bootstrap/Card';

function WeatherCard({ location }) {
  return (
      <Card className={styles.card}>
        <h1 className={styles.title}>Today</h1>
        <h2 className={styles.text}>{location}</h2>
        <hr/>
        <p className={styles.text}>Current Temp: 70&deg;F</p>
        <p className={styles.text}>Max Temp: 85&deg;F</p>
      </Card>
  );
}

export default WeatherCard;