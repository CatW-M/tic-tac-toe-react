import React from 'react';

function Square(props) {
// class Square extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         value: null,
//     //     };
//     // }
//     render () {
    const style = props.value ? `squares ${props.value}` : `squares`;
        return (
            <button className={style}
            onClick={props.onClick}
            >
                {props.value}
            </button>
        );
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