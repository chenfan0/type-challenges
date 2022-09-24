export declare function SimpleVue<D, C, M>(options: {
  data: (this: never) => D
  computed: C
  methods: M
} & ThisType<D & M & { [key in keyof C]: C[key] extends (...args: any[]) => infer ReturnType ? ReturnType : never }> ): any
