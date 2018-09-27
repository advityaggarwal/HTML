import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { HttpClientModule }    from '@angular/common/http';
import {InformationService} from './information.service';


@NgModule({
  declarations: [
    AppComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [InformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
