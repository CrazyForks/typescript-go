//// [tests/cases/compiler/invalidOptionalChainFromNewExpression.ts] ////

//// [invalidOptionalChainFromNewExpression.ts]
class A {
    b() {}
}

new A?.b()   // error
new A()?.b() // ok


//// [invalidOptionalChainFromNewExpression.js]
var _a, _b;
class A {
    b() { }
}
(_a = new A) === null || _a === void 0 ? void 0 : _a.b(); // error
(_b = new A()) === null || _b === void 0 ? void 0 : _b.b(); // ok
