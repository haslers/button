import React from 'react';
import {act, render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render a button', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  })

  it('should display the value of the counter on the button', async () => {
    render(<App />);
    const button = screen.getByRole('button');
    const display = screen.getByTestId("display")
    expect(display.innerHTML).toEqual('Counter: 0')
    await act(() => {
      button.click();
    })
    expect(display.innerHTML).toEqual('Counter: 1')
  })

})