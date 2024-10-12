import { useEffect } from 'react';
import { CountryCard, Loader } from '../../libs/components/components';
import { useAppDispatch, useAppSelector } from '../../libs/hooks/hooks';
import { CountryInfo, PopulationChart } from './libs/components/components';
import { actions as appActions } from '../../modules/app/app';
import { useNavigate, useParams } from 'react-router-dom';
import { DataStatus } from '../../libs/enums/enums';
import styles from './styles.module.css';

const CountryDetails = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { selectedCountry: country, dataStatus } = useAppSelector(
    ({ app }) => app
  );
  const { countryCode } = useParams<{ countryCode: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    void dispatch(appActions.getCountryInfo(countryCode ?? ''));
  }, [countryCode]);

  if (dataStatus === DataStatus.PENDING) {
    return (
      <div className={styles['loader-container']}>
        <Loader />
      </div>
    );
  }

  const handleReturnToMain = () => {
    navigate('/');
  };

  return (
    <div className={styles['container']}>
      <span className={styles['to-main']} onClick={handleReturnToMain}>
        to main page
      </span>

      <CountryInfo
        countryName={country?.commonName as string}
        countryCode={country?.countryCode as string}
        region={country?.region as string}
        flagUrl={country?.flagUrl as string}
      />

      <div className={styles['wrapper-countries-bordering']}>
        <p className={styles['subtitle']}>
          Countries bordering {country?.commonName}
        </p>
        {country?.borders?.map((neighbourCountry) => (
          <CountryCard
            key={neighbourCountry?.countryCode}
            countryName={neighbourCountry.commonName}
            countryCode={neighbourCountry.countryCode}
          />
        ))}
      </div>

      <PopulationChart data={country?.population ?? []} />
    </div>
  );
};

export { CountryDetails };
