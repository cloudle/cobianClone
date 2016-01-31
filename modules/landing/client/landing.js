import {Component, PropTypes} from 'react';
import Navigation from './component/navigation';

export default  class LandingSite extends Component {
	static propTypes = {
		children: PropTypes.any.isRequired
	};

	componentWillMount() {
		require('./styles/landing.import.css')
	}

	render() {
		return <div>
			<Navigation />
			{this.props.children}
		</div>
	}
}