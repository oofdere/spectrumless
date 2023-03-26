# spectrumless

A website/app for radio stations that can't afford to get a slice of the spectrum.

This repository serves Gensokyo Radio by default while in early development. Eventually, of course, it will be easy to add your own station with a bit of code exposed via an internal API.

## Roadmap

- [x] Basic playback
- [x] Background playback
- [x] Save volume to LocalStorage
- [ ] Quality selection
- [ ] Schedule and show pages
- [ ] Database
- [ ] Admin UI
- [ ] PWA support
- [ ] Desktop app via Tauri
- [ ] Mobile app via Tauri/Capacitor
- [ ] Chromecast support
- [ ] AirPlay support
- [ ] Documentation
- [ ] Notifications

If you especially want a feature, you can fund its development through a bounty, contact oofdere@hey.com to do so.

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

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
