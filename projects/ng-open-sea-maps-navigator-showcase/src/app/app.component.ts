import {Component} from '@angular/core';
import {MapView} from '../../../ng-open-sea-maps-navigator/src/lib/shared/dto/map-view';
import {MapLayer} from '../../../ng-open-sea-maps-navigator/src/lib/shared/dto/map-layer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private map: MapView;
  private mapLayer: Map<string, MapLayer>;
  private geoJsons: Map<string, any>;

  constructor() {
    this.map = new MapView(15, [53.9628, 10.8910]);

    const openStreetMapsCardLayer = new MapLayer(
      'openStreetMapsCard',
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      20,
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>');

    const openStreetMapsSateliteLayer = new MapLayer(
      'openStreetMapsSatellite',
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      20,
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>');

    const openSeaMarksLayer = new MapLayer(
      'openSeaMapsSeaMarks',
      'https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png',
      20,
      '&copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors');

    this.mapLayer = new Map<string, MapLayer>();
    // this.mapLayer.set(openStreetMapsSateliteLayer.layerId, openStreetMapsSateliteLayer);
    this.mapLayer.set(openStreetMapsCardLayer.layerId, openStreetMapsCardLayer);
    this.mapLayer.set(openSeaMarksLayer.layerId, openSeaMarksLayer);

    this.geoJsons = new Map<string, any>();

    const sampleGeoJson = {
      type: 'FeatureCollection',
      features:
        [
          {
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: [
                [10.881289, 53.957773],
                [10.878766, 53.957319],
                [10.878345, 53.958003],
                [10.897765, 53.961912],
                [11.108725, 54.048871],
                [11.428183, 53.947263],
                [11.438593, 53.960522],
                [11.436651, 53.988079],
                [11.445287, 53.996176]
              ]
            },
            properties: {
              Name: 'Track Points',
              popupContent: 'This is the way to the east'
            }
          }
        ]
    };

    this.geoJsons.set('firstDraft', sampleGeoJson.features);
  }


}
