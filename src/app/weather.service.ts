import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'ff9d1a0357c44968563559388e6fdb9d'; 
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeatherData(city: string, countryCode: string): Observable<any> {
    const apiUrlWithParams = `${this.apiUrl}?q=${city},${countryCode}&appid=${this.apiKey}&units=metric`;

    return this.http.get(apiUrlWithParams);
  }
}
