export function copyInputTextToClipboard(elementId: string) {
  const element: any = document.getElementById(elementId)
  console.debug(element)
  if (element) {
    element.select()
    element.setSelectionRange(0, 99999) // For mobile devices
    document.execCommand('copy')
    window.alert(`Copied: ${element.value}`)
  }
}
