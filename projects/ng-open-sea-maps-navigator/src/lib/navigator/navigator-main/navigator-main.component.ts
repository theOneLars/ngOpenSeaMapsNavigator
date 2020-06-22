import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {MapView} from '../../shared/dto/map-view';
import {MapLayer} from '../../shared/dto/map-layer';

@Component({
  selector: 'lib-navigator-main',
  templateUrl: './navigator-main.component.html',
  styleUrls: ['./navigator-main.component.css']
})
export class NavigatorMainComponent implements OnInit, AfterViewInit {

  @Input()
  mapview: MapView;

  @Input()
  mapLayer: Map<string, MapLayer>;

  private map;
  private layer: Map<string, any>;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {

    if (this.mapview) {

      this.map = L.map('map', {
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
    }
  }
}
