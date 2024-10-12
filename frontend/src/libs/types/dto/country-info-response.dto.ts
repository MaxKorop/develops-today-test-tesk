type CountryInfoResponseDto = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: CountryInfoResponseDto[] | null;
  flagUrl: string;
  population: {
    year: number;
    value: number;
  }[];
};

export { type CountryInfoResponseDto };
