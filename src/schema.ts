import * as v from "valibot"

import type { YamlOptions } from "./types.js"

export const OptionsSchema = v.optional(
    v.object({
        /**
         * The name that is going to be used instead of `frontmatter` in `file.data.frontmatter`.
         * @default "frontmatter"
         */
        name: v.optional(v.string([v.minLength(1)]), "frontmatter"),

        /**
         * Options that are directly passed to the YAML parser.
         * @default undefined
         */
        yaml: v.optional(v.special<YamlOptions>(() => true)),
    }),
    {}
)
