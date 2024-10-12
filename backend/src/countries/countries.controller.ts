import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';
import {
  type AvailableCountryResponseDto,
  type CountryInfoResponseDto,
} from './libs/dto/dto';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  async getAvailableCountries(): Promise<AvailableCountryResponseDto[]> {
    return this.countriesService.getAvailableCountries();
  }

  @Get('/:countryCode')
  async getCountryInfo(
    @Param('countryCode') countryCode: string
  ): Promise<CountryInfoResponseDto> {
    return this.countriesService.getCountryInfo(countryCode);
  }
}
