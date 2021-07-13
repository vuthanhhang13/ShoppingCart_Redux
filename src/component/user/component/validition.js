import { isUndefined } from 'lodash'
import validator from 'validator'

export const validatePassword = value => {
  if ((value.length < 8 || value.length > 25) && value !== '') {
    return 'validatePassword'
  }
  return ''
}

export const validateEmail = value => {
  if (!validator.isEmail(value) && value !== '') {
    return 'validateEmail'
  }
  return ''
}
export const validateName = value => {
  if (value.length > 150 && value !== '') {
    return 'validateName'
  }
  return ''
}
export const validateUser = value => {
  if ((value.length < 1 || value.length > 150) && value !== '') {
    return 'validateUser'
  }
  return ''
}
export const validatePhone = value => {
  if ((value.length < 9 || value.length > 15) && value !== '') {
    return 'validatePhone'
  }
  return ''
}

export const validateConfirmPassword = (confirmPassword, password) => {
  if (confirmPassword !== password && confirmPassword !== '' && password !== '') {
    return 'validateConfirmPassword'
  }
  return ''
}

export const errorType = {
  validate: 'validate',
  min: 'min',
}

