import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Country } from '../../../pages/country/country';
import { CountryDetails } from '../../../pages/country-details/country-details';
import './styles.module.css';

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="/country/:countryCode" element={<CountryDetails />} />
      </Routes>
    </Router>
  );
};

export { App };
