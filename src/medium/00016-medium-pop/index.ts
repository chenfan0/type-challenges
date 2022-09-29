export type Pop<T> = T extends [...infer Pre, unknown] ? [...Pre] : T
