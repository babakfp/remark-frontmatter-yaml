import * as v from "valibot"
import type { Transformer } from "unified"

import { OptionsSchema } from "./schema.js"
import type { OptionsInput, OptionsOutput } from "./types.js"
import { frontmatterRegex } from "./frontmatterRegex.js"
import { parseYaml } from "./parseYaml.js"

export default (options: OptionsInput): Transformer => {
    const options_: OptionsOutput = v.parse(OptionsSchema, options)

    return (_, file) => {
        const file_ = file.toString()

        const match = frontmatterRegex(
            options_.fence.open,
            options_.fence.close
        ).exec(file_)

        file.data[options_.name] = {}

        if (!match) return

        const content = match[1] || ""
        const contentWithFences = match[0]

        file.data[options_.name] = parseYaml(content, options_.yaml)

        if (options_.strip) {
            file.value = file_.slice(contentWithFences.length)
        }
    }
}

export type { OptionsInput as Options }
