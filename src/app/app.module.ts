import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MobileInfoComponent } from './MobileInfo/MobileInfo.component';
import { HttpClientModule }    from '@angular/common/http';
import {MobileInfoService} from './mobileInfo.service';


@NgModule({
  declarations: [
    AppComponent,
    MobileInfoComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [MobileInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
