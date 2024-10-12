import {
  AvailableCountryResponseDto,
  CountryInfoResponseDto,
} from '../../libs/types/types';

class AppApi {
  public async getAvailableCountries(): Promise<AvailableCountryResponseDto[]> {
    const response = await fetch(
      `${import.meta.env['VITE_API_BASE_URL']}countries`,
      {
        method: 'GET',
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data as AvailableCountryResponseDto[];
  }

  public async getCountryInfo(
    countryCode: string
  ): Promise<CountryInfoResponseDto> {
    const response = await fetch(
      `${import.meta.env['VITE_API_BASE_URL']}countries/${countryCode}`,
      {
        method: 'GET',
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data as CountryInfoResponseDto;
  }
}

export { AppApi };
