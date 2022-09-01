
type Concat<T1 extends Array<any>, T2 extends Array<any>> = [...T1, ...T2];

type Result = Concat<[1], [2]> // expected to be [1, 2]