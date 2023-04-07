import { Equal, Expect } from '../helpers/type-utils'

type Fruit =
  | {
      name: 'apple'
      color: 'red'
    }
  | {
      name: 'banana'
      color: 'yellow'
    }
  | {
      name: 'orange'
      color: 'orange'
    }

// My solution
// type TransformedFruit = {
//   [R in Fruit as R['name']]: `${R['name']}:${R['color']}`
// }[Fruit['name']]

// offical solution
type TransformedFruit = {
  [R in Fruit as R['name']]: `${R['name']}:${R['color']}`
}[Fruit['name']]

type tests = [
  Expect<
    Equal<TransformedFruit, 'apple:red' | 'banana:yellow' | 'orange:orange'>
  >
]
