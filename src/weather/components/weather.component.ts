import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES}    from 'angular2/router';
import {WeatherService, Location}      from './weather.data.service';

@Component({
  selector: 'sd-weather',
  templateUrl: './weather/components/weather.component.html',
  styleUrls: ['./weather/components/weather.component.css'],
  providers: [WeatherService],
  directives: [ROUTER_DIRECTIVES]
})
export class WeatherComponent {
	data: any[];
	locations: Location[];
	errorMessage: string;

	constructor(
		private _router: Router,
		private _weatherService: WeatherService
	) {};

	ngOnInit() { this.getLocations(); }

	getLocations() {
		this._weatherService.getLocations().subscribe(
			locations => {
				this.locations = locations;
				console.log(this.locations);
			},
			error => this.errorMessage = <any>error
		);
	}

	onSelect(city: string): boolean {
		alert(city);
		this._router.navigate( ['WeatherDetail', {city: city}] );
		return;
	};

	removeAllLocations(): boolean {
		this._weatherService.removeAllLocations().subscribe(
			locations => {
				this.locations = locations;
				console.log(this.locations);
			},
			error => this.errorMessage = <any>error
		);
		return;
	}

}
