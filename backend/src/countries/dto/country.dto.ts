type AvailableCountryDto = {
  countryCode: string;
  name: string;
};

type CountryInfoDto = {
  commonName: string;
  officialName: string;
  coutryCode: string;
  region: string;
  borders: CountryInfoDto[] | null;
  flagUrl: string;
  population: {
    year: number;
    value: number;
  }[];
};

export { AvailableCountryDto, CountryInfoDto };
