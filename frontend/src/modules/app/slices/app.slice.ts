import { createSlice } from '@reduxjs/toolkit';
import { DataStatus } from '../../../libs/enums/enums';
import {
  AvailableCountryResponseDto,
  CountryInfoResponseDto,
  ValueOf,
} from '../../../libs/types/types';
import { getCountries, getCountryInfo } from './actions';

type State = {
  dataStatus: ValueOf<typeof DataStatus>;
  availableCountries: AvailableCountryResponseDto[];
  selectedCountry: CountryInfoResponseDto | null;
};

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  availableCountries: [],
  selectedCountry: null,
};

const { actions, name, reducer } = createSlice({
  extraReducers(builder) {
    builder.addCase(getCountries.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.availableCountries = action.payload;
    });
    builder.addCase(getCountries.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    });

    builder.addCase(getCountryInfo.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
    builder.addCase(getCountryInfo.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.selectedCountry = action.payload;
    });
    builder.addCase(getCountryInfo.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    });
  },
  initialState,
  name: 'app',
  reducers: {},
});

export { actions, name, reducer };
