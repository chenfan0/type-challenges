// 触发联合类型的 分布式条件类型
export type MyExclude<T, excludeUnion> = T extends excludeUnion ? never : T

