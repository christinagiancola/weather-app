import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.container}>
    <h4 className={styles.text}>My Weather App</h4>
    </div>
  );
}

export default Header;