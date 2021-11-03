import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <h4 className={styles.text}>App created by Christina Giancola Powered by <a href="https://www.weatherapi.com/" title="Weather API" className={styles.link}>WeatherAPI.com</a></h4>
    </div>
  );
}

export default Footer;