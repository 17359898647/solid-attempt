import { createMemo, createSignal, onCleanup, splitProps } from 'solid-js'
import { cn } from '@/common/utils'
import { Input } from '@/component/Input'

export function PlaceholderInput(props: {
  placeholder?: string
  class?: string
}) {
  const [local, others] = splitProps(props, ['placeholder', 'class'])
  const [inputValue, setInputValue] = createSignal('')
  const placeholder = createMemo(() => {
    if (!local.placeholder)
      return ''
    const length = inputValue().length
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
  const watchInput = (el: HTMLInputElement) => {
    const abortSignal = new AbortController()
    el.addEventListener('input', (e) => {
      const target = e.target
      if (target instanceof HTMLInputElement) {
        const value = target.value
        setInputValue(value)
      }
    }, {
      signal: abortSignal.signal,
    })
    onCleanup(abortSignal.abort)
    return {
      destroy() {
        abortSignal.abort()
      },
    }
  }
  return (
    <div
      class="relative"
    >
      <Input
        ref={watchInput}
        class={cn(local.class)}
        {...others}
      />
      <div
        class="pointer-events-none absolute left-0 top-1/2 mb-2 ml-2 text-sm text-gray-400 -translate-y-1/2"
      >
        {placeholder()}
      </div>
    </div>
  )
}
