import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../models/locations.model';
@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:5266/api';
  //get all cards
  getAllLocations(): Observable<State[]> {
    return this.http.get<State[]>(this.baseUrl + '/GetAllStates');
  }
}
