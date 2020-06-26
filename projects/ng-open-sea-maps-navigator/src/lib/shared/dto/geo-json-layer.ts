import {GeoJSON} from 'geojson';

export class GeoJsonLayer {

  layerId: string;
  displayName: string;
  geoJson: GeoJSON;


  constructor(layerId: string, displayName: string, geoJson: GeoJSON) {
    this.layerId = layerId;
    this.displayName = displayName;
    this.geoJson = geoJson;
  }
}
