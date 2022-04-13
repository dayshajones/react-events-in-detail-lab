// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component{

    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY]) 
    }

    render() {
        return (
            <button onClick={this.handleClick}>Coors</button>
        )
    }
}

export default CoordinatesButton