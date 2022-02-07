import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EployeeComponent } from './eployee.component';

describe('EployeeComponent', () => {
  let component: EployeeComponent;
  let fixture: ComponentFixture<EployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
