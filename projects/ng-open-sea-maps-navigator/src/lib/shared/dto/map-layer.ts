export class MapLayer {

  layerId: string;
  tilesServerUrl: string;
  maxZoom: number;
  attribution: string;

  constructor(layerId: string, tilesServerUrl: string, maxZoom: number, attribution: string) {
    this.layerId = layerId;
    this.tilesServerUrl = tilesServerUrl;
    this.maxZoom = maxZoom;
    this.attribution = attribution;
  }


}
