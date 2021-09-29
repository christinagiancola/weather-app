import { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './SearchBar.module.css';

function SearchBar() {
  const [location, setLocation] = useState("Richmond");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Input received: ${location}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Forecast City:
          <input 
            type="text" 
            value={location} 
            onChange={e => setLocation(e.target.value)}
            className={styles.input}
          />
        </label>
        <Button variant="outline-dark" size="sm">Get Forecast</Button>
      </form>
    </div>
  );
}

export default SearchBar;