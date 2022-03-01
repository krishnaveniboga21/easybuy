import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpsettingsComponent } from './helpsettings.component';

describe('HelpsettingsComponent', () => {
  let component: HelpsettingsComponent;
  let fixture: ComponentFixture<HelpsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpsettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
