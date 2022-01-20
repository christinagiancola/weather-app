import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.gradient}/>
      <div className={styles.footer}>
        <h4 className={styles.text} id='footerHeading'>App created by Christina Giancola</h4>
        <h4 className={styles.text} id='footerSubheading'>Forecasts powered by <a href="https://www.weatherapi.com/" title="Weather API" className={styles.link}>WeatherAPI.com</a></h4>
      </div>
    </div>

  );
}

export default Footer;