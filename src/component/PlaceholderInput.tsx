import { createMemo, createSignal, onCleanup, splitProps } from 'solid-js'
import { Input } from '@/component/Input'
import { cn } from '@/common/utils'

export function PlaceholderInput(props: {
  placeholder?: string
  name?: string
  id?: string
}) {
  const [local, others] = splitProps(props, ['placeholder'])
  const [inputValue, setInputValue] = createSignal('')
  const placeholder = createMemo(() => {
    if (!local.placeholder)
      return ''
    const length = inputValue().length
    if (length >= local.placeholder.length)
      return ''
    const otherStr = local.placeholder.slice(length)
    return (
      <div>
        <span class="opacity-0">
          {inputValue()}
        </span>
        <span>
          {otherStr}
        </span>
      </div>
    )
  })
  const abortSignal = new AbortController()
  const watchInput = (el: HTMLInputElement) => {
    el.addEventListener('input', (e) => {
      const target = e.target
      if (target instanceof HTMLInputElement) {
        const value = target.value
        setInputValue(value)
      }
    }, {
      signal: abortSignal.signal,
    })
    return {
      destroy() {
        abortSignal.abort()
      },
    }
  }
  onCleanup(abortSignal.abort)
  return (
    <div
      class="relative"
    >
      <Input
        ref={watchInput}
        {...others}
      />
      <div
        class={cn('pointer-events-none absolute left-0 top-1/2 mb-2 ml-2 text-sm text-gray-400 -translate-y-1/2', (inputValue().length >= (local?.placeholder?.length || 0)) && 'hidden')}
      >
        {placeholder()}
      </div>
    </div>
  )
}
