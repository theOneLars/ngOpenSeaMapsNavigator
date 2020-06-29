import {GeoJSON} from 'geojson';

export class PointGeoJson {

  static example: GeoJSON =
    {
      type: 'FeatureCollection',
      features: [
        {
          geometry: {
            type: 'Point',
            coordinates: [
              5.5,
              54.4
            ]
          },
          properties: {},
          type: 'Feature'
        }
      ]
    };

}
