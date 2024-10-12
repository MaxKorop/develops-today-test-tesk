import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { AvailableCountryDto, CountryInfoDto } from './dto/country.dto';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  async getAvailableCountries(): Promise<AvailableCountryDto[]> {
    return this.countriesService.getAvailableCountries();
  }

  @Get('/:countryCode')
  async getCountryInfo(
    @Param('countryCode') countryCode: string
  ): Promise<CountryInfoDto> {
    return this.countriesService.getCountryInfo(countryCode);
  }
}
