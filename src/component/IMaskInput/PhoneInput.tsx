import imask from 'imask'
import { z } from 'zod'
import type InputMask from 'imask/controls/input'
import type { BaseIMaskProps } from './MaksHelp'
import { WatchInput } from './MaksHelp'
import { Input } from '@/component/Input'

export const PhoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
export const PhoneSchema = z
  .string({
    required_error: 'Please enter your phone number',
  })
  .regex(PhoneRegex, 'PhoneRegex')
export const transformToNumber = (val?: string) => val?.replace(/\D/g, '') || ''

export function PhoneInput<T extends string>(props: BaseIMaskProps<T>) {
  let mask!: InputMask
  const actionIMask = (el: HTMLInputElement) => {
    mask = imask(el, {
      mask: '`(***)***-****',
      lazy: false,
      definitions: {
        '*': {
          mask: '0',
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
