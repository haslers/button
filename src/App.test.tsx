import React from 'react';
import { render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render a the app', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  })
})