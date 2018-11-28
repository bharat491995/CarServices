import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CarServices } from './CarServices';
import { CarSizesModel } from './car-sizes/car-sizes-model';
import { tick } from '@angular/core/src/render3';
import { isBoolean } from 'util';

// @Injectable({
//   providedIn: 'root'
// })
export class SharedService {

  carServices: CarServices[] = [
    new CarServices('Oil and filter change', 10, 'https://img.icons8.com/ios/1600/car-service.png', false),
    new CarServices('New air filter', 500, 'https://img.icons8.com/ios/1600/car-service.png', false),
    new CarServices('New fuel filter', 5500 , 'https://img.icons8.com/ios/1600/car-service.png', false),
    new CarServices('New spark plugs', 1500 , 'https://img.icons8.com/ios/1600/car-service.png', false),
    new CarServices('Removal ', 1400, 'https://img.icons8.com/ios/1600/car-service.png', false),
    new CarServices('Reset service light', 2300 , 'https://img.icons8.com/ios/1600/car-service.png', false),
    new CarServices('Clutch operation', 1100, 'https://img.icons8.com/ios/1600/car-service.png', false),
  ];

  carSizes: CarSizesModel[] = [
    new CarSizesModel('Hatchback', 500000, 'https://cdn4.iconfinder.com/data/icons/car-silhouettes/1000/sedan-512.png', false),
    new CarSizesModel('Sedan', 100000, 'https://image.flaticon.com/icons/png/512/54/54167.png', false),
    new CarSizesModel('MUV/SUV', 600000, 'https://image.freepik.com/free-icon/eco-energy-car_318-41724.jpg', false),
    new CarSizesModel('Coupe', 1200000, 'https://image.flaticon.com/icons/png/512/57/57737.png', false),
    new CarSizesModel('Convertible', 2500000, 'https://cdn2.iconfinder.com/data/icons/vehicles-5/100/721789-_Convertible-512.png', false),
    new CarSizesModel('Wagon', 5400000,
    'https://png2.kisspng.com/20180403/wfw/kisspng-car-ford-mustang-computer-icons-car-wash-5ac3c4b00e7ec9.5693941315227793120594.png',
     false),
    new CarSizesModel('Van', 4700000, 'http://icons.iconarchive.com/icons/iconsmind/outline/512/Car-2-icon.png', false),
    new CarSizesModel('Jeep', 3200000, 'http://icons-for-free.com/free-icons/png/236/331649.png', false)
    ];


  constructor() { }

  // api for getting list of the car Services
  getAllCarservice() {
    return  this.carServices.slice();
  }

    // api for getting list of the car Sizes
  getAlCarSizes() {
   return this.carSizes.slice();
  }

  selectedSize() {
      return this.carSizes.filter(carSize => carSize.isSelected === true);
    }

  selectedservices() {
    return this.carServices.filter(carService => carService.isSelected === true);
  }

}

