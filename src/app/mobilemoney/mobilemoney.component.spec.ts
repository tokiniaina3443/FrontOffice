import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilemoneyComponent } from './mobilemoney.component';

describe('MobilemoneyComponent', () => {
  let component: MobilemoneyComponent;
  let fixture: ComponentFixture<MobilemoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilemoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilemoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
