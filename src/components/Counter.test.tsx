import { render, screen} from '@testing-library/react';
import React from 'react';
import {Counter} from './Counter';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
  it('should render a button', () => {
    render(<Counter/>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('increment')
  })

  it('should increment the displayed value if the button is clicked', async () => {
    render(<Counter/>);
    const button = screen.getByRole('button');
    const display = screen.getByTestId('display');
    expect(display.innerHTML).toEqual('Counter: 0');
    await userEvent.click(button);
    expect(display.innerHTML).toEqual('Counter: 1');
  })
})