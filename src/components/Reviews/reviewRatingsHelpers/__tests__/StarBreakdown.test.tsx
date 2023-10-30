import React from 'react';
import { render } from '@testing-library/react';
import StarBreakdown from '../StarBreakdown';

describe(StarBreakdown, () => {
  it('should render the component', () => {
    const { getByText } = render(
      <StarBreakdown
        numOfRatings={1}
        filtered={false}
        stars={[1, 2, 3, 4, 5]}
        changeView={() => console.log('changeView')}
        handleClick={() => console.log('handleClick')}
      />
    );

    expect(
      getByText('0% of reviews recommend this product')
    ).toBeInTheDocument();
  });
});
