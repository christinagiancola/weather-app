import styles from './App.module.css';
import Header from './components/Header.js';
import WeatherCard from './components/WeatherCard';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Header />
      <div id='weather-card-container'>
        <WeatherCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
