import Violator from './Violator';
import Record from '../../../../java/lang/Record';

/**
 * This module is generated from com.birdnest.application.data.ViolatorReport.
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 */
export default interface ViolatorReport extends Record {
  violators?: Array<Violator | undefined>;
  lastUpdated: string;
}
