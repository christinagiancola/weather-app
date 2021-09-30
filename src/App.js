import { useState } from 'react';
import styles from './App.module.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Footer from './components/Footer.js';


function App() {
  const [location, setLocation] = useState("Richmond");

  return (
    <div>
        <Header />
      <Container className={styles.container}>
          <SearchBar location={location} setLocation={setLocation}/>
          <div id='weather-card-container'>
            <WeatherCard location={location}/>
          </div>
      </Container>
        <Footer className={styles.footer}/>
    </div>
    );
}

export default App;
