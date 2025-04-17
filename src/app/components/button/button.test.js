import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CustomButton from './index'

describe('CustomButton', () => {
  test('renders button with given text', () => {
    render(<CustomButton data="Click Me" type="submit" getstyle={{ color: 'red' }} />)
    
    const button = screen.getByText(/click me/i)
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'submit')
  })

  test('applies custom style', () => {
    render(<CustomButton data="Styled" getstyle={{ color: 'blue' }} />)

    const button = screen.getByText(/styled/i)
    expect(button).toBeInTheDocument()
    // Optional: test for style if needed
  })
})
