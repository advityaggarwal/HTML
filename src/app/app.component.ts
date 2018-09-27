import { Component } from '@angular/core';
import {InformationComponent} from './information/information.component';
import {HttpClientModule} from '@angular/common/http';
import {InformationService} from './information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[InformationService]
})
export class AppComponent {
  title = 'labbook';
}
