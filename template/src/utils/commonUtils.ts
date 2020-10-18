import { showSuccessToast, showErrorToast } from './toastUtil'

export function copyInputTextToClipboard(elementId: string) {
  const element: any = document.getElementById(elementId)
  if (element) {
    element.select?.()
    element.setSelectionRange?.(0, 99999) // For mobile devices
    document.execCommand('copy')
    showSuccessToast(`Copied: '${element.value}' to clipboard!`)
  } else {
    showErrorToast(`Error copying to clipboard!`)
  }
}
