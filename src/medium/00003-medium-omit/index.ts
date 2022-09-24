export type MyOmit<obj extends Record<keyof any, any>, omit extends keyof obj> = {
  [key in keyof obj as key extends omit ? never : key]: obj[key]
}
