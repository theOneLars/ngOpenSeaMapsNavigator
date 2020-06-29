import {Component} from '@angular/core';
import {MapView} from '../../../ng-open-sea-maps-navigator/src/lib/shared/dto/map-view';
import {MapLayer} from '../../../ng-open-sea-maps-navigator/src/lib/shared/dto/map-layer';
import {GeoJsonLayer} from '../../../ng-open-sea-maps-navigator/src/lib/shared/dto/geo-json-layer';
import {MultiPointGeoJson} from './data/multi-point-geo-json';
import {LineStringGeoJson} from './data/line-string-geo-json';
import {PointGeoJson} from './data/point-geo-json';

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

    const geoJsonLayer = new GeoJsonLayer('track', 'Track 2020-12-12', LineStringGeoJson.example);
    const multiPointLayer = new GeoJsonLayer('multi-point', 'Multi Point', MultiPointGeoJson.example);
    const singlePointLayer = new GeoJsonLayer('single-point', 'Single Point', PointGeoJson.example);
    this.geoJsons.push(geoJsonLayer);
    this.geoJsons.push(multiPointLayer);
    this.geoJsons.push(singlePointLayer);
  }


}
