import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToAl3ebComponent } from './to-al3eb.component';

describe('ToAl3ebComponent', () => {
  let component: ToAl3ebComponent;
  let fixture: ComponentFixture<ToAl3ebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToAl3ebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToAl3ebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
