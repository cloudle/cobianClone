import {Component} from 'react';
import ReactMixin from 'react-mixin';

import HeadingArea from '../component/heading';

@ReactMixin.decorate(ReactMeteorData)
export default class Home extends Component {
	state = {

	};

	getMeteorData() {

		return {};
	}

	render() {
		return <div id="home" className="contents">
			<HeadingArea />

			<div className="container">
				<span>Hello world!</span>
			</div>
		</div>
	}
}