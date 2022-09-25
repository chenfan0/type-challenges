export type DeepReadonly<T> = T extends (number | string | boolean | Function) ? T : {
  readonly [key in keyof T]: DeepReadonly<T[key]>
}


