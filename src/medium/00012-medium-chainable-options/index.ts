export type Chainable<T = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<{[key in (keyof T | K)]: key extends keyof Omit<T, K> ? T[key] : V}>;
  get(): T;
}