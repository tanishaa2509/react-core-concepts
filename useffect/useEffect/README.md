# useEffect Demo

A minimal React demo exploring the `useEffect` hook and its dependency array behavior.

## What it does

The app has two independent state values — `counter` and `data` — each controlled by its own button.

A `useEffect` is wired to the `counter` dependency, so `counterFunction` only fires when `counter` changes, not when `data` changes. There's also a commented-out `callOnce` example showing how an empty dependency array limits execution to mount only.

This makes it easy to compare:
- effect runs on every targeted state change (`[counter]`)
- effect runs once on mount (`[]`)

## Stack

- React 19
- Vite 8
- oxlint

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run oxlint |
