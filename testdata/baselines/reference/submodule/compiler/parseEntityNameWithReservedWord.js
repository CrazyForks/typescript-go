//// [tests/cases/compiler/parseEntityNameWithReservedWord.ts] ////

//// [parseEntityNameWithReservedWord.ts]
enum Bool { false }
const x: Bool.false = Bool.false;


//// [parseEntityNameWithReservedWord.js]
var Bool;
(function (Bool) {
    Bool[Bool["false"] = 0] = "false";
})(Bool || (Bool = {}));
const x = Bool.false;
