import "@effect-ts/node/Modules/Traced"

import * as R from "@effect-ts/node/Runtime"
import { prettyTraceNode } from "@effect-ts/node/Runtime"
import type { Trace } from "@effect-ts/system/Fiber"

const customNodeRender = (_: Trace): string =>
  prettyTraceNode(_, (_, path) => {
    return path
      .replace("/esm/_traced/", "/")
      .replace("/_traced/", "/")
      .replace(process.cwd() + "/", "")
  })

export const {
  custom: { run, runAsap, runCancel, runFiber, runPromise, runPromiseExit },
  runMain
} = new R.NodeRuntime(R.nodeRuntime.custom.traceRenderer(customNodeRender))
