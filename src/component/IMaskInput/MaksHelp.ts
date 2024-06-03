import type InputMask from 'imask/controls/input'

/**
 * The touch corresponding to the key must be set using setTouched to trigger the verification properly
 */
export interface BaseIMaskProps<T extends string> {
  onInput?: (e: Pick<InputMask, 'value' | 'unmaskedValue' | 'rawInputValue'>) => void
  name?: T
  setTouched?: (key: T, val?: boolean) => void
  setData?: (key: T, val: any) => void
  value?: string
}

export function WatchInput(e: HTMLInputElement, mask: InputMask) {
  Object.defineProperty(e, 'value', {
    set: (value) => {
      mask.value = value ?? ''
      return value
    },
    get() {
      return mask.rawInputValue
    },
  })
}
