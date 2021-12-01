import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styles from './App.module.css';
import Header from './components/Header/Header.js';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherCards from './components/WeatherCards/WeatherCards';
import Footer from './components/Footer/Footer.js';

function App() {
  const [forecast, setForecast] = useState(null);
  const [defaultLocation, setDefaultLocation] = useState("");

  useEffect(() => {
    if (window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setDefaultLocation(`${pos.coords.latitude},${pos.coords.longitude}`)}, (err) => console.log(`Geolocation lookup failed: ${err}`));
     };
  }, [defaultLocation])

  return (
    <div className={styles.body}>
      <Header />
      <Container className={styles.container}>
        <SearchBar defaultLocation={defaultLocation} setForecast={setForecast}/>
        <WeatherCards forecast={forecast}/>
      </Container>
      <Footer className={styles.footer}/>
    </div>
    );
}

export default App;
