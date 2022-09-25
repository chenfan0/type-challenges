# DeepReadonly
- Record<keyof any, any> 和 Record<keyof any, unknown>
```ts
// any
type T1<T> = T extends Record<keyof any, any> ? true : false
type t1 = T1<() => void> // true 
type t2 = T1<[1, 2, 3]> // true
// unknown
type _T1<T> = T extends Record<keyof any, unknown> ? true : false
type _t1 = _T1<() => void> // false
type _t2 = _T1<[1, 2, 3]> // false

```
```ts
type T1<T> = {
  [key in keyof T]: T[key]
}
type T2<T> = {
  readonly [key in keyof T]: T[key]
}
type T3<T> = {
  [key in keyof T]?: T[key]
}

type t1 = T1<[1, 2, 3]> // [1, 2, 3]
type t2 = T2<[1, 2, 3]> // readonly [1, 2, 3]
type t3 = T3<[1, 2, 3]> // [(1 | undefined)?, (2 | undefined)?, (3 | undefined)?]
type t4 = T1<() => void> // {}
type t5 = T2<() => void> // {}
type t6 = T3<() => void> // {}
type t7 = T1<1> // 1
```