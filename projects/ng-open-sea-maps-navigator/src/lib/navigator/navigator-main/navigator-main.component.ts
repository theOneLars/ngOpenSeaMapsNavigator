import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as L from 'leaflet';
import {MapView} from '../../shared/dto/map-view';
import {MapLayer} from '../../shared/dto/map-layer';

@Component({
  selector: 'lib-navigator-main',
  templateUrl: './navigator-main.component.html',
  styleUrls: ['./navigator-main.component.css']
})
export class NavigatorMainComponent implements OnInit, AfterViewInit {

  @ViewChild('map', {static: true})
  mapElement: ElementRef;

  @Input()
  mapview: MapView;

  @Input()
  mapLayer: Map<string, MapLayer>;

  @Input()
  geoJsons: Map<string, any>;

  private map;
  private layer: Map<string, any>;
  private geoJsoLayer: Map<string, any>;

  private geoJSonStyle = {
    color: 'red',
    weight: 2,
    opacity: 1
  };

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {

    if (this.mapview) {
      this.map = L.map(this.mapElement.nativeElement, {
        center: this.mapview.center,
        zoom: this.mapview.zoom
      });

      if (this.mapLayer) {
        this.layer = new Map<string, any>();
        this.mapLayer.forEach((value, key) => {
            const layerToAdd = L.tileLayer(value.tilesServerUrl, {
              maxZoom: value.maxZoom,
              attribution: value.attribution
            });
            layerToAdd.addTo(this.map);
            this.layer.set(key, layerToAdd);
          }
        );
      }

      if (this.geoJsons) {
        this.geoJsoLayer = new Map<string, any>();
        this.geoJsons.forEach((value, key) => {

          const geoJsonLayerToAdd = L.geoJSON(value, this.geoJSonStyle);
          geoJsonLayerToAdd.addTo(this.map);

          this.geoJsoLayer.set(key, geoJsonLayerToAdd);
        });
      }
    }
  }
}
