import "@effect-ts/node/Modules/Traced"

import * as T from "@effect-ts/core/Effect"
import { pipe } from "@effect-ts/core/Function"
import * as R from "@effect-ts/node/Runtime"

pipe(
  T.succeed(1),
  T.chain((n) => {
    return T.succeed(n + 1)
  }),
  T.chain((n) => {
    return T.succeed(n + 1)
  }),
  T.chain((n) => {
    return T.succeed(n + 1)
  }),
  T.tap((n) => {
    return T.fail(`(${n})`)
  }),
  T.catchAll(function handle(n) {
    return T.succeed(n)
  }),
  T.chain((n) => {
    return T.fail(`error: ${n}`)
  }),
  T.chain(() => T.succeed(0)),
  T.result,
  T.chain(T.done),
  R.runMain
)
