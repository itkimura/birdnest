/**
 * This module is generated from HelloReactEndpoint.java
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 * @see {@link file:///Users/itoekimura/Code/BIRDNEST/hilla/birdnest/src/main/java/com/birdnest/application/endpoints/helloreact/HelloReactEndpoint.java}
 * @module HelloReactEndpoint
 */

// @ts-ignore
import client from './connect-client.default';
// @ts-ignore
import { EndpointRequestInit, Subscription } from '@hilla/frontend';


function _sayHello(
 name: string,
 __init?: EndpointRequestInit
): Promise<string>
{
 return client.call('HelloReactEndpoint', 'sayHello', {name}, __init);
}
export {
  _sayHello as sayHello,
};