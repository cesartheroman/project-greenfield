import React from 'react';
import { render } from '@testing-library/react';
import Stars from '../Stars';

describe('Stars Component', () => {
  it('should render component with correct props', () => {
    const { getByTitle } = render(<Stars rating={1} />);

    expect(getByTitle('1 Star')).toBeInTheDocument();
  });
});
