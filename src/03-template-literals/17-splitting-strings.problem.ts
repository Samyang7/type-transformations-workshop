// Might come in handy!
// import { S } from "ts-toolbelt";
// https://millsp.github.io/ts-toolbelt/modules/string_split.html

import { Split } from 'ts-toolbelt/out/String/Split'
import { Equal, Expect } from '../helpers/type-utils'

type Path = 'Users/John/Documents/notes.txt'

// using another external ts-tool library
type SplitPath = Split<Path, '/'>

type tests = [
  Expect<Equal<SplitPath, ['Users', 'John', 'Documents', 'notes.txt']>>
]
