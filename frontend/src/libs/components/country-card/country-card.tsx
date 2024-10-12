import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';

type Properties = {
  countryName: string;
  countryCode: string;
};

const CountryCard = ({ countryName, countryCode }: Properties): JSX.Element => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/country/${countryCode}`);
  };

  return (
    <div className={styles['wrapper-country-card']} onClick={handleCardClick}>
      <p className={styles['country-name']}>{countryName}</p>
      <p className={styles['country-code']}>{countryCode}</p>
    </div>
  );
};

export { CountryCard };
