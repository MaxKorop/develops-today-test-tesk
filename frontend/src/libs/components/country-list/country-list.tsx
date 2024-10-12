import styles from './styles.module.css';
import { CountryCard } from '../country-card/country-card';
import { useAppSelector } from '../../hooks/hooks';

const CountryList = (): JSX.Element => {
  const { availableCountries } = useAppSelector(({ app }) => app);

  return (
    <div className={styles['wrapper-country-list']}>
      {availableCountries.map((country) => (
        <CountryCard
          key={country.countryCode}
          countryName={country.name}
          countryCode={country.countryCode}
        />
      ))}
    </div>
  );
};

export { CountryList };
