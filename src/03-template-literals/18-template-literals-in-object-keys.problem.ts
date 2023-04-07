import { ObjectOf } from 'ts-toolbelt/out/List/ObjectOf'
import { Equal, Expect } from '../helpers/type-utils'
import { Join } from 'ts-toolbelt/out/String/Join'

type TemplateLiteralKey = `${'user' | 'post' | 'comment'}${'Id' | 'Name'}`

type ObjectOfKeys = Record<TemplateLiteralKey, string>

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        userId: string
        userName: string
        postId: string
        postName: string
        commentId: string
        commentName: string
      }
    >
  >
]
