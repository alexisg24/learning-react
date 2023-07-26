import { render, screen } from '@testing-library/react'
import { FabDelete } from '../../../src/calendar/components/FabDelete'
import { Provider } from 'react-redux'
import { store } from '../../../src/store'

describe('Tests in <FabDelete />', () => {
  test('Should render the component', () => {
    render(
      <Provider store={store}>
        <FabDelete />
      </Provider>
    )
    screen.debug()
  })
})
