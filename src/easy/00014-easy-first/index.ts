export type First<T extends any[]> = T extends [infer First, ...unknown[]] ? First : never
