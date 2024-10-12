import { CountryList } from '../../libs/components/components';
import { useEffect } from 'react';
import { useAppDispatch } from '../../libs/hooks/hooks';
import { actions as appActions } from '../../modules/app/app';
import styles from './styles.module.css';

const Country = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(appActions.getCountries());
  }, []);

  return (
    <div className={styles['container']}>
      <p className={styles['title']}>Country List</p>
      <p className={styles['subtitle']}>
        Choose the country you want to learn more about
      </p>
      <CountryList />
    </div>
  );
};

export { Country };
