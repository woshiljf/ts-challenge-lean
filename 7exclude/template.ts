type MyExclude<T, U> = T extends U ? never : T;


type test1 = MyExclude<'a' | 'b' |'c', 'a' | 'b'>;


type Extract1<T, U> = T extends U ? T : never
