import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasariComponent } from './basari.component';

describe('BasariComponent', () => {
  let component: BasariComponent;
  let fixture: ComponentFixture<BasariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
