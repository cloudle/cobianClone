import {Component} from 'react';

export default class FooterLink extends Component {
    render() {
        return <div className="col-md-3 footer-item">
            <div className="row">
                <div className="col-md-5 col-sm-6 col-xs-6">

                    <ul className="footer-link">
                        <li><a href="#">Travel</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">moree...</a></li>
                    </ul>
                </div>


                <div className="col-md-5 col-sm-6 col-xs-6">

                    <ul className="footer-link">
                        <li><a href="#">Travel</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">moree...</a></li>
                    </ul>
                </div>
            </div>
        </div>
    }
}