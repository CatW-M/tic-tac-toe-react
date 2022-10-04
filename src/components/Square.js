import React from 'react';

class Square extends React.Component {
    render () {
        return (
            <button className="square">
                {this.props.value}
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