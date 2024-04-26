import { cn } from '@/common/utils'

function App() {
  return (
    <div class={cn('flex-center bg-red size-full', 'bg-primary')}>
      <div
        class="flex items-center gap-4"
      >
        <i class="icon-devicon:vuestorefront" />
        <div class="icon-arcticons:vuetube" />
      </div>
    </div>
  )
}

export default App
