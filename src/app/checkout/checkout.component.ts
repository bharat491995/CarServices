import { Component, OnInit, Input } from '@angular/core';

import { CarServices } from '../CarServices';
import { CarSizesModel } from '../car-sizes/car-sizes-model';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  selectedCars: CarServices[];
  selectedSizes: CarSizesModel[];


  constructor(private _shared: SharedService) { }

  ngOnInit() {
    let total = 0;
    this.selectedSizes = this._shared.selectedSize();
    this.selectedCars = this._shared.selectedservices();

    for (let i = 0; i < this.selectedCars.length; i++) {
      total = total + this.selectedCars[i].Price;
     }
     return total;
  }

}
