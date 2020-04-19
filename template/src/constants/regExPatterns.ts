export const patternName = new RegExp(/^[A-Za-z ]+$/i)

export const patternEmail = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)

export const patternInteger = new RegExp(/^\d+$/)

export const patternIntegerAndDecimal = new RegExp(/^\d+(\.\d{1,2})?$/)

export const patternMobile = new RegExp(/^(\d{10}){1}$/)

export const patternWebsite = new RegExp(
  /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/
)

/**
 * Password Pattern
 * At least
 * 1 number
 * 1 upper case
 * 1 lower case
 * 1 special character
 * Min / Max: 8/30
 */

export const patternPassword = new RegExp(
  /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[`~!@#$%^&*()\-_+={}[\]<,>.?/"'|\\;:])[\w`~!@#$%^&*()\-_+={}[\]<,.>?/"'|\\;:]{8,30}$/
)

export const patternCarSearch = new RegExp(/^car\s\d{1,6}$/i)
