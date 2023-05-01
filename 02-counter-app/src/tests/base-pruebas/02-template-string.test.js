import { getGreeting } from '../../base-pruebas/02-template-string'

describe('Test in 02-template-string', () => {
  test('getGreeting needs return Hello Name', () => {
    const name = 'Alexis'
    const message = getGreeting(name)
    expect(message).toBe('Hello Alexis')
  })
})
