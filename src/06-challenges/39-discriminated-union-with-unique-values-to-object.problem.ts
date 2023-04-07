import { Equal, Expect } from '../helpers/type-utils'

type Route =
  | {
      route: '/'
      search: {
        page: string
        perPage: string
      }
    }
  | { route: '/about' }
  | { route: '/admin' }
  | { route: '/admin/users' }

type check = Route['route']

type RoutesObject = {
  [R in Route as R['route']]: R extends { route: string; search: unknown }
    ? R['search']
    : never
}

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        '/': {
          page: string
          perPage: string
        }
        '/about': never
        '/admin': never
        '/admin/users': never
      }
    >
  >
]
