import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nal3bouComponent } from './nal3bou.component';

describe('Nal3bouComponent', () => {
  let component: Nal3bouComponent;
  let fixture: ComponentFixture<Nal3bouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nal3bouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nal3bouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
