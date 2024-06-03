import imask from 'imask'
import { z } from 'zod'
import type InputMask from 'imask/controls/input'
import type { BaseIMaskProps } from './MaksHelp'
import { WatchInput } from './MaksHelp'
import { Input } from '@/component/Input'

export const SSNRegexp = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/
export const SSNSchema = z
  .string({
    required_error: 'Please enter your SSN',
  })
  .regex(SSNRegexp, 'SSNRegex')
export function SSNInput<T extends string>(props: BaseIMaskProps<T>) {
  let mask!: InputMask
  const maskFn = (val: string) => {
    if (val === ' ')
      return false
    if (val === '*')
      return true
    return !Number.isNaN(Number(val))
  }
  const actionIMask = (el: HTMLInputElement) => {
    mask = imask(el, {
      mask: '`***-**-****',
      lazy: false,
      definitions: {
        '*': {
          mask: maskFn,
          placeholderChar: '#',
        },
      },
    })
    mask.on('accept', () => {
      const { value, unmaskedValue, rawInputValue } = mask
      props.onInput?.({ value, unmaskedValue, rawInputValue })
      !!props.name && props.setData?.(props.name, mask.value)
    })
  }

  return (
    <>
      <Input
        ref={actionIMask}
        type="text"
        onFocusOut={() => {
          !!props.name && props.setTouched?.(props.name, true)
        }}
      />
      <input
        ref={(e) => {
          WatchInput(e, mask)
        }}
        class="pointer-events-none hidden"
        name={props.name}
        value={props.value}
      />
    </>
  )
}
