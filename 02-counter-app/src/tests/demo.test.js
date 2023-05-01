describe('First Test', () => {
  test('Esta prueba no debe de fallar', () => {
    // 1. Initial states
    const message = 'Hello world'
    // 2. Strimulus states
    const message2 = message.trim()

    // 3. watch expected results
    expect(message).toBe(message2)
  })
})
