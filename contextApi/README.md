# Context API Demo

A simple React app demonstrating how to use the Context API to share state across components without prop drilling.

## What it does

A subject selector at the top level passes the selected subject down to nested components (`College` → `Student` → `Subject`) using React Context, without passing props at each level.

## Tech Stack

- React 19
- Vite

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── App.jsx          # Root component, holds state and provides context
├── ContextData.jsx  # Creates and exports SubjectContext
├── College.jsx      # Consumes context (or passes it down)
├── Student.jsx      # Nested consumer component
├── Subject.jsx      # Deeply nested consumer component
└── ClassComponent.jsx  # Class-based context consumer example
```
