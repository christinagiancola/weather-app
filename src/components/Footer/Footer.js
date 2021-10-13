import styles from './Footer.module.css';

function Footer() {
  return (
    // TODO * make foot sticky to bottom of viewer *
    // TODO * change styling of <a> *
    <div className={styles.container}>
      <h4 className={styles.text}>App created by Christina Giancola Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></h4>
    </div>
  );
}

export default Footer;