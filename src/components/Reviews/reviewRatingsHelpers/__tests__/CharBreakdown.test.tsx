import React from 'react';
import { render } from '@testing-library/react';
import { CharBreakdown } from '../CharBreakdown';

describe(CharBreakdown, () => {
  test('it should render components', () => {
    const { getByText } = render(<CharBreakdown />);

    expect(getByText('Size')).toBeInTheDocument();
    expect(getByText('Comfort')).toBeInTheDocument();
  });
});
