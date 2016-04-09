import {Component} from 'angular2/core';
import {Router}    from 'angular2/router';

@Component({
  selector: 'sd-weather',
  templateUrl: './weather/components/weather.component.html',
  styleUrls: ['./weather/components/weather.component.css']
})
export class WeatherComponent {
	data: any[];

	constructor(
		private _router: Router
	) {
		this.data = Data;
	};

	onSelect(city: string): boolean {
		alert(city);
		this._router.navigate( ['WeatherDetail', { city: city }] );
		return;
	};

	constructor() {
		// this.data = JSON.stringify(Data);
	}

}
