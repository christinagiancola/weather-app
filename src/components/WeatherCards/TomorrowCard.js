import styles from './TomorrowCard.module.css';
import Card from 'react-bootstrap/Card';

function TomorrowCard({ forecast }) {
  let conditionIcon = `https:${forecast.forecast.forecastday[1].day.condition.icon}`;

  return (
    <Card className={styles.card}>
      <div className={styles.content}>
        <div><img src={conditionIcon}></img></div>
        <h1 className={styles.cardTitle}>Tomorrow in {forecast.location.name}</h1>
        <div>Average Temp: {forecast.forecast.forecastday[1].day.avgtemp_f}&deg;F</div>
        <div>High: {forecast.forecast.forecastday[1].day.maxtemp_f}&deg;F</div>
        <div>Low: {forecast.forecast.forecastday[1].day.mintemp_f}&deg;F</div>
        <div>Humidity: {forecast.forecast.forecastday[1].day.avghumidity}%</div>
        <div>Precipitation: {forecast.forecast.forecastday[1].day.totalprecip_in} inches</div>
        <div>UV Index:  {forecast.forecast.forecastday[1].day.uv} out of 10</div>
        <div>Sunrise: {forecast.forecast.forecastday[1].astro.sunrise}</div>
        <div>Sunset: </div>
      </div>
    </Card>
  );
}

export default TomorrowCard;

