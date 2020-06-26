export class MapLayer {

  layerId: string;
  displayName: string;
  tilesServerUrl: string;
  maxZoom: number;
  attribution: string;

  constructor(layerId: string, displayName: string, tilesServerUrl: string, maxZoom: number, attribution: string) {
    this.layerId = layerId;
    this.displayName = displayName;
    this.tilesServerUrl = tilesServerUrl;
    this.maxZoom = maxZoom;
    this.attribution = attribution;
  }


}
