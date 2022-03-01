import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbydeptComponent } from './shopbydept.component';

describe('ShopbydeptComponent', () => {
  let component: ShopbydeptComponent;
  let fixture: ComponentFixture<ShopbydeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopbydeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopbydeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
