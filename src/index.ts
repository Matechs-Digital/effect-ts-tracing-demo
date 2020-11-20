// trace: on

import * as T from "@effect-ts/core/Effect"
import { identity, pipe } from "@effect-ts/core/Function"

pipe(
  T.tuple(T.succeed(1), T.succeed(2), T.succeed(3)),
  T.map(([a, b, c]) => a + b + c),
  T.bimap(identity, (n) => n + 1),
  T.andThen(
    T.checkExecutionTraces((traces) =>
      T.effectTotal(() => {
        console.log(traces)
      })
    )
  ),
  T.runMain
)
