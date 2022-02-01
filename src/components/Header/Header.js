import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.text + ' ' + styles.header}>simple weather</h1>
      <h2 className={styles.text + ' ' + styles.subheader}>forecasts for today, tonight, and tomorrow</h2>
    </div>
  );
}

export default Header;