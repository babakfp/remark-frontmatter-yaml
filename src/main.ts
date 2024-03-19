import * as v from "valibot"
import { parse } from "yaml"
import type { Transformer } from "unified"

import { OptionsSchema } from "./schema.js"
import type { OptionsInput, OptionsOutput } from "./types.js"
import { frontmatterRegex } from "./frontmatterRegex.js"

export default (options: OptionsInput): Transformer => {
    const options_: OptionsOutput = v.parse(OptionsSchema, options)

    return (_, file) => {
        const stringifiedFile = file.toString()

        const match = frontmatterRegex(
            options_.fence.open,
            options_.fence.close
        ).exec(stringifiedFile)

        file.data[options_.name] = {}

        if (!match) return

        const frontmatterContent = match[1]
        const frontmatterContentWithFences = match[0]

        file.data[options_.name] = parse(frontmatterContent, options_.yaml)

        if (options_.strip) {
            file.value = stringifiedFile.slice(
                frontmatterContentWithFences.length
            )
        }
    }
}
