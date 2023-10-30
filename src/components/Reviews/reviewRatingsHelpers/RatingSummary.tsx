import React from 'react';
import Stars from './Stars';

type RatingSummaryProps = {
  avgRatings: number;
};

const RatingSummary: React.FC<RatingSummaryProps> = ({ avgRatings }) => {
  return (
    <div>
      <h6>RATINGS & REVIEWS</h6>
      {/*TODO: Handle styling through Tailwind*/}
      <div
        className="avgRatings-stars-container"
        style={{ display: 'flex', justifyContent: 'flex-start' }}
      >
        <span style={{ fontSize: 45 }}>{avgRatings.toFixed(1)}</span>
        <Stars rating={avgRatings} />
      </div>
    </div>
  );
};

export default RatingSummary;
