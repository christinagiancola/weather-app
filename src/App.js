import { useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './App.module.css';
import Header from './components/Header/Header.js';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Footer from './components/Footer/Footer.js';


function App() {
  const [forecast, setForecast] = useState(null);

  return (
    <div>
      <Header />
      <Container className={styles.container}>
        <SearchBar setForecast={setForecast}/>
        <WeatherCard forecast={forecast}/>
      </Container>
      <Footer className={styles.footer}/>
    </div>
    );
}

export default App;
