// interface Todo {
//     title: string
//     description: string
//     completed: boolean
//   }
  
//   type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
//   const todo: TodoPreview = {
//       title: 'Clean room',
//       completed: false,
//   }

  type MyPick1<T, K extends keyof T> = {

    [P in  K]: T[P]

  }

  // 代码 3
type MyPick2<T, K extends keyof T = keyof T> = {
    [P in K]: T[P]
  }
  interface Todo {
    name: string;
    age: number
  }

  type Test =  keyof Todo;

  const a: Test = 'age';

  const getAttribute = (obj: object, key: string) =>{
    return obj[key as keyof object];
  }
