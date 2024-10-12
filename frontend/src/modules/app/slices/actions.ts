import { name as sliceName } from './app.slice';
import {
  AvailableCountryResponseDto,
  CountryInfoResponseDto,
} from '../../../libs/types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '../../store/store';

const getCountries = createAsyncThunk<
  AvailableCountryResponseDto[],
  undefined,
  AsyncThunkConfig
>(`${sliceName}/availableCountries`, async (_, { extra }) => {
  const { appApi } = extra;

  return await appApi.getAvailableCountries();
});

const getCountryInfo = createAsyncThunk<
  CountryInfoResponseDto,
  string,
  AsyncThunkConfig
>(`${sliceName}/countryInfo`, async (payload, { extra }) => {
  const { appApi } = extra;

  return await appApi.getCountryInfo(payload);
});

export { getCountries, getCountryInfo };
