import { parse } from "yaml"

import type { YamlOptions } from "./types.js"
import { isObject } from "./isObject.js"

export const parseYaml = (content: string, options: YamlOptions) => {
    const data = parse(content, options)
    return isObject(data) ? data : {}
}
