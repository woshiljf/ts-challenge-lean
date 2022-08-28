type MyAwaited<T> = any
type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string