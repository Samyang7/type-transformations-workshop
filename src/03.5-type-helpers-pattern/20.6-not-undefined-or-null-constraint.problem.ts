// any non-null and non-undefined value is assignable to empty type {}
// accpet null and not undefined, you can use {} | null
export type Maybe<T extends {}> = T | null | undefined

type tests = [
  // @ts-expect-error
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<''>
]
