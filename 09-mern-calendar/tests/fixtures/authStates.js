export const initialState = {
  status: 'checking', // authenticated, not-authenticated
  user: {},
  errorMessage: undefined
}

export const authenticatedState = {
  status: 'authenticated',
  user: {
    uid: '64c1174f51e71ecf96cb2897',
    name: 'Test User'
  },
  errorMessage: undefined
}

export const notAuthenticatedState = {
  status: 'not-authenticated', // authenticated, not-authenticated
  user: {},
  errorMessage: undefined
}
