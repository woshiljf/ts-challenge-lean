type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [ P in T[number]]: P // 遍历数组。T[number] 取下标
}

const tuple = [1,2] as const;

type test = typeof tuple;

type obj = TupleToObject< typeof tuple>

const test: obj = { 1: 1, 2: 2}


// 1. 返回一个对象
// 遍历array T[number]