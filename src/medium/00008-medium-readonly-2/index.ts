export type MyReadonly2<obj extends Record<keyof any, any>, readonlyKey extends keyof obj = keyof obj> = {
  readonly [key in keyof obj]: obj[key]
} & {
  [key in keyof obj as key & readonlyKey extends never ? key : never]: obj[key]
}
