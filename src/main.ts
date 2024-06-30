import * as v from "valibot"
import type { Transformer } from "unified"
import type { Root } from "mdast"
import { EXIT, visit } from "unist-util-visit"

import { OptionsSchema } from "./schema.js"
import type { OptionsInput, OptionsOutput } from "./types.js"
import { parseYaml } from "./parseYaml.js"

export default (options?: OptionsInput): Transformer<Root> => {
    const options_: OptionsOutput = v.parse(OptionsSchema, options)

    return (tree, file) => {
        visit(tree, "yaml", (node) => {
            file.data[options_.name] = parseYaml(node.value, options_.yaml)
            tree.children.splice(0, 1)
            return EXIT
        })
    }
}

export type { OptionsInput as Options }
