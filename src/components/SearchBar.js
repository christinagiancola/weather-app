import { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
  const [location, setLocation] = useState("Richmond");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Input received: ${location}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Forecast City:
          <input type="text" value={location} onChange={e => setLocation(e.target.value)}/>
        </label>
        <button />
      </form>
    </div>
  );
}

export default SearchBar;