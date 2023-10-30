import React from 'react';
// import { CaretDownFill } from 'react-bootstrap-icons';
// import '../reviewsStyle.css';

// type CharBreakdownProps = {
//   characteristics: string[];
// };

export const filterLow = (name: string) => {
  if (name === 'Fit') {
    return 'Runs tight';
  } else if (name === 'Size') {
    return 'A size too small';
  } else if (name === 'Width') {
    return 'Too narrow';
  } else if (name === 'Comfort') {
    return 'Uncomfortable';
  } else if (name === 'Quality') {
    return 'Poor';
  } else if (name === 'Length') {
    return 'Runs Short';
  }
};

export const filterHigh = (name: string) => {
  if (name === 'Fit') {
    return 'Runs long';
  } else if (name === 'Size') {
    return 'A size too wide';
  } else if (name === 'Width') {
    return 'Too wide';
  } else if (name === 'Comfort') {
    return 'Perfect';
  } else if (name === 'Quality') {
    return 'Perfect';
  } else if (name === 'Length') {
    return 'Runs long';
  }
};

export const CharBreakdown: React.FC = (props) => (
  <>
    <div>Size</div>
    <div>Comfort</div>
  </>
);

// {
//   props.characteristics.map((char, i) => (
//     <React.Fragment key={i}>
//       <div className="indy-container">
//         <label
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             padding: '10px',
//             fontSize: '15px',
//             fontWeight: 'bold',
//           }}
//         >
//           {char[0]}
//         </label>
//         <div style={{ backgroundColor: 'lightgrey' }}>
//           <div
//             className="char-bar-filler"
//             // style={{
//             //   height: '10px',
//             //   width: `${(Number(char[1].value) / 5) * 100}%`,
//             // }}
//           >
//             {/* <CaretDownFill style={{ float: 'right' }} /> */}
//           </div>
//         </div>
//         <div
//           className="label-container"
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             width: '100%',
//           }}
//         >
//           <label>{filterLow(char[0])}</label>
//           <label style={{ display: 'flex', justifyContent: 'flex-end' }}>
//             {filterHigh(char[0])}
//           </label>
//           {char[0] !== 'Comfort' && char[0] !== 'Quality' ? (
//             <label>Perfect</label>
//           ) : null}
//         </div>
//       </div>
//       <br />
//     </React.Fragment>
//   ));
// }
