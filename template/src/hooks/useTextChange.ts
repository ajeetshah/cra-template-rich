import { useCallback, useState } from 'react'

export default function useTextChange(
  initial: string
): [string, (e: string | any) => void] {
  const [text, setText] = useState(initial)

  const changeText = useCallback(e => {
    if (typeof e === 'string') {
      setText(e)
    } else {
      setText(e?.target?.value ?? '')
    }
  }, [])

  return [text, changeText]
}
