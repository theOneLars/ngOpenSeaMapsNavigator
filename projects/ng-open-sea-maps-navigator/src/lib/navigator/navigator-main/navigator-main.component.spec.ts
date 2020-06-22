import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorMainComponent } from './navigator-main.component';

describe('NavigatorMainComponent', () => {
  let component: NavigatorMainComponent;
  let fixture: ComponentFixture<NavigatorMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatorMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
