import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucomtryComponent } from './glucomtry.component';

describe('GlucomtryComponent', () => {
  let component: GlucomtryComponent;
  let fixture: ComponentFixture<GlucomtryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlucomtryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlucomtryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
