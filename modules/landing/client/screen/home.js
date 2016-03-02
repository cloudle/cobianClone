import {Component} from 'react';
import ReactMixin from 'react-mixin';

import HeadingArea from '../component/heading';
import AboutArea from '../component/about.js';
import RegisterArea from '../component/register.js';
import FeaturesArea from '../component/features.js';
import FooterArea from '../component/footer';

@ReactMixin.decorate(ReactMeteorData)
export default class Home extends Component {
	state = {};

	getMeteorData() {
		return {};
	}

	render() {
		return <div id="home" className="contents">
			<HeadingArea />
			<div className="container"></div>
            <AboutArea />
            <RegisterArea />
            <FeaturesArea />
            <FooterArea />
		</div>
	}
}