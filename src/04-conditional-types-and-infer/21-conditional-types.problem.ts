import { T } from 'ts-toolbelt'
import { Equal, Expect } from '../helpers/type-utils'
type Hello = 'hello'
type GoodBye = 'goodbye'

// My solution
// type YouSayGoodbyeAndISayHello<T> = T extends Hello ? GoodBye : Hello

type YouSayGoodbyeAndISayHello<T> = T extends 'hello' ? 'goodbye' : 'hello'

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<'hello'>, 'goodbye'>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'goodbye'>, 'hello'>>
]
