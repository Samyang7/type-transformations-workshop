type Role = '/users' | '/admin' | '/'

type Route = `${Role}` | `${Role}${Role}`

// another easy solution
// type Route = `/${string}`

export const goToRoute = (route: Route) => {}

// Should succeed:

goToRoute('/users')
goToRoute('/')
goToRoute('/admin/users')

// Should error:

// @ts-expect-error
goToRoute('users/1')
// @ts-expect-error
goToRoute('http://facebook.com')
