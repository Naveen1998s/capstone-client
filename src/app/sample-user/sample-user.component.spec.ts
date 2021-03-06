import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleUserComponent } from './sample-user.component';

describe('SampleUserComponent', () => {
  let component: SampleUserComponent;
  let fixture: ComponentFixture<SampleUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
