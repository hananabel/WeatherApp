import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements ViewWillEnter {
  weatherData: any;

  constructor(private sharedDataService: SharedDataService) { }

 
  

    ionViewWillEnter() {
    this.weatherData = this.sharedDataService.weatherData;
  }

}
