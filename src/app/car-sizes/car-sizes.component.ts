import { Component, OnInit } from '@angular/core';
import { CarSizesModel } from './car-sizes-model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-car-sizes',
  templateUrl: './car-sizes.component.html',
  styleUrls: ['./car-sizes.component.scss']
})
export class CarSizesComponent {

  carSizes: CarSizesModel[] = [
     new CarSizesModel('Hatchback', 500000, '', false),
     new CarSizesModel('Sedan', 100000, '', false),
     new CarSizesModel('MUV/SUV', 600000, '', false),
     new CarSizesModel('Coupe', 1200000, '', false),
     new CarSizesModel('Convertible', 2500000, '', false),
     new CarSizesModel('Wagon', 5400000, '', false),
     new CarSizesModel('Van', 4700000, '', false),
     new CarSizesModel('Jeep', 3200000, '', false)
     ];

  constructor(private _shared: SharedService) { }

  listClick(event, newValue: CarSizesModel) {
    console.log(newValue);
    newValue.isSelected = !newValue.isSelected;
    this._shared.getAllCarSizes(newValue);

}

}
