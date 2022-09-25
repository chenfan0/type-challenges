# TupleToObject
- T[number]
```ts
// T[number]就相当于T[0], T[1]...
type T1<T extends (string | number | symbol)[]> = {
  [key in T[number]]: T[number]
}
/*
type t1 = {
    2: 2 | 3;
    3: 2 | 3;
}
**/
type t1 = T1<[2, 3]>  
```
