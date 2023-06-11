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
