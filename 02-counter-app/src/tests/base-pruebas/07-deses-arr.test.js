import { retornaArreglo } from '../../base-pruebas/07-deses-arr'

describe('Tests in 07-deses-arr', () => {
  test('Needs to return one string and one number', () => {
    const [letters, numbers] = retornaArreglo()
    expect(typeof letters === 'string').toBeTruthy()
    expect(typeof letters).toBe('string')
    expect(letters).toEqual(expect.any(String))

    expect(typeof numbers === 'number').toBeTruthy()
    expect(typeof numbers).toBe('number')
    expect(numbers).toStrictEqual(expect.any(Number))
  })
})
