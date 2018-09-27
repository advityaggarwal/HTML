import { Component, OnInit } from '@angular/core';
import {IMobile} from './mobile';
import {MobileInfoService} from '../mobileInfo.service'


@Component({
  selector: 'app-mobiles',  //selector tag for the MobileInfo Component
  templateUrl: './MobileInfo.component.html',
  styleUrls:['./MobileInfo.component.css']
  
})
export class MobileInfoComponent implements OnInit {

  constructor(private _mobileInfoService:MobileInfoService) { }
  mobiles:IMobile[];  //declared a object of type interface of IMobile
  mobId:number; //declared a variable for Mobile Id
  mobName:string; //declared a variable for Mobile Name
  mobPrice:number;  //declared a variable for Mobile Price

  ngOnInit() {
    this._mobileInfoService.getInfo().subscribe(data=>this.mobiles=data); //on Initialising the component the data is loaded
    

  }

  sortById()
  {
    this.mobiles.sort((a,b)=>{return a.mobId-b.mobId}); //sorting on the basis of Mobile Id
  }

  sortByName()
  {
    this.mobiles.sort((a,b)=>{return a.mobName.localeCompare(b.mobName)});  //sorting on the basis of Mobile Name
  }
  sortByPrice()
  {
    this.mobiles.sort((a,b)=>{return a.mobPrice-b.mobPrice}); //sorting on the basis of Mobile Price
  }
  delete(x:number)
  {
    this.mobiles.splice(x,1); //deletes a particular entry from the array of data
  }

  
}
