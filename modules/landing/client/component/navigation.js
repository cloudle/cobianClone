import {Component} from 'react';
import MenuItem from './pure/navigationMenuItem';

export default class Navigation extends Component {
	render() {
		return <div className="main top navigation">
			<div className="authentication-wrapper">
				<div className="ribbon"></div>

				<div className="container">
					<div className="commands">
						<div className="auth-menu-item">
                            <span className="fa fa-envelope"></span>
                            info@yourdomain.com
                        </div>

						<div className="auth-menu-item">
                            <span className="fa fa-phone"></span>
                            +6221-123-456-789
                        </div>

						<div className="auth-menu-item">
                            <span className="fa fa-lock"></span>
                            <a href="http://ninetheme.com/themes/cobian/index.php/demo-login-register-page/">
                                Register
                            </a>
                        </div>

						<div className="auth-menu-item">
                            <a href="http://ninetheme.com/themes/cobian/index.php/demo-login-register-page/" className="btn btn-primary">
                                Login
                            </a>
                        </div>
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