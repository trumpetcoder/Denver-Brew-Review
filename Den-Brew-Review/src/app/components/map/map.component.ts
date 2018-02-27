import { Component, OnInit, ViewChild } from '@angular/core';
import {} from '@types/googlemaps'; 

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
export class MapComponent implements OnInit {
  markers: Array<Marker> = [
    {
      lat: 39.7706451,
      lng: -104.8699091,
      title: 'one' 
    },
    {
      lat: 39.7706451,
      lng: -104.9699096,
      title: 'two'
    },
  ];

  //map coordinates
  lat: number;
  lng: number;
  zoom = 15;

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

