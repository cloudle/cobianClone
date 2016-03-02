import {Component} from 'react';
import MenuItem from './pure/navigationMenuItem';

export default class Navigation extends Component {
	render() {
		return <div className="main top navigation">
			<div className="authentication-wrapper">
				<div className="ribbon"></div>
				<div className="container">
					<div className="commands">
						<div className="auth-menu-item">12</div>
						<div className="auth-menu-item">12</div>
						<div className="auth-menu-item">12</div>
					</div>
				</div>
			</div>
			<div className="navigation-wrapper">
				<div className="container">
					<div className="branding">
						<span>Branding</span>
					</div>

					<div className="navigation-menu">
						<MenuItem title="none" active={false} />
						<MenuItem title="second" active={false} />
						<MenuItem title="third" active={false} />
					</div>
				</div>
			</div>
		</div>
	}
}