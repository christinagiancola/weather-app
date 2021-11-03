import styles from './Card.module.css';
import Card from 'react-bootstrap/Card';

function TodayCard( {forecast} ) {
  let conditionIcon = `https:${forecast.current.condition.icon}`;

  return (
    <Card className={styles.card}>
      <div className={styles.content}>
        <div className={styles.icon}><img src={conditionIcon}></img></div>
        <div className={styles.cardTitle}>Today: {forecast.location.name}</div>
        <div>Currently: {forecast.current.temp_f}&deg;F</div>
        <div>Feels Like: {forecast.current.feelslike_f}&deg;F</div>
        <div>High: {forecast.forecast.forecastday[0].day.maxtemp_f}&deg;F</div>
        <div>Low: {forecast.forecast.forecastday[0].day.mintemp_f}&deg;F</div>
        <div>Humidity: {forecast.forecast.forecastday[0].day.avghumidity}%</div>
        <div>Precipitation: {forecast.current.precip_in} inches</div>
        <div>UV Index: {forecast.current.uv} out of 10</div>
        <div>Sunrise: {forecast.forecast.forecastday[0].astro.sunrise}</div>
        <div>Sunset: {forecast.forecast.forecastday[0].astro.sunset}</div>
      </div>
    </Card>
  );
}


export default TodayCard;