//// [tests/cases/conformance/es2021/logicalAssignment/logicalAssignment2.ts] ////

//// [logicalAssignment2.ts]
interface A {
    foo: {
        bar(): {
            baz: 0 | 1 | 42 | undefined | ''
        }
        baz: 0 | 1 | 42 | undefined | ''
    }
    baz: 0 | 1 | 42 | undefined | ''
}

declare const result: A
declare const a: A
declare const b: A
declare const c: A

a.baz &&= result.baz
b.baz ||= result.baz
c.baz ??= result.baz

a.foo["baz"] &&= result.foo.baz
b.foo["baz"] ||= result.foo.baz
c.foo["baz"] ??= result.foo.baz

a.foo.bar().baz &&= result.foo.bar().baz
b.foo.bar().baz ||= result.foo.bar().baz
c.foo.bar().baz ??= result.foo.bar().baz



//// [logicalAssignment2.js]
a.baz &&= result.baz;
b.baz ||= result.baz;
c.baz ??= result.baz;
a.foo["baz"] &&= result.foo.baz;
b.foo["baz"] ||= result.foo.baz;
c.foo["baz"] ??= result.foo.baz;
a.foo.bar().baz &&= result.foo.bar().baz;
b.foo.bar().baz ||= result.foo.bar().baz;
c.foo.bar().baz ??= result.foo.bar().baz;
