import { Equal, Expect } from '../helpers/type-utils'

interface Values {
  email: string
  firstName: string
  lastName: string
}

// my solution
// type test = {
//   [K in keyof Values]: [K, Values[K]]
// }

// type ValuesAsUnionOfTuples = test[keyof test]

// offical solution
type ValuesAsUnionOfTuples = {
  [V in keyof Values]: [V, Values[V]]
}[keyof Values]

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ['email', string] | ['firstName', string] | ['lastName', string]
    >
  >
]
