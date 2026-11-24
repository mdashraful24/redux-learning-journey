import { RotateCcw } from "lucide-react"
import { Button } from "./components/ui/button"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/counter/counterSlice";

function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className="flex min-h-screen items-center justify-center p-4 text-slate-100">
      <section className="mx-auto flex w-full max-w-lg flex-col items-center rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center shadow-2xl shadow-black/30">
        <h1 className="text-3xl font-bold tracking-tight">Counter</h1>
        <p className="mt-2 text-sm text-slate-400 uppercase">
          Redux State
        </p>

        <output
          className="my-8 text-8xl font-semibold tabular-nums"
          aria-live="polite"
        >
          {value}
        </output>

        <div className="grid w-full grid-cols-[1fr_1fr] gap-3">
          <Button
            type="button"
            size="lg"
            variant="outline"
            className="h-12 border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700"
            onClick={() => dispatch(decrement())}
            aria-label="Decrease count"
          >
            <span className="text-2xl leading-none" aria-hidden="true">−</span>
          </Button>

          <Button
            type="button"
            size="lg"
            className="h-12 bg-violet-500 text-white hover:bg-violet-400"
            onClick={() => dispatch(increment())}
            aria-label="Increase count"
          >
            <span className="text-2xl leading-none" aria-hidden="true">+</span>
          </Button>

          <Button
            type="button"
            size="lg"
            variant="outline"
            className="col-span-2 h-12 border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800"
            onClick={() => setCount(0)}
            aria-label="Reset count"
          >
            <RotateCcw aria-hidden="true" />
            <span>Reset</span>
          </Button>
        </div>
      </section>
    </main>
  )
}

export default App
