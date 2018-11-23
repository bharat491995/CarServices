import { Injectable } from '@angular/core';

@Injectable()
export class CarSizesModel {
     carSize: string;
     Price: number;
     imagePath: string;
     isSelected: boolean;

     constructor(size: string, amount: number, image: string, selected: boolean ) {
        this.carSize = size;
        this.Price = amount;
        this.imagePath = image;
        this.isSelected = selected;
    }
}


