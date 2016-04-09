import {Component, OnInit}   from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {WeatherService, Location}      from './weather.data.service';

@Component({
	selector: 'sd-weather-detail',
	templateUrl: './weather-detail.component.html',
	styleUrls: ['./weather-detail.component.css'],
	providers: [WeatherService]
})

export class WeatherDetailComponent implements OnInit {
	data: any[];
	// cityData: Location;

	constructor(
		private _router: Router,
		private _routeParams: RouteParams
		// private _weatherService: WeatherService
	) {
		// this.cityData = _weatherService.getLocation(city);
	}

	ngOnInit() {
		let city = this._routeParams.get('city');
		// this.cityData = this._weatherService.getLocation(city);
	}
};
