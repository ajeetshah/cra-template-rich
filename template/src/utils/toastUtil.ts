import { toast, ToastOptions } from 'react-toastify'

const errorOptions: ToastOptions = {
  autoClose: false,
}

export function showErrorToast(message: string) {
  toast.error(message, errorOptions)
}

export function showSuccessToast(message: string) {
  toast.success(message)
}
