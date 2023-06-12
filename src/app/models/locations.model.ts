export interface State {
  id: number;
  stateName: string;
  stateCode: string;
  countryId: number;
}
export interface City {
  id: number;
  cityName: string;
  stateId: number;
}

export interface Locations {
  id: number;
  streetName: string;
  houseNumber: number;
  aptNumber: number;
  active: string;
  cityId: number;
  countryId: number;
  userId: number;
  stateId: number;
}

export interface Comments {
  id: number;
  commentDescription: string;
  userId: number;
  locationId: number;
}
