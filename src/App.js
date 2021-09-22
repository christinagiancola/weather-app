import styles from './App.module.css';
import Header from './components/Header.js';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Footer from './components/Footer.js';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Container className={styles.container}>
        <SearchBar />
        <div id='weather-card-container'>
          <WeatherCard />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
