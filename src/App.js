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
    //check if geolocationAPI is availabe in user's browser
    console.log(`App useEffect triggered`);
    if (window.navigator.geolocation) {
      console.log(`geolocationAPI request made for defaultLocation`);
      navigator.geolocation.getCurrentPosition((pos) => {
        setDefaultLocation(`${pos.coords.latitude},${pos.coords.longitude}`)}, (err) => console.log(`Geolocation lookup failed: ${err}`));
        console.log(`defaultLocation set: ${defaultLocation}`);
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
