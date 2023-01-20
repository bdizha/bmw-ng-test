import {Geometry} from './geometry.interface';
import {Properties} from './properties.interface';

export interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
  id: string;
}
