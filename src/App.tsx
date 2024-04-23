import { createSignal } from 'solid-js'
import { InternalCalendar } from '@/component/DatePick'

function App() {
  const [date, setDate] = createSignal(new Date())
  return (
    <div class="flex-center size-full">
      <div
        class="flex gap-4"
      >
        <InternalCalendar
          value={date()}
          onChange={setDate}
        />
      </div>
    </div>
  )
}

export default App
