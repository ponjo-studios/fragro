# React + Vite + TypeScript Template

This is a web-based project template using the following technologies:
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PostCSS](https://postcss.org/)
- [sass](https://sass-lang.com/)
- [Prettier](https://prettier.io/)
  - [prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports)

With optional configurations for using:
- [Tauri](https://tauri.app/) for building desktop applications
- [Poppins](https://fonts.google.com/specimen/Poppins)

## TypeScript Path Aliases

- `@app` -> `./src`
- `@components` -> `./src/ui/components` (for general components)
- `@pages` -> `./src/ui/pages` (for general components)
- `@hooks` -> `./src/hooks`
- `@stores` -> `./src/stores` (for Zustand stores)
- `@backend` -> `./src/backend` (for any backend code)
- `@css` -> `./src/ui/css` (for global css)

## Using with Tauri

To use this template with Tauri, change the follow files:
- (existing) `package.json` -> `(delete)`
- (existing) `vite.config.ts` -> `(delete)`
- (rename) `vite.tauri.config.ts` -> `vite.config.ts`
- (rename) `package.tauri.json` -> `package.json`
