import { Equal, Expect } from '../helpers/type-utils'

const parser1 = {
  parse: () => 1,
}

const parser2 = () => '123'

const parser3 = {
  extract: () => true,
}

type check = typeof parser2
type check2 = typeof parser1
type check3 = typeof parser3

type GetParserResult<T> = T extends
  | { parse: () => infer U }
  | { extract: () => infer U }
  | (() => infer U)
  ? U
  : never

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>
]
