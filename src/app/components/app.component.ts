import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {HomeComponent} from '../../home/components/home.component';
import {AboutComponent} from '../../about/components/about.component';
import {WeatherComponent} from '../../weather/components/weather.component';
import {NameListService} from '../../shared/services/name-list.service';
import {HTTP_PROVIDERS}    from 'angular2/http';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService],
  templateUrl: './app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent],
  providers: [HTTP_PROVIDERS]
})
@RouteConfig([
  { path: '/',      name: 'Home',  component: HomeComponent  },
  { path: '/about', name: 'About', component: AboutComponent },
  { path: '/weather', name: 'Weather', component: WeatherComponent }
])
export class AppComponent {}
