import { Component, OnInit } from '@angular/core';
import { LocationsService } from './service/locations.service';
import { State, City, Locations } from './models/locations.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'DeliveryBuddyFE';
  states: State[] = [];
  cities: City[] = [];
  locations: Locations[] = [];

  constructor(private locationsService: LocationsService) {}
  ngOnInit(): void {
    this.getAllStateLocations();
    this.getAllLocationsByCityID(1);
    this.getAllCityLocations(1);
  }

  getAllStateLocations() {
    this.locationsService.getAllLocations().subscribe((response) => {
      this.states = response;
      // console.log(response);
    });
  }

  getAllCityLocations(cityID: number) {
    this.locationsService.getAllCities(cityID).subscribe((response) => {
      this.cities = response;
      // console.log(response);
    });
  }
  getAllLocationsByCityID(cityID: number) {
    this.locationsService
      .getAllLocationsByCityID(cityID)
      .subscribe((response) => {
        this.locations = response;
        console.log(response);
      });
  }
}
