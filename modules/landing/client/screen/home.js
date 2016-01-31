import {Component} from 'react';
import ReactMixin from 'react-mixin';

@ReactMixin.decorate(ReactMeteorData)
export default class Home extends Component {
	state = {

	};

	getMeteorData() {

		return {};
	}

	render() {
		return <div id="home" className="container">
			<h1>Hello world!</h1>
		</div>
	}
}