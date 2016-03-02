import {Component} from 'react';

export default class HeadingArea extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cloudPosition: 10
		}
	}

	componentWillMount() {
		this.cloudMoveInterval = setInterval(() => {
			this.moveCloud();
		}, 30)
	}

	componentWillUnmount() {
		clearInterval(this.cloudMoveInterval);
	}

	moveCloud() {
		this.setState({cloudPosition: this.state.cloudPosition-1})
	}

	render() {
		var cloudPositionStyle = {backgroundPosition: `${this.state.cloudPosition}px 0px`};

		return <div className="heading-area"
                    style={cloudPositionStyle}>

			<div className="heading-background">

            </div>

			<div className="heading-road"></div>
		</div>
	}
}