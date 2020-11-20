import * as T from "@effect-ts/core/Effect"

import { main } from "../src/main"

describe("Main", () => {
  it("should have traces", async () => {
    const traces = await T.runPromise(main)

    expect(traces).toEqual([
      "src/main.ts:8:9:Effect:map",
      "src/main.ts:9:21:Effect:bimap"
    ])
  })
})
