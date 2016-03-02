import {Component} from 'react';

export default class FooterItemOne extends Component {
    render() {
        return <div className="col-md-3 footer-item">
            <h5 className="title-footer">
                Twitter Feed
            </h5>
            <div id="tweecool">
                <ul className="twitter-feed">
                    <li>
                        <div className="tweets_txt">
                            RT @dalepartridge: 9 Online Tools That Made Me Wealthy: https://t.co/HAbHTmN3PD https://t.co/gJ9NOsSxOj
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    }
}