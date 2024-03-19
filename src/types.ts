import * as v from "valibot"
import { parse } from "yaml"

import type { OptionsSchema } from "./schema.js"

export type YamlOptions = Parameters<typeof parse>[2]

export type OptionsInput = v.Input<typeof OptionsSchema>
export type OptionsOutput = v.Output<typeof OptionsSchema>
