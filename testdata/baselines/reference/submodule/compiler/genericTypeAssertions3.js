//// [tests/cases/compiler/genericTypeAssertions3.ts] ////

//// [genericTypeAssertions3.ts]
var r = < <T>(x: T) => T > ((x) => { return null; }); // bug was 'could not find dotted symbol T' on x's annotation in the type assertion instead of no error
var s = < <T>(x: T) => T > ((x: any) => { return null; }); // no error


//// [genericTypeAssertions3.js]
var r = ((x) => { return null; }); // bug was 'could not find dotted symbol T' on x's annotation in the type assertion instead of no error
var s = ((x) => { return null; }); // no error
