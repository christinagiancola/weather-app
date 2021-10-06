import { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './SearchBar.module.css';

function SearchBar({ location, setLocation }) {
  const [inputText, setInputText] = useState(`${location}`)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`handleSubmit(): location set from inputText`);
    setLocation(inputText);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          City:
          <input 
            type="text" 
            value={inputText} 
            onChange={e => setInputText(e.target.value)}
            className={styles.input}
          />
        </label>
        <Button type="submit" variant="outline-dark" size="sm">Get Forecast</Button>
      </form>
    </div>
  );
}

export default SearchBar;