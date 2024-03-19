# Remark Frontmatter YAML

A [remark](https://github.com/remarkjs/remark) plugin to parse the [YAML](https://yaml.org) frontmatter.

## What is this?

This package is a [[unified](https://github.com/unifiedjs/unified)] ([remark](https://github.com/remarkjs/remark)) plugin to parse YAML frontmatter.

```yaml
message: Hello, World!
```

## When should I use this?

This plugin is made to be used with [Remark Frontmatter](https://www.npmjs.com/package/remark-frontmatter).

## Example

```ts
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkStringify from "remark-stringify"
import remarkFrontmatter from "remark-frontmatter"
import remarkFrontmatterYaml from "remark-frontmatter-yaml"

const file = await unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(remarkFrontmatter)
    .use(remarkFrontmatterYaml)
    .process(/* content */)

console.log(file.data.frontmatter) // { message: "Hello, World!" }
```

## API

### `options`

#### `name`

-   Type: `string`
-   Default `"frontmatter"`

The name that is going to be used instead of `frontmatter` in `file.data.frontmatter`.

#### `fence`

-   Type: `{ open: string; close: string }`
-   Default `{ open: "---", close: "---" }`

The syntax that is used to wrap the content of frontmatter.

Must be the same syntax that is used in [Remark Frontmatter](https://www.npmjs.com/package/remark-frontmatter)

#### `strip`

-   Type: `boolean`
-   Default `true`

Set to `false` to prevent removal of the frontmatter content.

#### `yaml`

-   Type: `Parameters<typeof yaml.parse>[2]`
-   Default `undefined`

Options that are directly passed to the YAML parser.
