//// [tests/cases/compiler/classImplementsImportedInterface.ts] ////

//// [classImplementsImportedInterface.ts]
module M1 {
    export interface I {
        foo();
    }
}

module M2 {
    import T = M1.I;
    class C implements T {
        foo() {}
    }
}

//// [classImplementsImportedInterface.js]
var M2;
(function (M2) {
    var T = M1.I;
    class C {
        foo() { }
    }
})(M2 || (M2 = {}));
