import {Injectable} from 'angular2/core';
import mockData from './mockweatherdata';
import * as _ from 'lodash';

@Injectable()
export class WeatherService {
    mockData: Location[];

    constructor() {
        this.mockData = mockData;
    }

    getLocations() : any[] {
        let result = mockData.map(data => {
            return {
                city: data.City,
                temperature: data.Temperature
            };
        });

        return result;
    }

    getLocation(city: string) {
        return _(this.mockData).find({ City: city });
    }

    addLocation(location: Location) {
        if (_(this.mockData).find({ City: location.City }))
            return false;

        this.mockData.push(location);
        return true;
    }

    removeLocation(city: string) {
        if (_(this.mockData).find({ City: city })) {
            _(this.mockData).remove((location : Location) => {
                return location.City === city;
            });
            return true;
        }

        return false;
    }
}

export class Location {
    Latitude: string;
    Longtitude: string;
    Humidity: string;
    Temperature: string;
    City: string;

    constructor(private city: string){
        this.City = city;
    }
}
