import {render} from '@testing-library/react';
import * as axe from 'axe-core';
import React from 'react';
import {Counter} from './Counter';

describe('Counter', () => {
  it('should not throw accessibility errors', async () => {
    const {container} = render(<Counter/>);
    const results = await axe.run(container)
    expect(results.violations).toEqual([]);
  });
})