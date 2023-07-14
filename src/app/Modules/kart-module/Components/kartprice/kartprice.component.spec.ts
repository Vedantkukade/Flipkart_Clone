import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KartpriceComponent } from './kartprice.component';

describe('KartpriceComponent', () => {
  let component: KartpriceComponent;
  let fixture: ComponentFixture<KartpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KartpriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KartpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
