//// [tests/cases/compiler/interfaceWithMultipleDeclarations.ts] ////

//// [interfaceWithMultipleDeclarations.ts]
interface I1<V> {
}
interface I1<S> { // Name mismatch
}
interface I1<T, U extends T> { // Length mismatch
}
interface I1<V extends string> { // constraint present
}
interface I1<V, X extends V> { // Length mismatch
}
interface I1 { // Length mismatch
}

interface I2<T extends string> {
}
interface I2<T extends () => string> { // constraint mismatch
}
interface I2<T> { // constraint absent
}
interface I2<U> { // name mismatch
}
interface I2<X, Y> { // length mismatch
}
interface I2 { // length mismatch
}

interface I3 {
}
interface I3<T> { // length mismatch
}

class Foo<T> {
}
interface I4<T extends Foo<T>> {
}
interface I4<T extends Foo<T>> { // Should not be error
}

//// [interfaceWithMultipleDeclarations.js]
class Foo {
}
