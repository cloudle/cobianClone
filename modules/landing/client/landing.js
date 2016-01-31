import {Component, PropTypes} from 'react';
import Navigation from './component/navigation';

export default  class LandingSite extends Component {
	static propTypes = {
		children: PropTypes.any.isRequired
	};

	componentWillMount() {
		require('./styles/landing.styl')
	}

	render() {
		return <div>
			<Navigation />
			{this.props.children}
		</div>
	}
}