export type Last<T extends any[]> = T extends [...unknown[], infer Last] ? Last : never
