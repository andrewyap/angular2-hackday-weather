import {Injectable} from 'angular2/core';
import mockData from './mockweatherdata';
import * as _ from 'lodash';

@Injectable()
export class WeatherService {
    mockData: Location[];

    constructor() {
        this.mockData = mockData;
    }

    getCountries() : any[] {
        let result = mockData.map(data => {
            return {
                city: data.City,
                temperature: data.Temperature
            };
        });

        return result;
    }

    getCountry(city: string) {
        // return _(mockData).find({ City: city});
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
