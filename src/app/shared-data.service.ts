// shared-data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  weatherData: any;

  constructor() { }

  updateWeatherData(data: any) {
    this.weatherData = data;
  }
}
