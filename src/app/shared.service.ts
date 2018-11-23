import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CarServices } from './CarServices';
import { CarSizesModel } from './car-sizes/car-sizes-model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public carServices = new  Subject<CarSizesModel[]>();
  public carSize = new  Subject<CarSizesModel[]>();

  constructor() { }

  getAllCarServices(cars: any) {
   this.carServices.next(cars);
   }

   getAllCarSizes(sizes: any) {
    this.carSize.next(sizes);
   }

}
