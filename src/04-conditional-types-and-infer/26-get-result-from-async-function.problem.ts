import { Equal, Expect } from '../helpers/type-utils'

const getServerSideProps = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const json: { title: string } = await data.json()
  return {
    props: {
      json,
    },
  }
}

// this is too specified
// type InferPropsFromServerSideFunction<T extends typeof getServerSideProps> =
//   Awaited<ReturnType<T>>['props']

// this is a better solution
type InferPropsFromServerSideFunction<T> = T extends () => Promise<{
  props: infer P
}>
  ? P
  : never

type tests = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction<typeof getServerSideProps>,
      { json: { title: string } }
    >
  >
]
