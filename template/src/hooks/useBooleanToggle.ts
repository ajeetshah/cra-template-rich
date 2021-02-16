import { useCallback, useState } from 'react'

export default function useBooleanToggle(initial: boolean) {
  const [show, setShow] = useState(initial)

  const toggle = useCallback(() => {
    setShow((s) => !s)
  }, [])

  return [show, toggle] as [boolean, () => void]
}
