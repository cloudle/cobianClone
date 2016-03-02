import {Component} from 'react';

export default class RegisterArea extends Component {
    render() {
        return <div className="cta-area ">
            <div className="bg-primary pattern parallax"
                 style={{backgroundPosition: '50%', backgroundColor: '#c75b5b'}}></div>

            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="ct-action">
                            <h4 className="title-one">GET PREMIUM ACCSESS NOW !</h4>
                            <h4 className="title-two">Sometimes you need a call to action area</h4>
                            <a href="#" className="btn btn-warning">Register Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
