import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.container}>
      <h4 className={styles.text + ' ' + styles.header}>simple weather</h4>
      <h3 className={styles.text + ' ' + styles.subheader}>forecasts for today, tonight, and tomorrow</h3>
    </div>
  );
}

export default Header;