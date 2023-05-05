import getImagen from '../../base-pruebas/11-async-await'

describe('Tests in 11-async-await', () => {
  test('getImagen nees to return an URL', async () => {
    const url = await getImagen()
    console.log(url)
    expect(typeof url).toBe('string')
  })
})
