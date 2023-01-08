// @ts-nocheck

import RecordModel from '../../../../java/lang/RecordModel';
import Drone from './Drone';

import {ObjectModel,StringModel,NumberModel,ArrayModel,BooleanModel,Required,ModelValue,_getPropertyModel} from '@hilla/form';

import {Email,Null,NotNull,NotEmpty,NotBlank,AssertTrue,AssertFalse,Negative,NegativeOrZero,Positive,PositiveOrZero,Size,Past,Future,Digits,Min,Max,Pattern,DecimalMin,DecimalMax} from '@hilla/form';

/**
 * This module is generated from com.birdnest.application.data.Drone.
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 */
export default class DroneModel<T extends Drone = Drone> extends RecordModel<T> {
  declare static createEmptyValue: () => Drone;

  get serialNumber(): StringModel {
    return this[_getPropertyModel]('serialNumber', StringModel, [true]);
  }

  get model(): StringModel {
    return this[_getPropertyModel]('model', StringModel, [true]);
  }

  get manufacturer(): StringModel {
    return this[_getPropertyModel]('manufacturer', StringModel, [true]);
  }

  get mac(): StringModel {
    return this[_getPropertyModel]('mac', StringModel, [true]);
  }

  get ipv4(): StringModel {
    return this[_getPropertyModel]('ipv4', StringModel, [true]);
  }

  get ipv6(): StringModel {
    return this[_getPropertyModel]('ipv6', StringModel, [true]);
  }

  get firmware(): StringModel {
    return this[_getPropertyModel]('firmware', StringModel, [true]);
  }

  get positionY(): NumberModel {
    return this[_getPropertyModel]('positionY', NumberModel, [false]);
  }

  get positionX(): NumberModel {
    return this[_getPropertyModel]('positionX', NumberModel, [false]);
  }

  get altitude(): NumberModel {
    return this[_getPropertyModel]('altitude', NumberModel, [false]);
  }
}
