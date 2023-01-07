import Record from '../../../../java/lang/Record';

/**
 * This module is generated from com.birdnest.application.Data.Drone.
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 */
export default interface Drone extends Record {
  serialNumber?: string;
  model?: string;
  manufacturer?: string;
  mac?: string;
  ipv4?: string;
  ipv6?: string;
  firmware?: string;
  positionY: number;
  positionX: number;
  altitude: number;
}
