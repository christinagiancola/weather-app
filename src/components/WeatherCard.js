import styles from './WeatherCard.module.css';
import Card from 'react-bootstrap/Card';

function WeatherCard() {
  return (
    <div>
      <Card>
        <p>Todays Temp: 100</p>
      </Card>
    </div>
  );
}

export default WeatherCard;