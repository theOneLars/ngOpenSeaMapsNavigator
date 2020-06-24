import {Component, Input, OnInit} from '@angular/core';
import {MapView} from './shared/dto/map-view';
import {MapLayer} from './shared/dto/map-layer';

@Component({
  selector: 'lib-ng-open-sea-maps-navigator',
  template: `
    <lib-navigator-main
      [mapview]="mapView"
      [mapLayer]="mapLayer"
      [geoJsons]="geoJsons"
    ></lib-navigator-main>
  `,
  styles: []
})
export class NgOpenSeaMapsNavigatorComponent implements OnInit {

  @Input()
  mapView: MapView;

  @Input()
  mapLayer: Map<string, MapLayer>;

  @Input()
  geoJsons: Map<string, any>;

  constructor() {
  }

  ngOnInit() {
  }

}
