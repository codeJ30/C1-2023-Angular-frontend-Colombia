import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerDepositComponent } from './obtener-deposit.component';

describe('ObtenerDepositComponent', () => {
  let component: ObtenerDepositComponent;
  let fixture: ComponentFixture<ObtenerDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerDepositComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObtenerDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
