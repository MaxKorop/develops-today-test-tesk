import { getCountries, getCountryInfo } from './actions';
import { actions } from './app.slice';

const allActions = {
  ...actions,
  getCountries,
  getCountryInfo,
};

export { allActions as actions };
export { reducer } from './app.slice';
