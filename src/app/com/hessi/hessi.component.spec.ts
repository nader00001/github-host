import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HessiComponent } from './hessi.component';

describe('HessiComponent', () => {
  let component: HessiComponent;
  let fixture: ComponentFixture<HessiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HessiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HessiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
