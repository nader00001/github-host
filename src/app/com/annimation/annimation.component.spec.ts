import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnimationComponent } from './annimation.component';

describe('AnnimationComponent', () => {
  let component: AnnimationComponent;
  let fixture: ComponentFixture<AnnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
