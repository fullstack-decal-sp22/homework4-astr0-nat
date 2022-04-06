import React from "react";
import './styles/Square.css';
// what happens when you click on a square
function Square(props) {
    

   // can use the props.onClick function we end up passing in here and use our local variables wiht it (?) 

    return (

        //our onClick function here called onClick just calls this other function, props.onClick()
        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>

    
        
            
    )
}

export default Square;