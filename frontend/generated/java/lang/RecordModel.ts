// @ts-nocheck

import Record from './Record';

import {ObjectModel,StringModel,NumberModel,ArrayModel,BooleanModel,Required,ModelValue,_getPropertyModel} from '@hilla/form';

import {Email,Null,NotNull,NotEmpty,NotBlank,AssertTrue,AssertFalse,Negative,NegativeOrZero,Positive,PositiveOrZero,Size,Past,Future,Digits,Min,Max,Pattern,DecimalMin,DecimalMax} from '@hilla/form';

/**
 * This module is generated from java.lang.Record.
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 */
export default class RecordModel<T extends Record = Record> extends ObjectModel<T> { 
  declare static createEmptyValue: () => Record;
}
