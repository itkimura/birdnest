// @ts-nocheck

import DroneModel from './DroneModel';
import PilotModel from './PilotModel';
import Violator from './Violator';

import {ObjectModel,StringModel,NumberModel,ArrayModel,BooleanModel,Required,ModelValue,_getPropertyModel} from '@hilla/form';

import {Email,Null,NotNull,NotEmpty,NotBlank,AssertTrue,AssertFalse,Negative,NegativeOrZero,Positive,PositiveOrZero,Size,Past,Future,Digits,Min,Max,Pattern,DecimalMin,DecimalMax} from '@hilla/form';

/**
 * This module is generated from com.birdnest.application.data.Violator.
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 * @see {@link file:///Users/itoekimura/Code/BIRDNEST/hilla/birdnest/src/main/java/com/birdnest/application/data/Violator.java}
 */
export default class ViolatorModel<T extends Violator = Violator> extends ObjectModel<T> { 
  declare static createEmptyValue: () => Violator;

  get name(): StringModel {
    return this[_getPropertyModel]('name', StringModel, [true]);
  }

  get email(): StringModel {
    return this[_getPropertyModel]('email', StringModel, [true]);
  }

  get phone(): StringModel {
    return this[_getPropertyModel]('phone', StringModel, [true]);
  }

  get distance(): NumberModel {
    return this[_getPropertyModel]('distance', NumberModel, [false]);
  }

  get pilot(): PilotModel {
    return this[_getPropertyModel]('pilot', PilotModel, [true]);
  }

  get drone(): DroneModel {
    return this[_getPropertyModel]('drone', DroneModel, [true]);
  }

  get time(): StringModel {
    return this[_getPropertyModel]('time', StringModel, [true]);
  }

  get interval(): NumberModel {
    return this[_getPropertyModel]('interval', NumberModel, [false]);
  }

  get zone(): ObjectModel<unknown> {
    return this[_getPropertyModel]('zone', ObjectModel, [true]);
  }
}
