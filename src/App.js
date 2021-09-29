import styles from './App.module.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Footer from './components/Footer.js';


function App() {
  return (
    <div>
        <Header />
      <Container className={styles.container}>
          <SearchBar />
          <div id='weather-card-container'>
            <WeatherCard />
          </div>
      </Container>
        <Footer className={styles.footer}/>
    </div>
    );
}

export default App;
