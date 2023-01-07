// @ts-nocheck

import RecordModel from '../../../../java/lang/RecordModel';
import Pilot from './Pilot';

import {ObjectModel,StringModel,NumberModel,ArrayModel,BooleanModel,Required,ModelValue,_getPropertyModel} from '@hilla/form';

import {Email,Null,NotNull,NotEmpty,NotBlank,AssertTrue,AssertFalse,Negative,NegativeOrZero,Positive,PositiveOrZero,Size,Past,Future,Digits,Min,Max,Pattern,DecimalMin,DecimalMax} from '@hilla/form';

/**
 * This module is generated from com.birdnest.application.Data.Pilot.
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 */
export default class PilotModel<T extends Pilot = Pilot> extends RecordModel<T> {
  declare static createEmptyValue: () => Pilot;

  get pilotId(): StringModel {
    return this[_getPropertyModel]('pilotId', StringModel, [true]);
  }

  get firstName(): StringModel {
    return this[_getPropertyModel]('firstName', StringModel, [true]);
  }

  get lastName(): StringModel {
    return this[_getPropertyModel]('lastName', StringModel, [true]);
  }

  get phoneNumber(): StringModel {
    return this[_getPropertyModel]('phoneNumber', StringModel, [true]);
  }

  get createdDt(): StringModel {
    return this[_getPropertyModel]('createdDt', StringModel, [true]);
  }

  get email(): StringModel {
    return this[_getPropertyModel]('email', StringModel, [true]);
  }
}
