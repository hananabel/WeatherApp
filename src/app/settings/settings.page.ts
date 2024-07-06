import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { SharedDataService } from '../shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  city: string = '';
  countryCode: string = '';

  constructor(private weatherService: WeatherService,private sharedDataService: SharedDataService, private router: Router) { }
  

  
  
  getWeatherData() {
    if (this.city && this.countryCode) {
      this.weatherService.getWeatherData(this.city, this.countryCode).subscribe(
        (data) => {
          console.error('button is clicked');
          // Store weather data or pass it to the home page       
          this.sharedDataService.updateWeatherData(data);
          this.router.navigateByUrl('/tabs/home');
        },
        (error) => {
          console.error('Error fetching weather data:', error);
          // Handle errors
        }
      );
    } else {
      console.error('City and country code are required');
      // Show a message or handle the case where input is missing
    }
  }

  ngOnInit() {
  }

}
