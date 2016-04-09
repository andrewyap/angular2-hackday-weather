import {Injectable} from 'angular2/core';
import * as _ from 'lodash';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

const _weatherAPIUrl = 'http://globalmapweather.azurewebsites.net:80/api/Weather';

@Injectable()
export class WeatherService {
    locations: Location[];

    constructor(private http: Http) {
        this.locations = [];
    }

    getLocations() : Observable<Location[]> {
        return this.http.get(_weatherAPIUrl)
            .map(res => this.locations = <Location[]> res.json().data)
            .catch(err => Observable.throw(err.json().error || 'Unable to get data'));
    }

    getLocation(city: string) : Observable<Location> {
        let location = _(this.locations).find({ City: city });
        return Observable.create(location);
    }

    addLocation(location: Location) : Observable<boolean> {
        if (_(this.locations).find({ City: location.City }))
            return Observable.create(false);

        let body = JSON.stringify(location);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(_weatherAPIUrl, body, options)
            .map(res => {
                this.locations.push(location);
                return Observable.create(true);
            })
            .catch(err => Observable.throw(err.json().error || 'Unable to post data'));
    }

    removeLastLocation() : Observable<boolean> {
        return this.http.delete(_weatherAPIUrl)
            .map(res => {
                this.locations.pop();
                return Observable.create(true);
            })
            .catch(err => Observable.throw(err.json().error || 'Unable to delete data'));
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
