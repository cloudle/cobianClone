import {Component} from 'react';

export default class FooterSubscribe extends Component {
    render() {
        return <div className="col-md-3 footer-item">
            <h5 className="title-footer">Subscribe Now</h5>

            <p>Hrrem , te hinc essent mea ei pro corrumpit.</p>

            <div className="input-group left">
                <input type="text" className="form-control form-subscribe" placeholder="Enter Your Email" />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">
                        <span className="fa fa-envelope"></span>
                    </button>
                </span>

            </div>
        </div>
    }
}