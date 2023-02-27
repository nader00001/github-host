import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sam3iComponent } from './sam3i.component';

describe('Sam3iComponent', () => {
  let component: Sam3iComponent;
  let fixture: ComponentFixture<Sam3iComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sam3iComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sam3iComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
