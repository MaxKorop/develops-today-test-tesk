type CountryInfoResponseDto = {
  commonName: string;
  officialName: string;
  coutryCode: string;
  region: string;
  borders: CountryInfoResponseDto[] | null;
  flagUrl: string;
  population: {
    year: number;
    value: number;
  }[];
};

export { type CountryInfoResponseDto };
