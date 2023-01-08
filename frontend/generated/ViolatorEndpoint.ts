/**
 * This module is generated from ViolatorEndpoint.java
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 * @see {@link file:///Users/itoekimura/Code/BIRDNEST/hilla/birdnest/src/main/java/com/birdnest/application/endpoints/ViolatorEndpoint.java}
 * @module ViolatorEndpoint
 */

// @ts-ignore
import client from './connect-client.default';
// @ts-ignore
import { EndpointRequestInit, Subscription } from '@hilla/frontend';

import type ViolatorReport from './com/birdnest/application/data/ViolatorReport';

function _getViolatorReport(
 __init?: EndpointRequestInit
): Promise<ViolatorReport>
{
 return client.call('ViolatorEndpoint', 'getViolatorReport', {}, __init);
}
export {
  _getViolatorReport as getViolatorReport,
};
