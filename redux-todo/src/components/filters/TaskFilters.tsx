import { Button } from '../ui/button'

const filters = ['All', 'Active', 'Completed']

export function TaskFilters() {
  return (
    <nav className="task-filters" aria-label="Task filters">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={filter === 'All' ? 'secondary' : 'ghost'}
          size="sm"
          aria-pressed={filter === 'All'}
        >
          {filter}
        </Button>
      ))}
    </nav>
  )
}
