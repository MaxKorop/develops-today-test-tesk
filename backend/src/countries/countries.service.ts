import { Injectable } from '@nestjs/common';
import { AvailableCountryDto, CountryInfoDto } from './dto/country.dto';

type NagerCountryInfo = Omit<CountryInfoDto, 'flagUrl' | 'population'>;

type CountriesNowReposnseDto<T> = {
  error: boolean;
  msg: string;
  data: T;
};

type CountriesNowFlagsDto = CountriesNowReposnseDto<
  {
    name: string;
    flag: string;
    iso2: string;
    iso3: string;
  }[]
>;

type CountriesNowPopulationDto = CountriesNowReposnseDto<
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

@Injectable()
export class CountriesService {
  private baseCountriesNowPath: string =
    'https://countriesnow.space/api/v0.1/countries/';
  private baseNagerPath: string = 'https://date.nager.at/api/v3/';

  private async makeRequest<T>(
    basePath: string,
    path: string,
    options?: RequestInit
  ): Promise<T> {
    const response = await fetch(basePath + path, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return (await response.json()) as T;
  }

  private async makeRequestToCountriesNowApi<T>(
    path: string,
    options?: RequestInit
  ): Promise<T> {
    return this.makeRequest<T>(this.baseCountriesNowPath, path, options);
  }

  private async makeRequestToNagerApi<T>(
    path: string,
    options?: RequestInit
  ): Promise<T> {
    return this.makeRequest<T>(this.baseNagerPath, path, options);
  }

  async getAvailableCountries(): Promise<AvailableCountryDto[]> {
    return await this.makeRequestToNagerApi<AvailableCountryDto[]>(
      'AvailableCountries'
    );
  }

  async getCountryInfo(countryCode: string): Promise<CountryInfoDto> {
    const countryInfo = await this.makeRequestToNagerApi<NagerCountryInfo>(
      `CountryInfo/${countryCode}`
    );
    const flags =
      await this.makeRequestToCountriesNowApi<CountriesNowFlagsDto>(
        'flag/images'
      );

    const population = (
      await this.makeRequestToCountriesNowApi<CountriesNowPopulationDto>(
        'population',
        {
          method: 'GET',
        }
      )
    ).data.filter(
      (populationCountry) =>
        populationCountry.country === countryInfo.commonName
    );

    console.log(population);

    const flagUrl = flags.data.filter(
      (countryWithFlag) => countryWithFlag.iso2 === countryCode
    )[0].flag;

    return {
      ...countryInfo,
      flagUrl,
      population: population.map(
        (populationInfo) => populationInfo.populationCounts
      ),
    };
  }
}
