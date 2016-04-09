import {Component} from 'angular2/core';

@Component({
  selector: 'sd-weather',
  templateUrl: './weather/components/weather.component.html',
  styleUrls: ['./weather/components/weather.component.css']
})
export class WeatherComponent {
	data: string;

	constructor() {
		// this.data = JSON.stringify(Data);
	}
}
