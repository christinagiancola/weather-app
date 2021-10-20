import styles from './TonightCard.module.css';
import Card from 'react-bootstrap/Card';

function TonightCard({ forecast }) {
  return (
    <Card className={styles.card}>
      <div className={styles.content}>
        <h1 className={styles.cardTitle}>Tonight in {forecast.location.name}</h1>
      </div>
    </Card>
  );
}

export default TonightCard;