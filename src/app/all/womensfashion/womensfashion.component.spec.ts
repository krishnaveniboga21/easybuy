import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensfashionComponent } from './womensfashion.component';

describe('WomensfashionComponent', () => {
  let component: WomensfashionComponent;
  let fixture: ComponentFixture<WomensfashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensfashionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensfashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
