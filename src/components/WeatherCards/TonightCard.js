import styles from './TonightCard.module.css';
import Card from 'react-bootstrap/Card';

function TonightCard({ forecast }) {
  return (
    <Card className={styles.card}>
      <div className={styles.content}>
        <h1 className={styles.cardTitle}>Tonight in {forecast.location.name}</h1>
        <div>Sunset: {forecast.forecast.forecastday[0].astro.sunset}</div>
        <div>Moonrise: {forecast.forecast.forecastday[0].astro.moonrise}</div>
        <div>Moon Illumination: {forecast.forecast.forecastday[0].astro.moon_illumination}</div>
        <div>Moon Phase: {forecast.forecast.forecastday[0].astro.moon_phase}</div>
        <div>Moonset: {forecast.forecast.forecastday[0].astro.moonset}</div>
      </div>
    </Card>
  );
}

export default TonightCard;