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

import type Violator from './com/birdnest/application/Data/Violator';

function _getViolators(
 __init?: EndpointRequestInit
): Promise<Array<Violator | undefined>>
{
 return client.call('ViolatorEndpoint', 'getViolators', {}, __init);
}
export {
  _getViolators as getViolators,
};
