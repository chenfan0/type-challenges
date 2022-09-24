// https://github.com/type-challenges/type-challenges/tree/main/questions/00004-easy-pick
export type MyPick<obj extends Record<keyof any, any>, pick extends keyof obj> = {
  [key in keyof obj as key & pick extends never ? never : key]: obj[key]
} 