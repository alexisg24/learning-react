import { registerWithEmailAndPassword, signInWithEmailPassword, signInWithGoogle, signOutFn } from '../../../src/firebase/providers'
import { checkingCredentials, login, logout } from '../../../src/store/auth/authSlice'
import { checkingAuth, startCreatingUserWithEmailPassword, startEmailAndPasswordSignIn, startGoogleSignIn, startLogout } from '../../../src/store/auth/thunks'
import { clearNotesLogout } from '../../../src/store/journal'
import { demoUser } from '../../fixtures/authFixtures'

jest.mock('../../../src/firebase/providers')

describe('Tests in Auth/thunks', () => {
  const dispatch = jest.fn()
  beforeEach(() => jest.clearAllMocks())

  test('should invoke checkingCredentials', async () => {
    await checkingAuth()(dispatch)
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
  })

  test('startGoogleSignIn should call checkingCredentials and login - Success', async () => {
    const loginData = { ok: true, ...demoUser }
    await signInWithGoogle.mockResolvedValue(loginData)
    await startGoogleSignIn()(dispatch)
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(login(loginData))
  })

  test('startGoogleSignIn should call checkingCredentials and logout - Error', async () => {
    const loginData = { ok: false, errorMessage: 'Failed to Login with Google' }
    await signInWithGoogle.mockResolvedValue(loginData)
    await startGoogleSignIn()(dispatch)
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage: loginData.errorMessage }))
  })

  test('startEmailAndPasswordSignIn should call checkingCredentials and login - Sucess', async () => {
    const loginData = { ok: true, ...demoUser }
    const formData = { email: loginData.email, password: '123456' }
    await signInWithEmailPassword.mockResolvedValue(loginData)
    await startEmailAndPasswordSignIn(formData)(dispatch)
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(login(loginData))
  })

  test('startEmailAndPasswordSignIn should call checkingCredentials and logout - Error', async () => {
    const loginData = { ok: false, errorMessage: 'Failed to Login' }
    const formData = { email: null, password: '123456' }
    await signInWithEmailPassword.mockResolvedValue(loginData)
    await startEmailAndPasswordSignIn(formData)(dispatch)
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage: loginData.errorMessage }))
  })

  test('startCreatingUserWithEmailPassword should call checkingCredentials and login - Sucess', async () => {
    const resultData = { ok: true, ...demoUser }
    const formData = { email: resultData.email, displayName: resultData.displayName, password: '123456' }
    await registerWithEmailAndPassword.mockResolvedValue(resultData)
    await startCreatingUserWithEmailPassword(formData)(dispatch)
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(login(resultData))
  })

  test('startCreatingUserWithEmailPassword should call checkingCredentials and logout - Error', async () => {
    const resultData = { ok: false, errorMessage: 'Failed to Register' }
    const formData = { email: null, displayName: null, password: '123456' }
    await registerWithEmailAndPassword.mockResolvedValue(resultData)
    await startCreatingUserWithEmailPassword(formData)(dispatch)
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage: resultData.errorMessage }))
  })

  test('startLogout shouldCall signOutFn, clearNotes and logout', async () => {
    await startLogout()(dispatch)
    expect(signOutFn).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout())
    expect(dispatch).toHaveBeenCalledWith(logout())
  })
})
