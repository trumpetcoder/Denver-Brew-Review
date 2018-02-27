import { Component, OnInit, ViewChild } from '@angular/core';
import {} from '@types/googlemaps'; 
// interface setting up the lat/lng/title model
export interface Marker { 
  lat: number;
  lng: number;
  title: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
// Setting up hard coded markers for display on map
export class MapComponent implements OnInit {
  markers: Array<Marker> = [
    {
      lat: 39.7697,
      lng: -104.9728,
      title: 'Black Shirt Brewing' 
    },
    {
      lat: 39.7523,
      lng: -104.9914,
      title: 'Jagged Mountain'
    },
    {
      lat: 39.7534,
      lng: -104.9985,
      title: 'Wynkoop Brewing'
    },
    {
      lat: 39.7538,
      lng: -104.9885,
      title: 'Great Divide'
    },

  ];

  //map coordinates setting zoom level
  lat: number;
  lng: number;
  zoom = 13;

  constructor() { }

  ngOnInit() {
    const success = (pos) => {
      const loc = pos.coords;
      this.addMarker(loc);
      this.setMapCoords(loc);
    };

    const error = (err) => {
      console.log(err);
    };

    navigator.geolocation.getCurrentPosition(success,error);
    
  }
  // using geo location to set center mark
  addMarker = (loc) => {
    const marker = {
      lat: loc.latitude,
      lng: loc.longitude,
      title: 'you'
    };
    this.markers.push(marker);
  }
  
  setMapCoords = (loc) => {
    this.lat = loc.latitude;
    this.lng = loc.longitude;
  }

}

