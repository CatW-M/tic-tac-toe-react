import React from 'react';

class Square extends React.Component {
    render () {
        return (
            <button className="square">
                {/* To DO */}
            </button>
        );
    }
}

//Code from hooks tutorial
// const Square = ({ value, onClick }) => {
//     const style = value ? `squares ${value}` : `squares`;
//         return (
//             <button className={style} onClick={onClick}>
//                 {value} 
//             </button>
//     )
//   }

  export default Square;