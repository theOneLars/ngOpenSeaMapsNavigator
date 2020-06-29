import {GeoJSON} from 'geojson';

export class LineStringGeoJson {

  static example: GeoJSON = {
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
}
