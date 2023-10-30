import React from 'react';
import { render } from '@testing-library/react';
import ReviewTile from '../ReviewTile';
import reviews from '../../../../../data/reviews';

type Review = {
  review_id: number;
  rating: number;
  summary: string;
  recommend: number;
  response: string;
  body: string;
  date: string;
  reviewer_name: string;
  helpfulness: number;
  photos: Photo[];
};

type Photo = {
  id: number;
  url: string;
};

describe(ReviewTile, () => {
  test('it should render the component', () => {
    const reviewsArray: Review[] = reviews.results;
    const { getByText } = render(<ReviewTile reviews={reviewsArray} />);
    console.log(getByText(reviewsArray[0].reviewer_name));

    // expect()).toBeInTheDocument();
  });
});
