type Push<T extends readonly unknown[], T1> = [...T, T1];

type Result1 = Push<[1, 2], '3'> // [1, 2, '3']