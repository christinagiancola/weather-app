import styles from './WeatherCards.module.css';
import TodayCard from './TodayCard.js';
import TonightCard from './TonightCard.js';
import TomorrowCard from './TomorrowCard';
import Card from 'react-bootstrap/Card';

function WeatherCards({ forecast }) {
  if (forecast) {
    return (
      <div className={styles.cardContainer}>
        <TodayCard forecast={forecast} />
        <TonightCard forecast={forecast} />
        <TomorrowCard forecast={forecast} />
      </div>
    );
  } else {
    return (
      // TODO * improve style of placeholder or add loading animation? *
      <Card className={styles.card}>
      </Card>
    );
  }
};


export default WeatherCards;