import { CountriesNowReposnseDto } from './dto';

type PopulationResponseDto = CountriesNowReposnseDto<
  {
    country: string;
    code3: string;
    iso3: string;
    populationCounts: {
      year: number;
      value: number;
    };
  }[]
>;

export { type PopulationResponseDto };
