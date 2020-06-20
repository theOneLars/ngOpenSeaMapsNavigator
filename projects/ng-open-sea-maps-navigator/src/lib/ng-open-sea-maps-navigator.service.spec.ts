import { TestBed } from '@angular/core/testing';

import { NgOpenSeaMapsNavigatorService } from './ng-open-sea-maps-navigator.service';

describe('NgOpenSeaMapsNavigatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgOpenSeaMapsNavigatorService = TestBed.get(NgOpenSeaMapsNavigatorService);
    expect(service).toBeTruthy();
  });
});
