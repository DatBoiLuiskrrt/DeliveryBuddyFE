import { Component, OnInit } from '@angular/core';
import { LocationsService } from './service/locations.service';
import { State } from './models/locations.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'DeliveryBuddyFE';
  states: State[] = [];

  constructor(private locationsService: LocationsService) {}
  ngOnInit(): void {
    this.getAllStateLocations();
  }

  getAllStateLocations() {
    this.locationsService.getAllLocations().subscribe((response) => {
      this.states = response;
      console.log(response);
    });
  }
}
