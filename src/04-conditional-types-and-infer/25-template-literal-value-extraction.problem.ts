import { Split } from 'ts-toolbelt/out/String/Split'
import { Equal, Expect } from '../helpers/type-utils'

type Names = [
  'Matt Pocock',
  'Jimi Hendrix',
  'Eric Clapton',
  'John Mayer',
  'BB King'
]

// My solution
// type GetSurname<T extends Names[number]> = Split<T, ' '>[1]

// the better solution
type GetSurname<T> = T extends `${infer First} ${infer Last}` ? Last : never

type tests = [
  Expect<Equal<GetSurname<Names[0]>, 'Pocock'>>,
  Expect<Equal<GetSurname<Names[1]>, 'Hendrix'>>,
  Expect<Equal<GetSurname<Names[2]>, 'Clapton'>>,
  Expect<Equal<GetSurname<Names[3]>, 'Mayer'>>,
  Expect<Equal<GetSurname<Names[4]>, 'King'>>
]
