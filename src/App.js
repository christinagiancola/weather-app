import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './App.module.css';
import Header from './components/Header/Header.js';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Footer from './components/Footer/Footer.js';


function App() {
  const API_KEY = 'e684477a6ce04c44b0c180151212009';
  const [location, setLocation] = useState("Richmond");
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const getForecast = async () => {
      console.log(`getForecast() triggered`);
      let response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3&aqi=yes&alerts=yes`);
      console.log(`new forecast set after axios call`);
      setForecast(response.data);
    };
    getForecast();
  }, [location]);  

  return (
    <div>
      <Header />
      <Container className={styles.container}>
        <SearchBar location={location} setLocation={setLocation}/>
        {forecast && <WeatherCard location={location} forecast={forecast}/>}
      </Container>
      <Footer className={styles.footer}/>
    </div>
    );
}

export default App;
