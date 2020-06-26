import {Component} from '@angular/core';
import {GeoJSON} from 'geojson';
import {MapView} from '../../../ng-open-sea-maps-navigator/src/lib/shared/dto/map-view';
import {MapLayer} from '../../../ng-open-sea-maps-navigator/src/lib/shared/dto/map-layer';
import {GeoJsonLayer} from '../../../ng-open-sea-maps-navigator/src/lib/shared/dto/geo-json-layer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private map: MapView;
  private mapLayer: Array<MapLayer>;
  private optionalMapLayer: Array<MapLayer>;
  private geoJsons: Array<GeoJsonLayer>;

  constructor() {
    this.map = new MapView(15, [53.9628, 10.8910]);

    const openStreetMapsCardLayer = new MapLayer(
      'openStreetMapsCard',
      'Map View',
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      20,
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>');

    const openStreetMapsSateliteLayer = new MapLayer(
      'openStreetMapsSatellite',
      'Satellite View',
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      20,
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>');

    const openSeaMarksLayer = new MapLayer(
      'openSeaMapsSeaMarks',
      'Sea Marks',
      'https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png',
      20,
      '&copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors');

    this.mapLayer = new Array<MapLayer>();
    this.mapLayer.push(openStreetMapsSateliteLayer);
    this.mapLayer.push(openStreetMapsCardLayer);

    this.optionalMapLayer = new Array<MapLayer>();
    this.optionalMapLayer.push(openSeaMarksLayer);

    this.addGeoJson();
  }

  private addGeoJson() {

    this.geoJsons = new Array<GeoJsonLayer>();
    const sampleGeoJson: GeoJSON = {
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
    const geoJsonLayer = new GeoJsonLayer('track', 'Track 2020-12-12', sampleGeoJson);
    this.geoJsons.push(geoJsonLayer);
  }
}
