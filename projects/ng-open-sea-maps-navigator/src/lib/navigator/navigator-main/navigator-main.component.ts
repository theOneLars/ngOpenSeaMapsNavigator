import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as L from 'leaflet';
import {MapView} from '../../shared/dto/map-view';
import {MapLayer} from '../../shared/dto/map-layer';
import {GeoJsonLayer} from '../../shared/dto/geo-json-layer';

@Component({
  selector: 'lib-navigator-main',
  templateUrl: './navigator-main.component.html',
  styleUrls: ['./navigator-main.component.css']
})
export class NavigatorMainComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  static geoJSonStyle = {
    color: 'red',
    weight: 2,
    opacity: 1
  };

  static geoJsonMarkerOptions = {
    radius: 2,
    fillColor: '#33ccff',
    color: '#000',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  };

  @ViewChild('map', {static: true})
  mapElement: ElementRef;

  @Input()
  mapview: MapView;

  @Input()
  baseLayer: Array<MapLayer>;

  @Input()
  overlayMaps: Array<MapLayer>;

  @Input()
  geoJsons: Array<GeoJsonLayer>;

  private map;
  private baseMaps: Map<string, any>;
  private optionalMapLayer: Map<string, any>;
  private geoJsoLayer: Map<string, any>;

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

      const layerControl = L.control.layers().addTo(this.map);

      if (this.baseLayer) {
        this.baseMaps = new Map<string, any>();

        this.baseLayer.forEach((value) => {
            const layerToAdd = L.tileLayer(value.tilesServerUrl, {
              maxZoom: value.maxZoom,
              attribution: value.attribution
            });
            layerToAdd.addTo(this.map);
            console.log(L.control.layers);
            layerControl.addBaseLayer(layerToAdd, value.displayName);
            this.baseMaps.set(value.layerId, layerToAdd);
          }
        );
      }

      if (this.overlayMaps) {
        this.optionalMapLayer = new Map<string, any>();
        this.overlayMaps.forEach((value) => {
            const layerToAdd = L.tileLayer(value.tilesServerUrl, {
              maxZoom: value.maxZoom,
              attribution: value.attribution
            });
            layerToAdd.addTo(this.map);
            layerControl.addOverlay(layerToAdd, value.displayName);
            this.optionalMapLayer.set(value.layerId, layerToAdd);
          }
        );
      }

      if (this.geoJsons) {
        this.geoJsoLayer = new Map<string, any>();
        this.geoJsons.forEach((value) => {

          const geoJsonLayerToAdd = L.geoJSON(value.geoJson, {
            style(geoJsonFeature) {
              if (geoJsonFeature.geometry.type === 'MultiPoint') {
                return NavigatorMainComponent.geoJsonMarkerOptions;
              }
              return NavigatorMainComponent.geoJSonStyle;
            },
            pointToLayer(feature, latlng) {
              return L.circleMarker(latlng, NavigatorMainComponent.geoJsonMarkerOptions);
            }
          });

          // const geoJsonLayerToAdd = L.geoJSON(value.geoJson, this.geoJSonStyle);
          geoJsonLayerToAdd.addTo(this.map);
          layerControl.addOverlay(geoJsonLayerToAdd, value.displayName);
          this.geoJsoLayer.set(value.layerId, geoJsonLayerToAdd);
        });
      }
    }
  }
}
