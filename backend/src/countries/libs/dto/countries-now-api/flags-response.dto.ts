import { CountriesNowReposnseDto } from './dto';

type FlagsResponseDto = CountriesNowReposnseDto<
  {
    name: string;
    flag: string;
    iso2: string;
    iso3: string;
  }[]
>;

export { type FlagsResponseDto };
