import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouraccountComponent } from './youraccount.component';

describe('YouraccountComponent', () => {
  let component: YouraccountComponent;
  let fixture: ComponentFixture<YouraccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouraccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YouraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
