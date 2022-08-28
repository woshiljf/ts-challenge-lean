type Length<T extends readonly any[]> = T['length'];

type l = Length<[1,2,3]>;