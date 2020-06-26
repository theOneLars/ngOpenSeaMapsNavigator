import {Component, Input} from '@angular/core';
import {MapView} from './shared/dto/map-view';
import {MapLayer} from './shared/dto/map-layer';
import {GeoJsonLayer} from './shared/dto/geo-json-layer';

@Component({
  selector: 'lib-ng-open-sea-maps-navigator',
  template: `
    <lib-navigator-main
      [mapview]="mapView"
      [baseLayer]="baseLayer"
      [overlayMaps]="overlayMaps"
      [geoJsons]="geoJsons"
    ></lib-navigator-main>
  `,
  styles: []
})
export class NgOpenSeaMapsNavigatorComponent {

  @Input()
  mapView: MapView;

  @Input()
  baseLayer: Array<MapLayer>;

  @Input()
  overlayMaps: Array<MapLayer>;

  @Input()
  geoJsons: Array<GeoJsonLayer>;

  constructor() {
  }

}
