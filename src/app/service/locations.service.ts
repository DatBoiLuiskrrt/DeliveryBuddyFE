import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../models/locations.model';
import { City } from '../models/locations.model';
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
}
