type GetPromiseAllType<T extends readonly any[]> = T extends any ? Promise<{
  [K in keyof T]: T[K] extends Promise<infer V> ? V : T[K]
}>
: never

// 此处使用Spread构造一个元祖
export declare function PromiseAll<T extends readonly any[]>(values: readonly [...T]): GetPromiseAllType<T>