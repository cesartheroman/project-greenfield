import React from 'react';

// import ProgressBar from 'react-bootstrap/ProgressBar';
// import '../reviewsStyle.css';

type StarBreakdownProps = {
  numOfRatings: number;
  filtered: boolean;
  stars: number[];
  changeView: () => void;
  handleClick: (e: React.MouseEvent) => void;
};

const StarBreakdown: React.FC<StarBreakdownProps> = ({
  numOfRatings,
  filtered,
  stars,
  changeView,
  handleClick,
}) => (
  <>
    <div className="starBarContainer">
      <div>
        {/* {avgRecPercent.toFixed(0) !== 'NaN' ? avgRecPercent.toFixed(0) : 0} */}
        0% of reviews recommend this product
      </div>
      <div className="progress-label-left" onClick={(e) => handleClick(e)}>
        5 stars
        <progress className="progress w-56" value={40} max={100}></progress>
      </div>
      <div className="progress-label-left" onClick={(e) => handleClick(e)}>
        4 stars
        <progress className="progress w-56" value={40} max={100}></progress>
      </div>
      <div className="progress-label-left" onClick={(e) => handleClick(e)}>
        3 stars
        <progress className="progress w-56" value={40} max={100}></progress>
      </div>
      <div className="progress-label-left" onClick={(e) => handleClick(e)}>
        2 stars
        <progress className="progress w-56" value={40} max={100}></progress>
      </div>
      <div className="progress-label-left" onClick={(e) => handleClick(e)}>
        1 stars
        <progress className="progress w-56" value={40} max={100}></progress>
      </div>
    </div>
    {filtered && (
      <>
        <p>
          Current filters applied:{' '}
          {stars.map((star, i) => (
            <span key={i}>"{star} stars", </span>
          ))}
        </p>
        <p className="remove-filter" onClick={changeView}>
          Remove All Filters
        </p>
      </>
    )}
  </>
);

export default StarBreakdown;
