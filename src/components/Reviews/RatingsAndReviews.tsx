import React, { useState } from 'react';
// import { getReviews } from '../../actions/ReviewActions/actions';
import RatingsBreakdown from './reviewRatingsHelpers/RatingsBreakdown';
import ReviewsList from './reviewRatingsHelpers/ReviewsList';
// import './reviewsStyle.css';
import reviews from '../../../data/reviews';
import { CharBreakdown } from './reviewRatingsHelpers/CharBreakdown';

type ReviewPayload = {
  product: string;
  page: number;
  count: number;
  results: Review[];
};

type Review = {
  review_id: number;
  rating: number;
  summary: string;
  recommend: boolean;
  response: boolean;
  body: string;
  date: string;
  reviewer_name: string;
  helpfulness: number;
  photos: Photos[];
};

type Photos = {
  id: number;
  url: string;
};

type RatingsAndReviewsProps = {
  name: string;
  productId: number;
};

const RatingsAndReviews: React.FC<RatingsAndReviewsProps> = ({
  name,
  productId,
}) => {
  const [filtered, setFiltered] = useState(false);
  const [starCount, setStarCount] = useState([]);
  const [numOfReviews, setNumOfReviews] = useState(2);
  const [showMore, setShowMore] = useState(true);

  const changeView = () => {
    /*
    this.setState({
      filtered: false,
      starCount: [],
      numOfReviews: this.state.numOfReviews + 2,
    });
    */
  };

  const loadMoreReviews = () => {
    /*
     if (reviews.length > this.state.numOfReviews) {
      this.setState({
        numOfReviews: this.state.numOfReviews + 2,
      });
    } else {
      this.setState({
        showMore: false,
      });
    }
    */
  };

  const handleClick = (e: React.MouseEvent) => {
    /*
      this.setState({
      filtered: true,
    });

    let star = Number(starCount.target.textContent.slice(0, 1));
    if (!this.state.starCount.includes(star)) {
      this.setState({
        starCount: [...this.state.starCount, star],
      });
    } else {
      let removed = this.state.starCount.filter(
        (currStar) => currStar !== star
      );
      this.setState(
        {
          starCount: [...removed],
        },
        () => {
          if (this.state.starCount.length === 0) {
            this.setState({
              filtered: false,
            });
          }
        }
      );
    }
      */
  };

  const closeModal = () => {
    /*
    this.setState({
      filtered: false,
    });
    */
  };

  const renderView = () => {
    return <div>ReviewsList Placeholder</div>;
    // if (!this.state.filtered) {
    //   let reviews = reviews.slice(0, this.state.numOfReviews);
    //   return (
    //     <ReviewsList
    //       loadMoreReviews={this.loadMoreReviews}
    //       name={this.props.name}
    //       productId={this.props.productId}
    //       show={this.state.showMore}
    //       clickHandler={this.loadMoreReviews}
    //       reviews={reviews}
    //     />
    //   );
    // } else {
    //   let filtered = reviews.filter((review) =>
    //     this.state.starCount.includes(review.rating)
    //   );
    //   return <ReviewsList reviews={filtered} productId={productId} />;
    // }
  };

  return (
    <div id="anchor" className="ratingsReviewContainer container">
      <div className="ratingsBreakdown">
        <RatingsBreakdown
          productId={productId}
          stars={starCount}
          filtered={filtered}
          numOfRatings={numOfReviews}
          changeView={changeView}
          handleClick={handleClick}
        />
      </div>

      {/* <div className="reviewsList">{renderView()}</div> */}
      <ReviewsList
        productId={1}
        reviews={reviews.results}
        show={false}
        clickHandler={() => console.log('click handled!')}
        loadMoreReviews={() => console.log('more reviews loaded')}
        name={'test'}
      />
    </div>
  );
};

export default RatingsAndReviews;

// class _RatingsAndReviews extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filtered: false,
//       starCount: [],
//       numOfReviews: 2,
//       showMore: true,
//     };
//     this.handleClick = this.handleClick.bind(this);
//     this.changeView = this.changeView.bind(this);
//     this.loadMoreReviews = this.loadMoreReviews.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//   }

//   componentDidMount() {
//     // this.props.getData(
//     //   `http://18.224.200.47/reviews/${this.props.productId}/list?count=30`
//     // );
//   }

//   changeView() {
//     this.setState({
//       filtered: false,
//       starCount: [],
//       numOfReviews: this.state.numOfReviews + 2,
//     });
//   }

//   loadMoreReviews() {
//     if (reviews.length > this.state.numOfReviews) {
//       this.setState({
//         numOfReviews: this.state.numOfReviews + 2,
//       });
//     } else {
//       this.setState({
//         showMore: false,
//       });
//     }
//   }

//   renderView() {
//     return <div>ReviewsList Placeholder</div>;
//     // if (!this.state.filtered) {
//     //   let reviews = reviews.slice(0, this.state.numOfReviews);
//     //   return (
//     //     <ReviewsList
//     //       loadMoreReviews={this.loadMoreReviews}
//     //       name={this.props.name}
//     //       productId={this.props.productId}
//     //       show={this.state.showMore}
//     //       clickHandler={this.loadMoreReviews}
//     //       reviews={reviews}
//     //     />
//     //   );
//     // } else {
//     //   let filtered = reviews.filter((review) =>
//     //     this.state.starCount.includes(review.rating)
//     //   );
//     //   return <ReviewsList reviews={filtered} productId={productId} />;
//     // }
//   }

//   handleClick(starCount) {
//     this.setState({
//       filtered: true,
//     });

//     let star = Number(starCount.target.textContent.slice(0, 1));
//     if (!this.state.starCount.includes(star)) {
//       this.setState({
//         starCount: [...this.state.starCount, star],
//       });
//     } else {
//       let removed = this.state.starCount.filter(
//         (currStar) => currStar !== star
//       );
//       this.setState(
//         {
//           starCount: [...removed],
//         },
//         () => {
//           if (this.state.starCount.length === 0) {
//             this.setState({
//               filtered: false,
//             });
//           }
//         }
//       );
//     }
//   }

//   closeModal() {
//     this.setState({
//       filtered: false,
//     });
//   }

//   render() {
//     return (
//       <div id="anchor" className="ratingsReviewContainer container">
//         <div className="ratingsBreakdown">
//           <RatingsBreakdown
//             productId={productId}
//             changeView={this.changeView}
//             stars={this.state.starCount}
//             filtered={this.state.filtered}
//             handleClick={this.handleClick}
//           />
//         </div>
//         <div className="reviewsList">{this.renderView()}</div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     reviews: state.reviews.reviewsData,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getData: (url) => dispatch(getReviews(url)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(RatingsAndReviews);
