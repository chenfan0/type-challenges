// 函数参数逆变，以及联合类型的分布式条件类型
export type UnionToIntersection<T> = (T extends any ? (x: T) => void : never) extends ((x: infer U) => void) 
                                        ? U
                                        : never

