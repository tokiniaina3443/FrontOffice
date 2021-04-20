import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppeleoutComponent } from './appeleout.component';

describe('AppeleoutComponent', () => {
  let component: AppeleoutComponent;
  let fixture: ComponentFixture<AppeleoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppeleoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppeleoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
