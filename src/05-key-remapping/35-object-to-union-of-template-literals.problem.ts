import { Equal, Expect } from '../helpers/type-utils'

interface FruitMap {
  apple: 'red'
  banana: 'yellow'
  orange: 'orange'
}

// my solution
// type TransformedFruit = {
//   [key in keyof FruitMap]: `${key}:${FruitMap[key]}`
// }[keyof FruitMap]

// offical solution
type TransformedFruit = {
  [F in keyof FruitMap]: `${F}:${FruitMap[F]}`
}[keyof FruitMap]

type tests = [
  Expect<
    Equal<TransformedFruit, 'apple:red' | 'banana:yellow' | 'orange:orange'>
  >
]
