import styles from './Footer.module.css';

function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.gradient} />
			<div className={styles.footer}>
				<h3 className={styles.text} id='footerHeading'>
					App created by{' '}
					<a href='https://github.com/christinagiancola' title='Christina Giancola' className={styles.link}>
						Christina Giancola
					</a>
				</h3>
				<h3 className={styles.text} id='footerSubheading'>
					Forecasts powered by{' '}
					<a href='https://www.weatherapi.com/' title='Weather API' className={styles.link}>
						WeatherAPI.com
					</a>
				</h3>
			</div>
		</div>
	);
}

export default Footer;
