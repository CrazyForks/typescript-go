//// [tests/cases/compiler/arrayIndexWithArrayFails.ts] ////

//// [arrayIndexWithArrayFails.ts]
declare const arr1: (string | string[])[];
declare const arr2: number[];
const j = arr2[arr1[0]]; // should error

//// [arrayIndexWithArrayFails.js]
const j = arr2[arr1[0]]; // should error
