// @ts-nocheck

import ViolatorModel from './ViolatorModel';
import RecordModel from '../../../../java/lang/RecordModel';
import ViolatorReport from './ViolatorReport';

import {ObjectModel,StringModel,NumberModel,ArrayModel,BooleanModel,Required,ModelValue,_getPropertyModel} from '@hilla/form';

import {Email,Null,NotNull,NotEmpty,NotBlank,AssertTrue,AssertFalse,Negative,NegativeOrZero,Positive,PositiveOrZero,Size,Past,Future,Digits,Min,Max,Pattern,DecimalMin,DecimalMax} from '@hilla/form';

/**
 * This module is generated from com.birdnest.application.data.ViolatorReport.
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 */
export default class ViolatorReportModel<T extends ViolatorReport = ViolatorReport> extends RecordModel<T> {
  declare static createEmptyValue: () => ViolatorReport;

  get violators(): ArrayModel<ModelValue<ViolatorModel>, ViolatorModel> {
    return this[_getPropertyModel]('violators', ArrayModel, [true, ViolatorModel, [true]]);
  }

  get lastUpdated(): StringModel {
    return this[_getPropertyModel]('lastUpdated', StringModel, [false]);
  }

  get monitoringStartDate(): StringModel {
    return this[_getPropertyModel]('monitoringStartDate', StringModel, [false]);
  }
}
