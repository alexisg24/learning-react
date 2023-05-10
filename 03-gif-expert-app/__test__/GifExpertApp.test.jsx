import { fireEvent, render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('Tests in <GifExperApp />', () => {
  test('should render initial state with loading text', () => {
    render(<GifExpertApp />)
    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy()
    expect(screen.getByRole('button')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
    expect(screen.getByText('Loading...')).toBeTruthy()
  })

  test('Search input', async () => {
    render(<GifExpertApp />)
    fireEvent.input(screen.getByRole('textbox'), { target: { value: 'Demon Slayer' } })
    fireEvent.submit(screen.getByRole('form'))
    expect(screen.getByText('Demon Slayer')).toBeTruthy()
  })

  test('Search input duplitaded', async () => {
    render(<GifExpertApp />)
    fireEvent.input(screen.getByRole('textbox'), { target: { value: 'Demon Slayer' } })
    fireEvent.submit(screen.getByRole('form'))
    expect(screen.getByText('Demon Slayer')).toBeTruthy()
    fireEvent.input(screen.getByRole('textbox'), { target: { value: 'Demon Slayer' } })
    fireEvent.submit(screen.getByRole('form'))
    expect(screen.getAllByText('Demon Slayer').length).toBe(1)
  })
})
