import { Component, OnInit, Input } from '@angular/core';
import { CarSizesComponent } from '../car-sizes/car-sizes.component';
import { AllservicesComponent } from '../allservices/allservices.component';
import { Subscription } from 'rxjs';
import { CarServices } from '../CarServices';
import { CarSizesModel } from '../car-sizes/car-sizes-model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  carNewSize: CarSizesModel[];
  // carserviceOld: CarServices[];
  // carNewSize: CarSizesModel[];
  subscription: Subscription;

  constructor(private _shared: SharedService) { }

  ngOnInit() {
    this._shared.carServices
      .subscribe(
        (carSize: CarSizesModel[]) => {
          this.carNewSize = carSize;
          console.log(this.carNewSize);
        }
      );
      }
  //  this._shared.carSize.subscribe((carSize: CarSizesModel[]) => {
  // this.carNewSize = carSize;
  // console.log(this.carNewSize);
// });

    }
