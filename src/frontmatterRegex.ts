import type { OptionsOutput } from "./types.js"

export const frontmatterRegex = (
    open: OptionsOutput["fence"]["open"],
    close: OptionsOutput["fence"]["close"]
) => {
    open.replaceAll("+", "\\+")
    close.replaceAll("+", "\\+")

    return new RegExp(
        `^${open}(?:\r?\n|\r)(?:([\\s\\S]*?)(?:\r?\n|\r))?${close}(?:\r?\n|\r|$)`
    )
}
