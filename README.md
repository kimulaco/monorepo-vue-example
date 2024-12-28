# monorepo-vue-example

This repository demonstrates an issue where `@vue/test-utils` references unintended Vue versions and causes test failures when managing applications with different Vue versions in a pnpm workspace.

https://github.com/kimulaco/monorepo-vue-example/actions/runs/12525420724/job/34936963564

This is a minimal reproduction repository for the problem.

- node v22.12.0
- pnpm v9.15.1

## Development

```sh
pnpm install
pnpm test
```
