import React, { Component } from 'react';
import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'December 25, 2017',
			new_deadline: ''
		}
	}
 
	change_deadline() {
		this.setState({deadline: "November 25, 2017"})
	}

	render() {
		return(
			<div className="App">
				<div className="App-title">Countdown to {this.state.deadline}</div>
				<div>
					<div className="Clock-days">Days</div>
					<div className="Clock-hours">Hours</div>
					<div className="Clock-minutes">Minutes</div>
					<div className="Clock-seconds">Seconds</div>
				</div>
				<div>
					<input 
						placeholder='new date'
						onChange={event => console.log('event', event)}
					/>
					<button onClick={() => this.change_deadline()}>
					Submit
					</button>
				</div>
			</div>
			)
	}
}

export default App;