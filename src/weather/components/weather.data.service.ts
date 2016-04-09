import {Injectable} from 'angular2/core';
import * as _ from 'lodash';
import {HTTP_PROVIDERS} from 'angular2/http';

@Injectable()
export class WeatherService {
    locations: Location[];

    constructor() {
        this.locations = [
            new Location('Sydney', 21, 151.2313, -33.91741, 68),
            new Location('Brisbane', 22, 153.0186, -27.91741, 56),
            new Location('Melbourne', 23, 144.9322, -37.2387, 67),
            new Location('Leuven', 5, 4.700232, 50.23829, 40),
            new Location('China', 33, 116.2382, 39.90232, 30)
        ];
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

    getLocation(city: string) {
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
