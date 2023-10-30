import React, { useEffect, useState } from 'react';
import RatingSummary from './RatingSummary';
import StarBreakdown from './StarBreakdown';
import { CharBreakdown } from './CharBreakdown';

type RatingsBreakdownProps = {
  productId: number;
  stars: number[];
  filtered: boolean;
  numOfRatings: number;
  changeView: () => void;
  handleClick: (e: React.MouseEvent) => void;
};

const RatingsBreakdown: React.FC<RatingsBreakdownProps> = ({
  productId,
  stars,
  filtered,
  numOfRatings,
  changeView,
  handleClick,
}) => {
  const [currentRating, setCurrentRating] = useState(0);
  const [avgRatings, setAvgRating] = useState(0);
  const [recommended, setRecommended] = useState({});
  const [avgRecPercent, setAvgRecPercent] = useState(0);
  const [characteristics, setCharacterstics] = useState([]);

  const getTotalReviews = () => {
    /*
    if (Object.values(this.state.ratings).length !== 0) {
      return Object.values(this.state.ratings).reduce(
        (acc, currVal) => acc + currVal
      );
    } else {
      return 0;
    }
    */
  };

  const getRatingsAvg = () => {
    /*
    let weightedRatings = () => {
      let result = 0;
      for (let key in this.state.ratings) {
        result += key * this.state.ratings[key];
      }
      return result;
    };
    let ratings = weightedRatings();
    let numOfRatings = Object.values(this.state.ratings).reduce(
      (acc, prev) => acc + prev
    );
    let avg = ratings / numOfRatings;
    this.setState({
      avgRatings: avg,
    });
    */
  };

  const getRecAvg = () => {
    /*
    let totalRecs = Object.values(this.state.recommended).reduce(
      (acc, prev) => acc + prev
    );
    let positiveRecs = this.state.recommended['0'];
    let avgRec = (positiveRecs / totalRecs) * 100;

    this.setState({
      avgRecPercent: avgRec,
    });
    */
  };

  useEffect(() => {
    /*
    TODO: Another API call, this should be some sort of props passed down, but figure out later, logic here is as following, need to simplify, overcomplicated:
    1. Get reviews meta data
    2. set state based on ratings and data.ratings
    3. Make call to getTotalReviews()
    4. Set characteristics from data
    5. Set state of numOfRatings, recommended, characteristics
    6. Call getRatingsAvg() and getRecAvg()
      */
  }, []);

  return (
    <div>
      <RatingSummary avgRatings={avgRatings} />

      <StarBreakdown
        changeView={changeView}
        stars={stars}
        filtered={filtered}
        numOfRatings={numOfRatings}
        handleClick={handleClick}
      />

      <CharBreakdown />
    </div>
  );
};

export default RatingsBreakdown;

// class _RatingsBreakdown extends React.Component<RatingsBreakdownProps> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       ratings: {},
//       numOfRatings: 0,
//       currentRating: 0,
//       avgRatings: 0,
//       recommended: {},
//       avgRecPercent: 0,
//       characteristics: [],
//     };
//     this.getTotalReviews = this.getTotalReviews.bind(this);
//     this.getRatingsAvg = this.getRatingsAvg.bind(this);
//     this.getRecAvg = this.getRecAvg.bind(this);
//   }

//   componentDidMount() {
//     axios
//       .get(`http://18.224.200.47/reviews/${this.props.productId}/meta?count=30`)
//       .then(({ data }) => {
//         this.setState(
//           {
//             ratings: Object.assign({}, this.state.ratings, data.ratings),
//           },
//           () => {
//             let totalReviews = this.getTotalReviews();
//             let chars = Object.entries(data.characteristics);

//             this.setState({
//               numOfRatings: totalReviews,
//               recommended: data.recommended,
//               characteristics: chars,
//             });
//           }
//         );
//       })
//       .then(() => {
//         this.getRatingsAvg();
//         this.getRecAvg();
//       })
//       .catch((err) => console.log(err));
//   }

//   getTotalReviews() {
//     if (Object.values(this.state.ratings).length !== 0) {
//       return Object.values(this.state.ratings).reduce(
//         (acc, currVal) => acc + currVal
//       );
//     } else {
//       return 0;
//     }
//   }

//   getRatingsAvg() {
//     let weightedRatings = () => {
//       let result = 0;
//       for (let key in this.state.ratings) {
//         result += key * this.state.ratings[key];
//       }
//       return result;
//     };
//     let ratings = weightedRatings();
//     let numOfRatings = Object.values(this.state.ratings).reduce(
//       (acc, prev) => acc + prev
//     );
//     let avg = ratings / numOfRatings;
//     this.setState({
//       avgRatings: avg,
//     });
//   }

//   getRecAvg() {
//     let totalRecs = Object.values(this.state.recommended).reduce(
//       (acc, prev) => acc + prev
//     );
//     let positiveRecs = this.state.recommended['0'];
//     let avgRec = (positiveRecs / totalRecs) * 100;

//     this.setState({
//       avgRecPercent: avgRec,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h6>Ratings & Reviews</h6>
//         <RatingSummary
//           avgRatings={this.state.avgRatings}
//           numOfRatings={this.state.numOfRatings}
//         />
//         <br />
//         <div>
//           {this.state.avgRecPercent.toFixed(0) !== 'NaN'
//             ? this.state.avgRecPercent.toFixed(0)
//             : 0}
//           % of reviews recommend this product
//         </div>
//         <br />
//         <StarBreakdown
//           changeView={this.props.changeView}
//           stars={this.props.stars}
//           filtered={this.props.filtered}
//           ratings={this.state.ratings}
//           numOfRatings={this.state.numOfRatings}
//           handleClick={this.props.handleClick}
//         />
//         <br />
//         <CharBreakdown characteristics={this.state.characteristics} />
//       </div>
//     );
//   }
// }
