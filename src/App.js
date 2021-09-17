import styles from './App.module.css';
import Header from './components/Header.js';
import WeatherCard from './components/WeatherCard';
import Footer from './components/Footer.js';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <Header />
        <div id='weather-card-container'>
          <WeatherCard />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
