import React from "react";

//children 

const Scroll = (props) => { //try console.logging props
    return(
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}> {/*Use double bnrackets to add css to style attribute*/}
            {props.children}
        </div>
    )
}

export default Scroll