import {Injectable} from 'angular2/core';
import * as _ from 'lodash';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

const _weatherAPIUrl = 'http://globalmapweather.azurewebsites.net:80/api/Weather';

@Injectable()
export class WeatherService {
    locations: Location[];

    constructor(private http: Http) {
        this.locations = [];
    }

    getLocations() : any[] {
        let result = this.locations.map(data => {
            return {
                city: data.City,
                temperature: data.Temperature
            };
        });

        return result;
    }

    getLocation(city: string) : Location {
        return _(this.locations).find({ City: city });
    }

    addLocation(location: Location) {
        if (_(this.locations).find({ City: location.City }))
            return false;

        this.locations.push(location);
        return true;
    }

    removeLocation(city: string) {
        if (_(this.locations).find({ City: city })) {
            _(this.locations).remove((location : Location) => {
                return location.City === city;
            });
            return true;
        }

        return false;
    }
}

export class Location {
    Latitude: number;
    Longtitude: number;
    Humidity: number;
    Temperature: number;
    City: string;

    constructor(private city: string,
                private temperature: number = null,
                private longtitude: number = null,
                private latitude: number = null,
                private humidity: number = null) {
        this.City = city;
        this.Temperature = temperature;
        this.Longtitude = longtitude;
        this.Latitude = latitude;
        this.Humidity = humidity;
    }
}
