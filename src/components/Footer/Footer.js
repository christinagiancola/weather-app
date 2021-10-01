import styles from './Footer.module.css';

function Footer() {
  return (
    <div>
      <h4 className={styles.text}>App created by Christina Giancola Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></h4>
    </div>
  );
}

export default Footer;