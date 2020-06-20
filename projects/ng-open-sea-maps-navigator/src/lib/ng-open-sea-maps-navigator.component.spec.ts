import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOpenSeaMapsNavigatorComponent } from './ng-open-sea-maps-navigator.component';

describe('NgOpenSeaMapsNavigatorComponent', () => {
  let component: NgOpenSeaMapsNavigatorComponent;
  let fixture: ComponentFixture<NgOpenSeaMapsNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOpenSeaMapsNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOpenSeaMapsNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
