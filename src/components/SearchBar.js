import styles from './SearchBar.module.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


function SearchBar() {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl 
          placeholder="What's the weather like in..."
          aria-label="Forecast City"
        />
        <Button variant="outline-secondary">
          Get Forecast
        </Button>
      </InputGroup>
    </div>
  );
}

export default SearchBar;