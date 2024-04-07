# SvelteKit starter

Starter for SvelteKit with FSD, shadcn-svelte and tailwind

## How to use

```bash
  git clone https://github.com/falkomerr/sveltekit-starter.git my-app

  pnpm install
```
### If you want to use another package manager, just delete pnpm-lock.yaml and use your package manager

## Developing

### [FSD: Architectural methodology](https://feature-sliced.design/)

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
