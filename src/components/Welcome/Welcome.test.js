import {render, screen, fireEvent} from '@testing-library/react'
import Welcome from './Welcome'


test('has correct welcome text', () => {
    render(<Welcome firstName="John" lastName="Doe" />)
    const title = screen.queryByTestId('heading')
    expect(title).toHaveTextContent('Welcome, John Doe')
  })


test('Input firstname value changes text', () => {
    render(<Welcome firstName="John" lastName="Doe" />)
    const input = screen.queryByTestId('input-firstname')
    expect(input).toBeVisible()
    fireEvent.change(input, {target: {value: 'David'}})
    const title = screen.queryByTestId('heading')
    expect(title).toHaveTextContent('Welcome, David Doe')
})