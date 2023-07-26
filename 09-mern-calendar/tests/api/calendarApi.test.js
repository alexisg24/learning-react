import { calendarApi } from '../../src/api/calendarApi'

describe('Tests in CalendarApi', () => {
  test('Needs to provide default config', () => {
    expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL)
  })

  test('should have x-token in all fetch headers', async () => {
    const token = 'ABC-123-XYZ'
    window.localStorage.setItem('token', token)
    const res = await calendarApi.get('/auth')
    expect(res.config.headers['x-token']).toEqual(token)
  })
})
