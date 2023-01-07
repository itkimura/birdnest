import Drone from './Drone';
import Pilot from './Pilot';

/**
 * This module is generated from com.birdnest.application.Data.Violator.
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 * @see {@link file:///Users/itoekimura/Code/BIRDNEST/hilla/birdnest/src/main/java/com/birdnest/application/Data/Violator.java}
 */
export default interface Violator {
  name?: string;
  email?: string;
  phone?: string;
  distance: number;
  pilot?: Pilot;
  drone?: Drone;
  time?: string;
  interval: number;
  ago: number;
  zone?: any;
}
