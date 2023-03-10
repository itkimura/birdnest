import Drone from './Drone';
import Pilot from './Pilot';

/**
 * This module is generated from com.birdnest.application.data.Violator.
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 * @see {@link file:///Users/itoekimura/Code/BIRDNEST/hilla/test/src/main/java/com/birdnest/application/data/Violator.java}
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
  zone?: any;
}
