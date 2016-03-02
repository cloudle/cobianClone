import {Component} from 'react';

export default class FooterLogo extends Component {
    render() {
        return <div className="col-md-3 footer-item">
            <a href="~" className="href">
                <img src="images/logo-footer.png" alt="Cobian Logo" className="logo-footer src"/>
            </a>

            <ul className="social-network">
                <li>
                    <a href="~"><span className="fa fa-twitter"></span></a>
                </li>
                <li>
                    <a href="~"><span className="fa fa-facebook"></span></a>
                </li>
            </ul>
        </div>
    }
}