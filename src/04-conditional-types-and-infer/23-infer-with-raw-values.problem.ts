import { Equal, Expect } from '../helpers/type-utils'

// My solution
// type GetDataValue<T> = T extends { data: unknown } ? T['data'] : never

// Offical solution
type GetDataValue<T> = T extends { data: infer TInferredData }
  ? TInferredData
  : never

type tests = [
  Expect<Equal<GetDataValue<{ data: 'hello' }>, 'hello'>>,
  Expect<Equal<GetDataValue<{ data: { name: 'hello' } }>, { name: 'hello' }>>,
  Expect<
    Equal<
      GetDataValue<{ data: { name: 'hello'; age: 20 } }>,
      { name: 'hello'; age: 20 }
    >
  >,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValue<string>, never>>
]
