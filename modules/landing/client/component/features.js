import {Component} from 'react';

export default class FeaturesArea extends Component {
    render() {
        return <section id="features">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 title-section">
                        <h4 className="title">
                            <span style={{color: '#c75b5b'}}>
                                OUR FEATURES
                            </span>
                            <span style={{color: '#48494b', fontSize: '24px', textTransform: 'none'}}>
                                The reason why choose us
                            </span>
                        </h4>

                        <div className="line"><i className="iconi icon-24 icon-trophy"></i></div>
                    </div>
                </div>

                <div className="row wrap-feature-two">
                    <div className="col-md-4">
                        <ul className="feature-two left">
                            <li>
                                <i className="icon icon-64 icon-tablet"></i>
                                <h5>Responsive</h5>
                                <p>Hrrem volutpat per in, te hinc essent mea ei pro corrumpi</p>
                            </li>
                            <li>
                                <i className="icon icon-64 icon-clipboard"></i>
                                <h5>Documentation</h5>
                                <p>Hrrem volutpat per in, te hinc essent mea ei pro corrumpi</p>
                            </li>
                            <li style={{marginBottom: '-35px'}}>
                                <i className="icon icon-64 icon-hourglass"></i>
                                <h5>24/7 Support</h5>
                                <p>Hrrem volutpat per in, te hinc essent mea ei pro corrumpi</p>
                            </li>
                            <span className="line"></span>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <img className="img-responsive img-feature-two" style={{paddingTop: '50px'}}
                             src="http://ninetheme.com/themes/cobian/wp-content/uploads/2015/12/man1.png" alt=""/>
                    </div>

                    <div className="col-md-4">
                        <ul className="feature-two right">
                            <li>
                                <i className="icon icon-64 icon-rocket"></i>
                                <h5>Flat Design</h5>
                                <p>Hrrem volutpat per in, te hinc essent mea ei pro corrumpit.</p>
                            </li>
                            <li>
                                <i className="icon icon-64 icon-rocket"></i>
                                <h5>Easy to use</h5><p>Hrrem volutpat per in, te hinc essent mea ei pro corrumpit.</p>
                            </li>
                            <li style={{marginBottom: '-35px'}}>
                                <i className="icon icon-64 icon-interstate"></i>
                                <h5>Plag &amp; play</h5>
                                <p>Hrrem volutpat per in, te hinc essent mea ei pro corrumpit.</p>
                            </li>
                            <span className="line"></span>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    }
}