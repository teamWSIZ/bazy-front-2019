import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerbrowserComponent } from './customerbrowser.component';

describe('CustomerbrowserComponent', () => {
  let component: CustomerbrowserComponent;
  let fixture: ComponentFixture<CustomerbrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerbrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerbrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
