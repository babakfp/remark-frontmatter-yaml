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
         * The syntax that is used to wrap the content of frontmatter.
         * Must be the same syntax that is used in [Remark Frontmatter](https://www.npmjs.com/package/remark-frontmatter) configuration.
         * @default
         * { open: "---", close: "---" }
         */
        fence: v.optional(
            v.object({
                /** @default "---" */
                open: v.string(),

                /** @default "---" */
                close: v.string(),
            }),
            {
                open: "---",
                close: "---",
            }
        ),

        /**
         * Set to `false` to prevent removal of the frontmatter content.
         * @default true
         */
        strip: v.optional(v.boolean(), true),

        /**
         * Options that are directly passed to the YAML parser.
         * @default undefined
         */
        yaml: v.optional(v.special<YamlOptions>(() => true)),
    }),
    {}
)
