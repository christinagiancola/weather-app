import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './App.module.css';
import Header from './components/Header/Header.js';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Footer from './components/Footer/Footer.js';


function App() {
  const [location, setLocation] = useState("Richmond");
  const [forecast, setForecast] = useState("[]");

  useEffect(() => {
    const getForecast = async () => {
      const { data } = await axios.get(`http://api.weatherapi.com/v1/forecast.json`,{
        params: {
          key: `e684477a6ce04c44b0c180151212009`,
          q: location, 
          days: `3`,
          alerts: `yes`,
          aqi:`yes`,
        },
      });
        setForecast(data);
    };
    getForecast();
  }, [location]);

  console.log(forecast);
  

  return (
    <div>
      <Header />
      <Container className={styles.container}>
        <SearchBar location={location} setLocation={setLocation}/>
        <WeatherCard location={location} forecast={forecast}/>
      </Container>
      <Footer className={styles.footer}/>
    </div>
    );
}

export default App;
