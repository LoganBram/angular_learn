import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrweatherComponent } from './currweather.component';

describe('CurrweatherComponent', () => {
  let component: CurrweatherComponent;
  let fixture: ComponentFixture<CurrweatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrweatherComponent]
    });
    fixture = TestBed.createComponent(CurrweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
