import { toast, CommonOptions } from 'react-toastify'

const errorOptions: CommonOptions = {
  autoClose: false,
}

export function showErrorToast(message: string) {
  toast.error(message, errorOptions)
}

export function showSuccessToast(message: string) {
  toast.success(message)
}
