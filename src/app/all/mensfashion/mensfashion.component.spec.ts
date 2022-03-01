import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensfashionComponent } from './mensfashion.component';

describe('MensfashionComponent', () => {
  let component: MensfashionComponent;
  let fixture: ComponentFixture<MensfashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensfashionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensfashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
