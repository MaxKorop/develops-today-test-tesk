import styles from './styles.module.css';

type Properties = {
  countryName: string;
  countryCode: string;
  region: string;
  flagUrl: string;
};

const CountryInfo = ({
  countryName,
  countryCode,
  region,
  flagUrl,
}: Properties): JSX.Element => {
  return (
    <div className={styles['country-info']}>
      <div>
        <p className={styles['title']}>{countryName}</p>
        <p>Code: {countryCode}</p>
        <p>Region: {region}</p>
      </div>
      <img className={styles['country-flag']} src={flagUrl} alt={countryName} />
    </div>
  );
};

export { CountryInfo };
