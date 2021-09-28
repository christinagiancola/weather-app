import styles from './App.module.css';
import Header from './components/Header.js';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
        <SearchBar />
        <div id='weather-card-container'>
          <WeatherCard />
        </div>
      <Footer />
    </div>
  );
}

export default App;
