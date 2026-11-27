# Redux Basic Concepts

A small counter application for learning the fundamental Redux Toolkit workflow in React.

## Features

- Configure a typed Redux store
- Create a counter slice with Redux Toolkit
- Dispatch increment and decrement actions
- Increment by a fixed value
- Select state with typed hooks
- Reuse UI components built with shadcn/ui

## Project Structure

```text
src/
├── components/ui/       # Shared UI components
├── redux/
│   ├── hooks.ts         # Typed useDispatch and useSelector hooks
│   ├── store.ts         # Store configuration
│   └── counter/
│       └── counterSlice.ts
├── App.tsx
└── main.tsx
```

## Key Concepts

The counter slice stores a numeric value and exposes actions for changing it. The application reads state through `useAppSelector` and updates state through `useAppDispatch`.

The store exports inferred `RootState` and `AppDispatch` types, keeping Redux usage type-safe across components.

## Run the Project

```bash
bun install
bun run dev
```

## Commands

| Command | Description |
| --- | --- |
| `bun run dev` | Start the development server |
| `bun run build` | Create a production build |
| `bun run lint` | Run ESLint |
| `bun run preview` | Preview the production build |
