import { cn } from '@/common/utils'
import { PlaceholderInput } from '@/component/PlaceholderInput'

function App() {
  return (
    <form
      class={cn('flex-center bg-red size-full flex-col', 'bg-primary')}
    >
      <PlaceholderInput placeholder="123456789" />
    </form>
  )
}

export default App
