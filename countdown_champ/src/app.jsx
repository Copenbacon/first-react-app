import React, { Component } from 'react';
import Clock from './clock.jsx';
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
		console.log("state", this.state);
		this.setState({deadline: this.state.new_deadline});
	}

	render() {
		return(
			<div className="App">
				<div className="App-title">Countdown to {this.state.deadline}</div>
				<Clock deadline={this.state.deadline}/>
				<div>
					<input 
						placeholder='new date'
						onChange={event => this.setState({new_deadline: event.target.value})}
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