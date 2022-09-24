export type MyReadonly<obj extends Record<keyof any, any>> = {
  readonly [key in keyof obj]: obj[key]
}
