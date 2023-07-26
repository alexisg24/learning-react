const { uiSlice, onOpenDateModal, onCloseDateModal } = require('../../../src/store/ui/uiSlice')

describe('Tests in uiSlice', () => {
  test('should return default values', () => {
    const state = uiSlice.getInitialState()
    expect(state.isDateModalOpen).toBeFalsy()
  })

  test('should change isDateModalOpen', () => {
    const initialState = uiSlice.getInitialState()
    const value = uiSlice.reducer(initialState, onOpenDateModal())
    expect(value.isDateModalOpen).toBeTruthy()

    const value2 = uiSlice.reducer(initialState, onCloseDateModal())
    expect(value2.isDateModalOpen).toBeFalsy()
  })
})
