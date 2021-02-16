import { useEffect } from 'react'

export default function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
}
