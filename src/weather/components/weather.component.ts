import {Component} from 'angular2/core';
import Data from './mockweatherdata';

@Component({
  selector: 'sd-weather',
  templateUrl: './weather/components/weather.component.html',
  styleUrls: ['./weather/components/weather.component.css']
})
export class WeatherComponent {
	data: string;

	constructor() {
		this.data = JSON.stringify(Data);
	}
}
