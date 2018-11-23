import { Injectable } from '@angular/core';

@Injectable()
export class CarServices {
    public name: string;
    public Price: number;
    public imagePath: string;
    public isSelected: boolean;
constructor(name: string, price: number, imagePath: string, isSelected: boolean) {
    this.name = name;
    this.Price = price;
    this.imagePath = imagePath;
    this.isSelected = isSelected;
}

}
