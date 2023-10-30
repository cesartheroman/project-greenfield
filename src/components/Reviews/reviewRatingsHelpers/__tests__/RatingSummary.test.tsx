import React from 'react';
import { render } from '@testing-library/react';
import RatingSummary from '../RatingSummary';

describe(RatingSummary, () => {
  it('should render the component', () => {
    const { getByText } = render(<RatingSummary avgRatings={1} />);

    expect(getByText('RATINGS & REVIEWS')).toBeInTheDocument();
  });

  it('should change number based on props', () => {
    const avgRating = 2.3;
    const { getByText } = render(<RatingSummary avgRatings={avgRating} />);
    const numberSpan = getByText(`${avgRating}`).innerHTML;

    expect(Number(numberSpan)).toBe(avgRating);
  });
});
