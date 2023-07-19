import { checkingCredentials } from '../../../src/store/auth/authSlice'
import { checkingAuth } from '../../../src/store/auth/thunks'

jest.mock('../../../src/firebase/providers')

describe('Tests in Auth/thunks', () => {
  const dispatch = jest.fn()
  beforeEach(() => jest.clearAllMocks())
  test('should invoke checkingCredentials', async () => {
    await checkingAuth()(dispatch)
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
  })
})
