import styles from './Card.module.css';
import Card from 'react-bootstrap/Card';

function TonightCard({ forecast }) {
  let conditionIcon = `https:${forecast.forecast.forecastday[0].hour[23].condition.icon}`;
  let conditionText = `https:${forecast.forecast.forecastday[0].hour[23].condition.text}`;

  
  return (
    <Card className={styles.card} bsPrefix="customCard">
      <div className={styles.content}>
        <div className={styles.icon}><img src={conditionIcon} alt={conditionText}></img></div>
        <div className={styles.cardTitle}>{forecast.location.name}</div>
        <div className={styles.cardTitle}>Tonight:</div>
        <div>Moonrise: {forecast.forecast.forecastday[0].astro.moonrise}</div>
        <div>Moon Illumination: {forecast.forecast.forecastday[0].astro.moon_illumination}</div>
        <div>Moon Phase: {forecast.forecast.forecastday[0].astro.moon_phase}</div>
        <div>Moonset: {forecast.forecast.forecastday[0].astro.moonset}</div>
        {/* <div>Sunrise: {forecast.forecast.forecastday[1].astro.sunrise}</div> */}
      </div>
    </Card>
  );
}

export default TonightCard;