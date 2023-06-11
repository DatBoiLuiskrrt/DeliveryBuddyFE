import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State, Locations, City } from '../models/locations.model';
@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:5266/api';
  //get all card
  getAllLocations(): Observable<State[]> {
    return this.http.get<State[]>(this.baseUrl + '/GetAllStates');
  }

  getAllCities(stateCode: any): Observable<City[]> {
    let params = new HttpParams().set('Id', stateCode);
    return this.http.get<City[]>(this.baseUrl + '/GetAllCitiesByStateId/', {
      params: params,
    });
  }
  getAllLocationsByCityID(citiID: any): Observable<Locations[]> {
    let params = new HttpParams().set('Id', citiID);
    return this.http.get<Locations[]>(
      this.baseUrl + '/Locations/GetLocationsByCityId/',
      {
        params: params,
      }
    );
  }
}
