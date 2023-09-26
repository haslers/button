import { render, screen} from '@testing-library/react';
import * as axe from 'axe-core';
import React from 'react';
import {Counter} from './Counter';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
  it('should render a button', () => {
    render(<Counter/>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  })

  it('should increment the displayed value if the button is clicked', async () => {
    render(<Counter/>);
    const button = screen.getByRole('button');
    const display = screen.getByTestId('display');
    expect(display.innerHTML).toEqual('Counter: 0');
    await userEvent.click(button);
    expect(display.innerHTML).toEqual('Counter: 1');
  })

  it('should not throw accessibility errors', async () => {
    const {container} = render(<Counter/>);
    const results = await axe.run(container)
    expect(results.violations).toEqual([]);
  });
})