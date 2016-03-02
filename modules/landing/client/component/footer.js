import {Component} from 'react';
import FooterLogo from './footer/footerLogo.js';
import FooterLink from './footer/footerLink.js';
import FooterSubscribe from './footer/footerSubscribe.js';
import FooterTwitterFeed from './footer/footerTwitterFeed.js';

export default class FooterArea extends Component {
    render() {
        return <footer>
            <div className="main-footer">
                <div className="container">
                    <row>
                        <FooterLogo />
                        <FooterLink />
                        <FooterSubscribe />
                        <FooterTwitterFeed />
                    </row>
                </div>
            </div>

            <div className="sub-footer">
                2015 © Copyright - All right reserved <a href="#">NoiNoi</a>
            </div>
        </footer>
    }
}