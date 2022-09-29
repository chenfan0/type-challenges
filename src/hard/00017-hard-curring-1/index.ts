type Curry<F> = F extends (first: infer First, ...rest: infer Rest) => infer Return 
                      ? Rest extends []
                        ? (x: First) => Return 
                        : (x: First) => Curry<(...args: Rest) => Return>
                      : never

export declare function Currying<F>(fn: F): Curry<F>

const curried1 = Currying((a: string, b: number, c: boolean) => true)

type a = typeof curried1