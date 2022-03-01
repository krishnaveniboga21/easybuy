import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysgamesComponent } from './toysgames.component';

describe('ToysgamesComponent', () => {
  let component: ToysgamesComponent;
  let fixture: ComponentFixture<ToysgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysgamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
