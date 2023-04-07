import { Equal, Expect } from '../helpers/type-utils'

enum Ttype {
  'click',
  'focus',
  'keydown',
}

export type Event =
  | {
      type: 'click'
      event: MouseEvent
    }
  | {
      type: 'focus'
      event: FocusEvent
    }
  | {
      type: 'keydown'
      event: KeyboardEvent
    }

type ClickEvent = Extract<Event, { type: 'click' }>

type tests = [Expect<Equal<ClickEvent, { type: 'click'; event: MouseEvent }>>]
