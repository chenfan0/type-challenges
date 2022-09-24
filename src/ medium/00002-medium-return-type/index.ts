// https://github.com/type-challenges/type-challenges/tree/main/questions/00002-medium-return-type

export type MyReturnType<fn extends Function> = fn extends (...args: any[]) => infer returnType ? returnType : never
