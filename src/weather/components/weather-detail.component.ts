import {Component, OnInit}   from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {WeatherService, Location} from './weather.data.service';

@Component({
	selector: 'sd-weather-detail',
	templateUrl: './weather/components/weather-detail.component.html',
	styleUrls: ['./weather/components/weather-detail.component.css'],
	providers: [WeatherService]
})

export class WeatherDetailComponent implements OnInit {
	city: string;
	data: any[];
	cityData: any;
	errorMessage: string;

	constructor(
		private _router: Router,
		private _routeParams: RouteParams,
		private _weatherService: WeatherService
	) {}

	ngOnInit() {
		let city = this._routeParams.get('city');
		this._weatherService.getLocation(city).subscribe(
			data => {
				this.cityData = data;
				console.log(this.cityData);
			},
			error => this.errorMessage = <any>error
		);
	}
};
