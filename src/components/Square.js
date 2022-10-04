import React from 'react';

class Square extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: null,
    //     };
    // }
    render () {
        return (
            <button className="square"
            onClick={() => this.props.onClick()}
            >
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