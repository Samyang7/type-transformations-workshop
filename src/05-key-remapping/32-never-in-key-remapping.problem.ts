import { Equal, Expect } from '../helpers/type-utils'

interface Example {
  name: string
  age: number
  id: string
  organisationId: string
  groupId: string
}

type OnlyIdKeys<T> = {
  [key in keyof T as Exclude<key, 'age' | 'name'>]: T[key]
}

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string
        organisationId: string
        groupId: string
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
]
