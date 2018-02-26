import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude: number = 39.7392; // Denver Lat + Lng
  longitude: number = -104.9903;

  onChoseLocation(event) {
    console.log(event); // Checking to see if click is registering
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }

  constructor() { }

  ngOnInit() {
  }

}
