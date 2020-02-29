# eslint-config-dskline

Personal ESLint Configuration for projects at github.com/dskline

### Features

* JavaScript linting with `Standard JS`
* React best practices (including hooks)
* Accessibility (a11y) best practices
* Browser compatibility warnings
* Typescript integration
* Import sorting

### Sort Order

This configuration enables automatic import sorting using `eslint --fix` to the following group order:

1. React import
2. Third party libraries (i.e. from `node_modules`)
3. Imports from `/src`
4. Relative imports (i.e. `../` or `./`)
5. CSS imports

Imports in the same group will then be sorted alphabetically.
