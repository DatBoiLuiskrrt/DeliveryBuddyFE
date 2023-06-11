import { Component, OnInit } from '@angular/core';
import { LocationsService } from './service/locations.service';
import { State, City } from './models/locations.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'DeliveryBuddyFE';
  states: State[] = [];
  cities: City[] = [];

  constructor(private locationsService: LocationsService) {}
  ngOnInit(): void {
    this.getAllStateLocations();
    this.getAllCityLocations(1);
  }

  getAllStateLocations() {
    this.locationsService.getAllLocations().subscribe((response) => {
      this.states = response;
      // console.log(response);
    });
  }

  getAllCityLocations(stateID: number) {
    this.locationsService.getAllCities(stateID).subscribe((response) => {
      this.cities = response;
      // console.log(response);
    });
  }
}
