import { Equal, Expect } from '../helpers/type-utils'

type Fruit = 'apple' | 'banana' | 'orange'

// distribute check
// when conditional check act on generic, they become distribute
type GetAppleOrBanana<T> = T extends 'apple' | 'banana' ? T : never

type AppleOrBanana = GetAppleOrBanana<Fruit>

type tests = [Expect<Equal<AppleOrBanana, 'apple' | 'banana'>>]
