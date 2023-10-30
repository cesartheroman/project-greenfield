import React from 'react';
import { render } from '@testing-library/react';
import RatingsBreakdown from '../RatingsBreakdown';
import RatingSummary from '../RatingSummary';

describe(RatingsBreakdown, () => {
  test('it should render the component', () => {
    const { getByText } = render(
      <RatingsBreakdown
        productId={1}
        stars={[1, 2, 3, 4, 5]}
        filtered={false}
        numOfRatings={10}
        changeView={() => console.log('changedView!')}
        handleClick={() => console.log('handleClick')}
      />
    );

    expect(getByText('RATINGS & REVIEWS')).toBeInTheDocument();
  });
});
