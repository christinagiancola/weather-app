import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styles from './App.module.css';
import Header from './components/Header/Header.js';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherCards from './components/WeatherCards/WeatherCards';
import Footer from './components/Footer/Footer.js';


function App() {
  const [forecast, setForecast] = useState(null);
  const [defaultForecastLocation, setDefaultForecastLocation] = useState("");

  useEffect(() => {
    if (window.navigator.geolocation) {
      console.log(`GeolocationAPI Available`);
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(`GeolocationAPI Request Made`);
        setDefaultForecastLocation(`${pos.coords.latitude},${pos.coords.longitude}`)}, (err) => console.log(`Geolocation lookup failed: ${err}`));
     };
  }, [defaultForecastLocation])

 
  return (
    <div className={styles.body}>
      <Header />
      <Container className={styles.container}>
        <SearchBar defaultForecastLocation={defaultForecastLocation} setForecast={setForecast}/>
        <WeatherCards forecast={forecast}/>
      </Container>
      <Footer className={styles.footer}/>
    </div>
    );
}

export default App;
