type MyAwaited<T extends Promise<any>> = T extends Promise<infer X> ? X extends Promise<unknown> ? MyAwaited<X> : X : never;

// 这里设计到两个新的难点
/**
 * 1. Promise<unknown> 设置未知变量
 * 2. infer 关键字可设置变量。(只能在条件类型中使用)
 * 3. 类型递归调用。
 * 4. 返回一个T
 * 
 * 
 */