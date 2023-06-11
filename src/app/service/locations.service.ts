import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../models/locations.model';
@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://localhost:7123/api';
  //get all card
  getAllLocations(): Observable<State[]> {
    return this.http.get<State[]>(this.baseUrl + '/GetAllStates');
  }

  getAllCities(stateCode:any): Observable<any>{
    let params = new HttpParams().set('Id', stateCode);
    return this.http.get<any[]>(this.baseUrl + '/GetAllCitiesByStateId/', {params: params});
  }
}
