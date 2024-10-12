import { CountryInfoResponseDto } from './country-info-response.dto';

type NagerCountryInfo = Omit<CountryInfoResponseDto, 'flagUrl' | 'population'>;

export { type NagerCountryInfo };
