# eslint-config-dskline

Personal ESLint Configuration for projects at github.com/dskline

### Features

* JavaScript linting with `eslint-config-airbnb`
* React best practices (including hooks)
* Accessibility (a11y) best practices
* Browser compatibility warnings
* Typescript integration
* Import sorting

### Sort Order

This configuration enables automatic import sorting using `eslint --fix` to sort imports to the following order:

1. `import React from 'react'` (always goes first)
2. Third party libraries (i.e. from `node_modules`)
3. Imports from the root directory using the alias `'@/../..'`
4. Relative imports (i.e. `../` or `./`)

Imports in the same group will then be sorted alphabetically.
