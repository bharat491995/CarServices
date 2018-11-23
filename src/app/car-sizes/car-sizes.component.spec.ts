import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSizesComponent } from './car-sizes.component';

describe('CarSizesComponent', () => {
  let component: CarSizesComponent;
  let fixture: ComponentFixture<CarSizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
