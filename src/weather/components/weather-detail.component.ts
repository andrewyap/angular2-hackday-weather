import {Component, OnInit}   from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import Data                  from './mockweatherdata';
// import * as _ from 'lodash';

@Component({
	selector: 'sd-weather-detail',
	templateUrl: './weather-detail.component.html',
	styleUrls: ['./weather-detail.component.css'],
})

export class WeatherDetailComponent implements OnInit {
	data: any[];
	cityData: any;

	constructor(
		private _router: Router,
		private _routeParams: RouteParams
	) {}

	ngOnInit() {
		let city = this._routeParams.get('city');
		// this.cityData = _.find(Data, { 'City': city });
	}
};
