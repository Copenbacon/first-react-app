import React, { Component } from 'react';
import './app.css';

class Clock extends Component {

	constructor(props) {
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}

	componentWillMount() {
		this.get_time_until(this.props.deadline);
	}

	componentDidMount() {
		setInterval(() => this.get_time_until(this.props.deadline), 1000);

	}

	leading_zero(num) {
		return num < 10 ? '0' + num : num;
	}

	get_time_until(deadline) {
		const time = Date.parse(deadline) - Date.parse(new Date());
		const seconds = Math.floor((time/1000) % 60);
		const minutes = Math.floor((time/1000/60) % 60);
		const hours = Math.floor(time/(1000*60*60) % 24);
		const days = Math.floor(time/(1000*60*60*24));

		this.setState({days, hours, minutes, seconds});
	}


	render() {
		return(
			<div>
				<div className="Clock-days">{this.leading_zero(this.state.days)} Days</div>
				<div className="Clock-hours">{this.leading_zero(this.state.hours)} Hours</div>
				<div className="Clock-minutes">{this.leading_zero(this.state.minutes)} Minutes</div>
				<div className="Clock-seconds">{this.leading_zero(this.state.seconds)} Seconds</div>
			</div>
		)

	}

}

export default Clock;