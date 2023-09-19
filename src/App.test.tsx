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
    expect(button.innerHTML).toEqual('0')
    await act(() => {
      button.click();
    })
    expect(button.innerHTML).toEqual('1')
  })

})