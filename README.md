# eslint-plugin-mutation
Checks for mutations of objects. Allows a whitelist of mutable objects.

## Getting started

#### Installation
`npm i --save-dev eslint-plugin-mutation`

#### Usage
Add the following to your `.eslintrc`

By default, "this" and "global" are allowed to be mutated.
```
  plugins: [
    "mutation"
  ],
  rules: {
    "mutation/no-mutation": 2
  }
```

This can be customized.
```
  plugins: [
    "mutation"
  ],
  rules: {
    "mutation/no-mutation": [2, {exceptions: ["this", "that", "global", "window"]}]
  }
```

## Contributing
Please submit a PR.