import { isBrowser } from "./helpers"

export const setLocalStorage = (key, value) => {
  if (!isBrowser()) return

  localStorage.setItem(key, value)
}

export const getLocalStorage = key => {
  if (!isBrowser()) return

  return localStorage.getItem(key)
}

export const removeLocalStorage = key => {
  if (!isBrowser()) return

  localStorage.removeItem(key)
}

export const clearLocalStorage = key => {
  if (!isBrowser()) return

  localStorage.clear()
}
