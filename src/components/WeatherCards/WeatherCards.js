import styles from './WeatherCards.module.css';
import TodayCard from './TodayCard.js';
import TonightCard from './TonightCard.js';
import TomorrowCard from './TomorrowCard';
import Spinner from 'react-bootstrap/Spinner';

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
      <div className={styles.loadingContainer}>
        <Spinner animation="grow" variant="light" role="status" className={styles.loadingSpinner}/>
        <Spinner animation="grow" variant="light" role="status" className={styles.loadingSpinner}/>
        <Spinner animation="grow" variant="light" role="status" className={styles.loadingSpinner}/>
      </div>
    );
  }
};


export default WeatherCards;