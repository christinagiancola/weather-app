import styles from './Card.module.css';
import Card from 'react-bootstrap/Card';

function TomorrowCard({ forecast }) {
  let conditionIcon = `https:${forecast.forecast.forecastday[1].day.condition.icon}`;
  let conditionText = `https:${forecast.forecast.forecastday[1].day.condition.text}`;


  return (
    <Card className={styles.card} bsPrefix="customCard">
      <div className={styles.content}>
        <div className={styles.icon}><img src={conditionIcon} alt={conditionText}></img></div>
        <div className={styles.cardTitle}>{forecast.location.name}</div>
        <div className={styles.cardTitle}>Tomorrow:</div>
        <div>Average Temp: {forecast.forecast.forecastday[1].day.avgtemp_f}&deg;F</div>
        <div>High: {forecast.forecast.forecastday[1].day.maxtemp_f}&deg;F</div>
        <div>Low: {forecast.forecast.forecastday[1].day.mintemp_f}&deg;F</div>
        <div>Humidity: {forecast.forecast.forecastday[1].day.avghumidity}%</div>
        <div>Precipitation: {forecast.forecast.forecastday[1].day.totalprecip_in} inches</div>
        {/* <div>UV Index:  {forecast.forecast.forecastday[1].day.uv} out of 10</div> */}
        <div>Sunrise: {forecast.forecast.forecastday[1].astro.sunrise}</div>
        <div>Sunset: {forecast.forecast.forecastday[1].astro.sunset}</div>
      </div>
    </Card>
  );
}

export default TomorrowCard;

