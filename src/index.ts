import * as T from "@effect-ts/core/Effect"
import { pipe } from "@effect-ts/core/Function"

import { main } from "./main"

pipe(
  main,
  T.chain((traces) =>
    T.effectTotal(() => {
      console.log(traces)
    })
  ),
  T.runMain
)
