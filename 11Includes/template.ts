
type IsEqual<TValue, TOther> = (<T>() => T extends TValue ? true : false) extends <T>() => T extends TOther ? true : false ? true : false

type Includes<TArray extends readonly unknown[], TChoice> = TArray extends [infer TFirst, ...infer TRest] ? IsEqual<TFirst, TChoice> extends true ? true : Includes<TRest, TChoice> : false


// type Includes<T12 extends string[], T2 extends string> = T2 extends T12 ? true : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'> // expected to be `false`



// 递归的实现方式

function Myincludes(array, key) {


    function _F(array, key) {

        if(array.length === 0) return false

        const [f, ...rest] = array;

        if(f === key) {
            return true;
        }else {
           return  _F(rest,key);
        }

    }

    return _F(array, key);

}