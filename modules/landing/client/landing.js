import {Component, PropTypes} from 'react';
import ScrollTop from './component/scrollTop';
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
            <ScrollTop />
			<Navigation />
			{this.props.children}
		</div>
	}
}