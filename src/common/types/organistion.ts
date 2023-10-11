export interface Organisation {
  id: number;
  name: string;
  secondaryLanguageName?: string;
  caption: string;
  type?: string[];
  address: string;
  coord?: string[];
  license?: string;
  openAllWeek?: boolean;
  offDays?: string[];
  isRegistrationComplete?: boolean;
  currencyCode?: string;
  decimalZeros?: number;
  printer?: string;
  password?: string;
  logoUrl: string;
  imageUrl: string;
}
