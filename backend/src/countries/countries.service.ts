import { Injectable } from '@nestjs/common';
import {
  type AvailableCountryResponseDto,
  type CountryInfoResponseDto,
  type FlagsResponseDto,
  type NagerCountryInfo,
  type PopulationResponseDto,
} from './libs/dto/dto';
import { HttpMethod } from './libs/enums/enums';

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

  async getAvailableCountries(): Promise<AvailableCountryResponseDto[]> {
    return await this.makeRequestToNagerApi<AvailableCountryResponseDto[]>(
      'AvailableCountries'
    );
  }

  async getCountryInfo(countryCode: string): Promise<CountryInfoResponseDto> {
    const countryInfo = await this.makeRequestToNagerApi<NagerCountryInfo>(
      `CountryInfo/${countryCode}`
    );
    const flags =
      await this.makeRequestToCountriesNowApi<FlagsResponseDto>('flag/images');

    const population = (
      await this.makeRequestToCountriesNowApi<PopulationResponseDto>(
        'population',
        {
          method: HttpMethod.GET,
        }
      )
    ).data.filter(
      (populationCountry) =>
        populationCountry.country === countryInfo.commonName
    );

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
