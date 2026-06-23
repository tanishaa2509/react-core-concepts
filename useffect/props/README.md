# Props & useEffect Demo

A React demo project that shows how to handle prop-driven side effects using `useEffect` inside a child component.

## What it does

The `App` component manages two independent state values — `count` and `data` — and passes them down as props to a `Counter` component.

Inside `Counter`, two separate `useEffect` hooks respond to different triggers:
- one runs only on mount (empty dependency array)
- one runs every time the `data` prop changes

This demonstrates how to selectively react to specific prop changes without coupling unrelated side effects together.

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
