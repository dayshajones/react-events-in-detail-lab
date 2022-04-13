import React, {Component} from 'react'

class DelayedButton extends Component{

   
	setTimeout = (event) => {
		event.persist()
		this.props.delay
		this.props.onDelayedClick(event)
	}

	render(){
		return (
			<button
			onClick={this.setTimeout}>Delayed
			</button>
		)
	}
}


export default DelayedButton