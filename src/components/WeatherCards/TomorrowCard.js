import styles from './TomorrowCard.module.css';
import Card from 'react-bootstrap/Card';

function TomorrowCard({ forecast }) {
  return (
    <Card className={styles.card}>
      <div className={styles.content}>
        <h1 className={styles.cardTitle}>Tomorrow in {forecast.location.name}</h1>
      </div>
    </Card>
  );
}

export default TomorrowCard;