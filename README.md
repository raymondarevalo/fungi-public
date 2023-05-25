# Fungi 🍄

### Getting started
```bash
npm install
```

![basics](https://cdn.shopify.com/s/files/1/0746/6516/5080/files/fungi_screenshot.png?v=1684473233)

## Launch development server

### Using Adastra CLI ✨

To launch the development server for the first time, you will need to replace the development command inside the `package.json` with the following:

```json
"scripts": {
  - "dev": "adastra dev",
  "dev": "adastra dev -s example-store.myshopify.com",
  ...
}
```

```bash
npm run dev
# same as npm run adastra dev
# The command will launch two dev servers, the first for Vite at `localhost:5173` to server static files from the `src` directory and the second for Shopify at `localhost:9292` to serve your theme.
```

### Using Vite and Shopify CLI

```json
"scripts": {
  - "dev": "adastra dev",
  "dev": "vite",
  "dev:shopify": "shopify theme dev -s example-store.myshopify.com",
  "build": "vite build",
  ...
}
```

```bash
npm run dev
# same as shopify theme dev
```


## Theme Structure

Inside the Fungi theme project, you'll see the following folders and files.

1. Most Shopify themes files and folders remain the same.
2. There is only one additional **Super Special** folder called `src` (you can change its name in `vite.config.js` file).
3. Instead of directly editing static assets in the theme `assets` directory, you will use the new `src` directory instead.
4. Static files inside the `src` directory are served by [Vite](https://vitejs.dev).
5. When launching the developement sever command `npm run dev` the command launches two dev servers, one for [Vite](https://vitejs.dev) to serve static files and the other one for Shopify to upload the development theme to remote Shopify server (Takes a bit of time).

```shell
/
├── assets
├── config
├── layout
├── locales
├── sections/
│   └── hello-world.liquid
├── snippets/
│   └── colors.liquid
├── src/  # Source directory (name can be changed in vite.config.js)
│   ├── entrypoints/ # Entrypoints directory (name can be changed in vite.config.js)
│   │   ├── base.css
│   │   └── index.js
│   └── global.js # Where universal js goes
├── templates
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── package.json
```

Fungi detects entrypoint files automatically in the `entrypoints/` directory. In this case `base.css` for styles and `index.js` for modules.

So everything you import to these two files will be shipped to the theme `assets` folder when building for production.

You can create other folders like `src/utils/` if you want, or a `src/components/` folder for Native/React/Vue/Lit/Preact components. Only the files/modules imported in the entrypoint files will be served by Vite.

Any static assets, like custom fonts, manifest files, `.css.liquid` or `.js.liquid`, can be placed inside the `assets` theme folder, just make sure to add the configuration below to avoid clearing the assets directory when building for production.

```js
// vite.config.js

import { defineConfig } from 'vite'
import adastra from 'adastra-plugin'

export default defineConfig({
  plugins: [adastra()],
  build: {
    emptyOutDir: false
  }
})
```

> Fungi is built with Adastra. To learn more, feel free to check [their documentation](https://docs.blanklob.com)

## Tailwind + approach to src files

1. When developing on this theme, try to fulfill all styling requirements with Tailwind.
2. If styling is unable to be fulfilled with Tailwind and is only required within a individual section/snippet, then include it within a {% style %} tag at the top of the liquid file
3.  All base styling (color schemes, buttons, inputs, font rules) should go within base.css
4.  If styling is unable to be fulfilled with Tailwind, and is dependent on multiple sections/snippets, then include in base.css underneath general base styling.

## Commands

Since this project can use either Adastra CLI or Shopify CLI, existing Adastra commands are the same as Shopify's.

```bash
adastra dev -s example-store.myshopify.com
# same as shopify theme dev -s example-store.myshopify.com
# same as npm run vite -s example-store.myshopify.com
```

All commands are run from the root of the theme project, from a terminal:

### Other commands

| Command                  | Action                                                                |
| :----------------------- | :-------------------------------------------------------------------- |
| `npm install`            | Installs dependencies                                                 |
| `npm run build`          | Build and minifies your production static files to `./assets/` folder |
| `npm run preview`        | Preview of your remote development theme, before deploying            |
| `npm run check`          | Run theme check to lint the theme                                     |
| `npm run adastra ...`    | Run CLI commands like `adastra dev`, `adastra check`                  |
| `npm run adastra --help` | Get help using the Adastra CLI                                        |

