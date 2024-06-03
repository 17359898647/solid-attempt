import imask from 'imask'
import { z } from 'zod'
import type InputMask from 'imask/controls/input'
import type { BaseIMaskProps } from './MaksHelp'
import { WatchInput } from './MaksHelp'
import { Input } from '@/component/Input'

export const ZipCodeRegex = /^(?:\d{5}-\d{4}|\d{5})$/
export const ZipCodeSchema = z
  .string({
    required_error: 'Please enter the zip code',
  })
  .regex(ZipCodeRegex, 'ZipcodeRegex')
/**
 *
 * @param {BaseIMaskProps} props
 * @constructor
 */
export function ZipCodeInput<T extends string>(props: BaseIMaskProps<T>) {
  let mask!: InputMask
  const actionIMask = (el: HTMLInputElement) => {
    mask = imask(el, {
      mask: [
        {
          mask: '*****',
          lazy: false,
          definitions: {
            '*': {
              mask: '0',
              placeholderChar: '#',
            },
          },
        },
        {
          mask: '*****-****',
          lazy: false,
          definitions: {
            '*': {
              mask: '0',
              placeholderChar: '#',
            },
          },
        },
      ],
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
