const foo = (arg1: string, arg2: number): void => {}
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never; 

type a1 = typeof foo;
type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]