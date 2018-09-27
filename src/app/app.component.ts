import { Component } from '@angular/core';
import {MobileInfoService} from './mobileInfo.service';

@Component({
  selector: 'app-root',   //name of the AppComponent tag
  templateUrl: './app.component.html',  //URL of the HTML content of AppComponent
  styleUrls: ['./app.component.css'],   //URL of the CSS content of AppComponent
  providers:[MobileInfoService]   //service providers declared to AppComponent
})
export class AppComponent {
  title = 'Mobile World';
}
