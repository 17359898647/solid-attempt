import './index.css'
import type { JSX } from 'solid-js'
import { createMemo, createSignal, mergeProps } from 'solid-js'

interface CalendarProps {
  value?: Date
  onChange?: (date: Date) => void
}

export function InternalCalendar(propsValue: CalendarProps) {
  const props = mergeProps({ value: new Date() }, propsValue)
  // eslint-disable-next-line solid/reactivity
  const [date, setDate] = createSignal(props.value)

  const handlePrevMonth = () => {
    setDate(new Date(date().getFullYear(), date().getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setDate(new Date(date().getFullYear(), date().getMonth() + 1, 1))
  }

  const replenishZero = (num: string | number) => {
    return String(num).padStart(2, '0')
  }

  const monthNames = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ]

  const daysOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const lastDayOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDay()
  }

  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const renderDays = createMemo(() => {
    const days: JSX.Element[] = []

    const daysCount = daysOfMonth(date().getFullYear(), date().getMonth())
    const lastDay = lastDayOfMonth(date().getFullYear(), date().getMonth())
    const firstDay = firstDayOfMonth(date().getFullYear(), date().getMonth())
    for (let i = 0; i < firstDay; i++) {
      const day = daysOfMonth(date().getFullYear(), date().getMonth() - 1) - firstDay + i + 1
      days.push(
        <div class="empty text-gray-100">
          {replenishZero(day)}
        </div>,
      )
    }

    for (let i = 1; i <= daysCount; i++) {
      const clickEvent = () => {
        const value = new Date(date().getFullYear(), date().getMonth(), i)
        propsValue.onChange?.(value)
        setDate(value)
      }
      if (i === date().getDate()) {
        days.push(
          <div
            class="day selected"
            onClick={clickEvent}
          >
            {replenishZero(i)}
          </div>,
        )
      }
      else {
        days.push(
          <div
            class="day"
            onClick={clickEvent}
          >
            {replenishZero(i)}
          </div>,
        )
      }
    }
    for (let i = 0; i < 6 - lastDay; i++) {
      days.push(
        <div class="empty text-gray-100">
          {replenishZero(i + 1)}
        </div>,
      )
    }
    return days
  })

  return (
    <div class="calendar">
      <div class="header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <div>
          {date().getFullYear()}
          年
          {monthNames[date().getMonth()]}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div class="days">
        <div class="day">日</div>
        <div class="day">一</div>
        <div class="day">二</div>
        <div class="day">三</div>
        <div class="day">四</div>
        <div class="day">五</div>
        <div class="day">六</div>
        {renderDays()}
      </div>
    </div>
  )
}
