export type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [key in T[number]] : key
}


type T1<T extends (string | number | symbol)[]> = {
  [key in T[number]]: T[number]
}

type t1 = T1<[2, 3]>