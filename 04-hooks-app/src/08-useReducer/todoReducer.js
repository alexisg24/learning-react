const todoReducer = (initialState = [], action) => {
  const opt = {
    ABC: () => { throw new Error('Esperando') }
  }

  return opt[action?.type] ?? initialState
}

export { todoReducer }
