import { createSignal } from 'solid-js'
import { InternalCalendar } from '@/component/DatePick'

function App() {
  const [date, setDate] = createSignal(new Date())
  return (
    <div class="size-full flex-center">
      <div class="flex gap-4">
        <InternalCalendar
          value={date()}
          onChange={setDate}
        />
      </div>
    </div>
  )
}

export default App
