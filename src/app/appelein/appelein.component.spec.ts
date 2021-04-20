import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppeleinComponent } from './appelein.component';

describe('AppeleinComponent', () => {
  let component: AppeleinComponent;
  let fixture: ComponentFixture<AppeleinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppeleinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppeleinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
