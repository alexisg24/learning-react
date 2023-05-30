import { types } from '../types/types'

export const authReducer = (state = {}, action) => {
  const ACTIONS = {
    [types.LOGIN]: { ...state, logged: true, user: action?.payload },
    [types.LOGOUT]: { ...state, logged: false, user: null }
  }

  return ACTIONS[action?.type] ?? state
}
