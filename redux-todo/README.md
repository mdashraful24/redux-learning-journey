# Redux Todo

A local task management application built with React and Redux Toolkit.

## Features

- Create tasks with titles, descriptions, priorities, and statuses
- Edit task details
- Mark tasks as pending or completed
- Delete tasks
- Search tasks by text
- Filter by status and priority
- Sort tasks by newest or oldest
- View task totals and completion statistics
- Receive toast notifications for task actions

## Redux Architecture

The application separates state by feature:

```text
redux/
├── store.ts
├── rootReducer.ts
└── features/
    ├── tasks/
    │   ├── tasks.slice.ts
    │   ├── tasks.selector.ts
    │   ├── tasks.type.ts
    │   └── tasks.schema.ts
    └── filters/
        ├── filters.slice.ts
        ├── filters.selector.ts
        └── filters.types.ts
```

Task state includes generated IDs, timestamps, title, description, priority, and status. Filter state is stored separately and consumed by derived selectors.

## UI and Validation

- React 19 and TypeScript
- Redux Toolkit and React Redux
- Tailwind CSS
- shadcn/ui and Radix UI
- React Hook Form
- Zod
- Sonner notifications

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
