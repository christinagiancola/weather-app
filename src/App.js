import styles from './App.module.css';
import Header from './Header.js';
import Footer from './Footer.js';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.TextColor}>
        Weather Card Container
      </div>
      <Footer />
    </div>
  );
}

export default App;
